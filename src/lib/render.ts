import { subset, dotDivide, index, ones, add, multiply, concat, range, min, inv, reshape } from 'mathjs';
import type { Matrix, MathCollection, MathArray } from 'mathjs';

export type SceneElement = { style?: object, line?: boolean, text?: string, faces: Matrix[] };

type RenderElement = { attrs: object, text?: string, line?: boolean }
type SceneIndex = { sceneElemInd: number, faceInd: number }
type TreeNode = { left?: TreeNode, right?: TreeNode, planeParams: Matrix, sceneIndices: SceneIndex[] }
type TreeSide = 'left' | 'right';

type DistanceRecord = { planeParams: Matrix, cameraSide: -1 | 1 | 0 }


function getPlaneParams(shape: Matrix) {
    let planeMatrix = subset(shape, index(range(0, 3), range(0, 3)));
    return multiply(inv(planeMatrix), ones([3, 1]));

}

function getSide(node: TreeNode, shape: Matrix, eps: number): -1 | 0 | 1 {
    let m = min(3, shape.size()[0])
    let res;
    for (let i = 0; i < m; i++) {
        res = subset(multiply(subset(shape, index(i, range(0, 3))), node.planeParams), index(0, 0))
        if (res > (1 + eps)) {
            return 1
        } else if (res < (1 - eps)) {
            return -1
        }
    }

    return 0
}

function treeBuilderBase(node: TreeNode, shape: Matrix, sceneIndex: SceneIndex, eps: number, initiator: Function) {
    let side = getSide(node, shape, eps)
    if (side == 0) {
        node.sceneIndices.push(sceneIndex)
    } else {
        let key: TreeSide = (side < 0) ? 'left' : 'right'
        if (node[key] == undefined) {
            initiator(node, key, shape, sceneIndex)
        } else {
            treeBuilderBase(node[key], shape, sceneIndex, eps, initiator)
        }
    }
}

function insertToTree(node: TreeNode, shape: Matrix, sceneIndex: SceneIndex, eps: number) {
    treeBuilderBase(node, shape, sceneIndex, eps, (node: TreeNode, key: TreeSide, shape: Matrix, sceneIndex: SceneIndex) => { node.sceneIndices.push(sceneIndex) })
}

function insertBasedOnCamera(node: TreeNode | undefined, cameraPosition: Matrix, arr: RenderElement[], eps: number, parser: Function) {
    if (node == undefined) { return }
    let cameraSide = getSide(node, cameraPosition, eps)
    let sameSide: TreeSide = (cameraSide < 0) ? 'left' : 'right';
    let otherSide: TreeSide = (cameraSide < 0) ? 'right' : 'left';
    insertBasedOnCamera(node[otherSide], cameraPosition, arr, eps, parser)
    node.sceneIndices.forEach((sceneIndex) => {
        arr.push(parser(sceneIndex))
    })
    insertBasedOnCamera(node[sameSide], cameraPosition, arr, eps, parser)
}


function getPoints(x: MathArray, y: MathArray, m: number, precision: number) {
    let ss: String[] = [];
    let _f: Function;
    for (let i = 0; i < m; i++) {
        _f = (arr: number[]) => subset(arr, index(i, 0)).toFixed(precision);
        ss.push(`${_f(x)},${_f(y)}`);
    }
    return ss.join(' ');
}

