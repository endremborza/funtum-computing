import { pi, i, multiply, sqrt, matrix, complex, pow, e, dotDivide, cos, sin, add, subtract } from 'mathjs';
import type { Matrix } from 'mathjs';

export class QuantumGate {
    constructor(
        public name: string,
        public mat: Matrix,
        public qubitIndices: number[]
    ) { }

    isMulti = (): boolean => (this.mat.size()[0] > 2)

}

export const staticGates = {
    H: dotDivide(
        matrix([
            [1, 1],
            [1, -1]
        ]),
        sqrt(2)
    ),
    S: [
        [1, 0],
        [0, i]
    ],
    X: [
        [0, 1],
        [1, 0]
    ],
    Y: [
        [0, multiply(-1, i)],
        [i, 0]
    ],
    Z: [
        [1, 0],
        [0, -1]
    ],
    sqrtX: dotDivide(matrix([[add(1, i), subtract(1, i)], [subtract(1, i), add(1, i)]]), 2),
    SWAP: [
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 1]
    ],
    CNOT: [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 0]
    ]
}

export const create = Object.fromEntries(
    Object.entries(staticGates).map(entry => ([entry[0], (qubitIndices: number[]) => (new QuantumGate(entry[0], matrix(entry[1]), qubitIndices))]))
)


export function phaseShift(phiRate: number, qubitIndices: number[]) {
    let rot: Complex = pow(e, multiply(i, phiRate * pi));
    let mat = matrix([
        [1, 0],
        [0, rot]
    ]);
    return new QuantumGate(`P(${phiRate.toPrecision(2)} π)`, mat, qubitIndices);
}

export function rotateX(thetaRate: number, qubitIndices: number[]) {
    let ht = thetaRate * pi / 2;
    let mat = matrix([
        [cos(ht), multiply(i, -sin(ht))],
        [multiply(i, -sin(ht)), cos(ht)]
    ])
    return new QuantumGate(`Rx(${thetaRate.toPrecision(2)} π)`, mat, qubitIndices)
}