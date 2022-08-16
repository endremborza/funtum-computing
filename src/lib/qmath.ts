import { sin, cos, add, pi, matrix, multiply, transpose, sqrt, acos, sum, atan, complex, subset, index, norm } from 'mathjs';
import type { Complex, PolarCoordinates, Matrix } from 'mathjs';

export const PERP = pi / 2;

export type Coords2D = { x: number; y: number };

export type Polar3D = {
    theta: number;
    phi: number;
    r: number;
};

export type Coords3D = { x: number; y: number, z: number };
export class SingleQubit {

    constructor(
        public alpha: Complex = complex(1, 0),
        public beta: Complex = complex(0, 0)
    ) { }

    static fromPolar(phiAlpha: number, phiBeta: number, rAlpha: number): SingleQubit {
        let alpha = complex({ r: rAlpha, phi: phiAlpha });
        let beta = complex({ r: sqrt(1 - Math.pow(rAlpha, 2)), phi: phiBeta })
        return new SingleQubit(alpha, beta)
    }

    toParams(): Complex[] {
        return [this.alpha, this.beta]
    }


    toVector() {
        return matrix([[this.alpha], [this.beta]])
    }

    ketZeroChance = (): number => (sqrt(norm(this.alpha)))
    ketOneChance = (): number => (sqrt(norm(this.beta)))

    elem(i: number) {
        return (i == 0) ? this.alpha : this.beta;
    }


};
export class BlochSphere {
    theta: number = 0;
    phi: number = 0;
    constructor(qubit: SingleQubit) {
        const alpha = qubit.alpha.toPolar();
        const beta = qubit.beta.toPolar()

        this.phi = ((x) => (x < 0 ? 2 * pi + x : x))(alpha.phi - beta.phi);
        this.theta = multiply(2, acos(alpha.r));

    }

    ketZeroChance = (): number => (1 - this.theta / pi)
    ketOneChance = (): number => (this.theta / pi)
    phiX = (): number => (cos(this.phi))
    phiY = (): number => (sin(this.phi))

}


export function transformQubit(qubit: SingleQubit, quantumGates: Matrix[]) {
    let vecQubit = qubit.toVector();
    quantumGates.forEach((QM) => {
        vecQubit = multiply(QM, vecQubit);
    });
    return new SingleQubit(subset(vecQubit, index(0, 0)), subset(vecQubit, index(1, 0)));
}



export function getCoords(polar: PolarCoordinates): Coords2D {
    return { x: cos(polar.phi) * polar.r, y: sin(polar.phi) * polar.r };
}

export function vectorFromCoords(coords: Coords3D): number[] {
    return [coords.x, coords.y, coords.z]
}

export function vectorFromPolar(polar: Polar3D): number[] {
    return [polar.r * sin(polar.theta) * cos(polar.phi), polar.r * sin(polar.theta) * sin(polar.phi), polar.r * cos(polar.theta)];
}

export function polarFromCoords(coords: Coords3D): Polar3D {
    let r = sqrt(sum(...[coords.x, coords.y, coords.z].map((x) => Math.pow(x, 2))));
    let phi;
    if (coords.x > 0) {
        phi = atan(coords.y / coords.x)
    } else if (coords.x < 0) {
        phi = atan(coords.y / coords.x) + pi
    } else {
        phi = PERP * Math.sign(coords.y)
    }
    return { phi: phi % (2 * pi), theta: acos(coords.z / r), r }
}

export function coordsFromPolar(polar: Polar3D): Coords3D {
    let vec = vectorFromPolar(polar);
    return { x: vec[0], y: vec[1], z: vec[2] }
}

export function thetaRotation(theta: number) {
    let yPolar = { theta: theta + PERP, phi: PERP, r: 1 };
    let zPolar = { theta, phi: PERP, r: 1 }
    return toTransformMatrix([1, 0, 0], vectorFromPolar(yPolar), vectorFromPolar(zPolar))
}

export function phiRotation(phi: number) {
    let xPolar = { theta: PERP, phi, r: 1 }
    let yPolar = { theta: PERP, phi: phi + PERP, r: 1 }
    return toTransformMatrix(vectorFromPolar(xPolar), vectorFromPolar(yPolar), [0, 0, 1])
}

function toTransformMatrix(xVec: number[], yVec: number[], zVec: number[]) {
    return transpose(matrix([xVec, yVec, zVec]))
}

export function block(bottomLeft: number[], size: number, theta: number, phi: number, gamma: number) {

    const rotationTheta = thetaRotation(theta)
    const rotationPhi = phiRotation(phi)

    const fullRotation = multiply(rotationTheta, rotationPhi)
    const perpVector = multiply([size * cos(gamma), size * sin(gamma), 0], fullRotation);
    const zMove = multiply([0, 0, size], fullRotation);

    const topLeft = add(bottomLeft, zMove)


    return matrix([bottomLeft, topLeft, add(topLeft, perpVector), add(bottomLeft, perpVector)])
}