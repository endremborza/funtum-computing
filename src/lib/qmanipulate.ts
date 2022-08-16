import { min, max } from 'mathjs';
import { BlochSphere, transformQubit, SingleQubit } from './qmath';
import { QuantumGate } from './qgates';
import type { Matrix } from 'mathjs';


export type Entangled = { indices: number[] };
export class MeasuredQubit {
    measured: string = ""
};

type QuantumRegisterStateElement = (BlochSphere | Entangled | MeasuredQubit)
export type RegisterHistoryElement = 'pass' | string | QuantumRegisterStateElement;
type IndexedQuantumRegisterHistoryElement = { i: number, j: number, elem: RegisterHistoryElement }

type Measurement = { qubitIndices: number[], name: string }

export type QuantumRegisterTransformation = QuantumGate | Measurement;


class ManipulationLayer {
    transforms: QuantumRegisterTransformation[] = [];
    usedInds: number[] = [];
    entangleRanges: number[][] = [];

    conflicts = (indices: number[]): boolean => {
        let out = false;
        indices.forEach((i) => {
            if (this.usedInds.includes(i)) out = true;
        })
        return out
    }

    betweenEntangles = (indices: number[]): boolean => {
        //if entangle is added later, this might still mess up
        let out = false;
        indices.forEach((i) => {
            this.entangleRanges.forEach((eRange) => {
                if (eRange[0] < i && eRange[1] > i) out = true;
            })
        })
        return out;
    }

    extend = (qrt: QuantumRegisterTransformation) => {
        this.transforms.push(qrt);
        this.usedInds.push(...qrt.qubitIndices)
        if (qrt instanceof QuantumGate && qrt.isMulti()) {
            this.entangleRanges.push([min(qrt.qubitIndices), max(qrt.qubitIndices)])
        }
    }
}

type HistoryLayer = (ManipulationLayer | QuantumRegisterStateElement[])

export function mergeTransforms(transformations: QuantumRegisterTransformation[]) {
    let layers: ManipulationLayer[] = [];
    let fitInd;
    transformations.forEach((transform) => {
        fitInd = layers.length;
        for (let layerInd = layers.length - 1; layerInd >= 0; layerInd--) {
            if (layers[layerInd].conflicts(transform.qubitIndices)) break;
            if (layers[layerInd].betweenEntangles(transform.qubitIndices)) continue;
            fitInd = layerInd;
        }
        if (fitInd == layers.length) layers.push(new ManipulationLayer());
        layers[fitInd].extend(transform)
    });
    return layers
}

export function getHistoryLayers(qubits: SingleQubit[], transforms: QuantumRegisterTransformation[]) {
    let out: HistoryLayer[] = [
        qubits.map((q) => new BlochSphere(q))
    ];
    let currentQubits = qubits;
    let manipulationLayers = mergeTransforms(transforms);
    manipulationLayers.forEach((l) => {
        out.push(l);
        l.transforms.forEach((t) => {
            if (t instanceof QuantumGate) {
                if (t.isMulti()) {
                    //TODO
                } else {
                    t.qubitIndices.forEach((i) => {
                        currentQubits[i] = transformQubit(currentQubits[i], [t.mat])
                    }
                    )
                }
            } else {
                //TODO
            }

        })
        out.push(currentQubits.map((q) => new BlochSphere(q)));
    });
    return out;
}


export class QuantumRegisterHistory {

    layers: HistoryLayer[];
    layerCount: number;
    qubits: number;


    constructor(initialQbits: SingleQubit[], transformations: QuantumRegisterTransformation[]) {
        this.layers = getHistoryLayers(initialQbits, transformations)
        this.qubits = initialQbits.length;
        this.layerCount = this.layers.length;

    }

    iterateElement = () => {
        let out: IndexedQuantumRegisterHistoryElement[] = [];

        this.layers.forEach((layer, i) => {
            if (layer instanceof ManipulationLayer) {
                for (let j = 0; j < this.qubits; j++) {
                    let indTransform = 'pass'
                    layer.transforms.forEach((t) => {
                        if (t.qubitIndices.includes(j)) {
                            indTransform = t.name
                        }
                    })
                    out.push({ i, j, elem: indTransform })
                }
            } else {
                layer.forEach((qubit, j) => { out.push({ i, j, elem: qubit }) })
            }
        })
        return out
    }


}