export function getBspTree(
    scene: SceneElement[],
    precision: number,
    shift: number
) {
    const eps = Math.pow(10, -precision)
    let m;
    let sceneIndex: SceneIndex;
    let rootNode: TreeNode;
    let shiftedShape: Matrix;
    let planeParams: Matrix;
    let lines: { line: Matrix, sceneIndex: SceneIndex }[] = [];
    scene.forEach(({ faces }, sceneElemInd) => {
        faces.forEach((rawShape, faceInd) => {
            m = rawShape.size()[0];
            sceneIndex = { sceneElemInd, faceInd };
            shiftedShape = add(rawShape, shift)
            try {
                planeParams = getPlaneParams(shiftedShape);
            } catch (error) {
                // if can't calculate inverse - (error messages will vary depending on browser)
                lines.push({ line: shiftedShape, sceneIndex })
                return
            }

            if (rootNode == undefined) {
                rootNode = { sceneIndices: [sceneIndex], planeParams };
            } else {
                treeBuilderBase(
                    rootNode,
                    shiftedShape,
                    sceneIndex,
                    eps,
                    (node: TreeNode, key: TreeSide, shape: Matrix, sceneIndex: SceneIndex) => { node[key] = { sceneIndices: [sceneIndex], planeParams } })
            }
        });
    });

    lines.forEach(({ line, sceneIndex }) => {
        insertToTree(rootNode, line, sceneIndex, eps)
    })
    return rootNode;
}

export function getFaces(treeRoot: TreeNode, scene: SceneElement[], projectionMatrix: Matrix, cameraPosition: Matrix, precision: number, shift: number): RenderElement[] {
    let out: RenderElement[] = []

    function parser(sceneIndex: SceneIndex): RenderElement {
        let sceneElem = scene[sceneIndex.sceneElemInd];
        let shape = sceneElem.faces[sceneIndex.faceInd]
        let m = shape.size()[0];
        let face = multiply(concat(shape, ones(m, 1)), projectionMatrix);
        let rind = range(0, m);

        let gcol = (c: number) => dotDivide(subset(face, index(rind, c)), subset(face, index(rind, 3)));
        let x = gcol(0);
        let y = multiply(-1, gcol(1));
        //dist = gcol(2);
        let attrs;
        if (sceneElem.text) {
            attrs = { ...sceneElem.style, x: subset(x, index(0, 0)), y: subset(y, index(0, 0)) }
        } else {
            attrs = { points: getPoints(x, y, m, precision), ...sceneElem.style };

        }
        return { line: sceneElem.line, text: sceneElem.text, attrs };

    }
    insertBasedOnCamera(treeRoot, reshape(add(cameraPosition, shift), [1, 3]), out, Math.pow(10, -precision), parser)
    return out;
}


// OOOOLD

export function getFacesOld(
    scene: SceneElement[],
    projectionMatrix: Matrix,
    cameraPosition: Matrix,
    precision: number
) {
    //TODO: clipping + windings + spec shader
    // let shader = (face_index: number, winding: number) => {};

    let out: RenderElement[] = [];
    let face: MathCollection;
    let rind: Matrix;
    let distKeepingArr: DistanceRecord[] = [];
    let x, y, m, faceInd, attrs;
    let gcol: Function;
    scene.forEach(({ faces, style, line, text }) => {
        faces.forEach((shape) => {
            m = shape.size()[0];
            face = multiply(concat(shape, ones(m, 1)), projectionMatrix);
            rind = range(0, m);

            gcol = (c: number) => dotDivide(subset(face, index(rind, c)), subset(face, index(rind, 3)));
            x = gcol(0);
            y = multiply(-1, gcol(1));
            //dist = gcol(2);
            faceInd = binaryArrayInsert(shape, m, cameraPosition, distKeepingArr);
            attrs = { points: getPoints(x, y, m, precision), ...style };
            if (text) {
                attrs = { ...style, x: subset(x, index(0, 0)), y: subset(y, index(0, 0)) }
            }
            out.splice(faceInd, 0, { line, text, attrs });
        });
    });
    return out;
}


function binaryFindInsert(element: number, arr: number[]) {
    let minIndex = 0;
    let maxIndex = arr.length;
    let currentIndex = 0;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = ((minIndex + maxIndex) / 2) | 0; // Faster floor
        currentElement = arr[currentIndex];
        if (currentElement < element) {
            minIndex = currentIndex + 1;
            currentIndex = minIndex;
        } else if (currentElement > element) {
            maxIndex = currentIndex - 1;
        } else {
            break;
        }
    }
    arr.splice(currentIndex, 0, element);
    return currentIndex;
}
