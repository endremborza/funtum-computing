import { sin, cos, add, pi, matrix, multiply, transpose, sqrt, acos, sum, atan } from 'mathjs';

export const PERP = pi / 2;

export type Polar2D = {
    phi: number;
    r: number;
};

export type Coords2D = { x: number; y: number };

export type Polar3D = {
    theta: number;
    phi: number;
    r: number;
};

export type Coords3D = { x: number; y: number, z: number };


export function getCoords(polar: Polar2D): Coords2D {
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