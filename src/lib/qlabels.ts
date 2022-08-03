import { matrix, multiply, pi, type Matrix } from "mathjs";
import { PERP, phiRotation, thetaRotation } from "./qmath";
import { circle } from "./shapes";

function getBaseCircle(blochTheta: number, resolution: number = 8) {
    let rate = blochTheta / (2 * pi)
    if (rate <= 0.25) {
        return [circle(resolution, -rate)]
    }

    return [
        circle(resolution, -0.25),
        multiply(
            circle(resolution, -(rate - 0.25)),
            phiRotation(PERP)
        )
    ]

}

export function getBlochThetaFaces(blochPhi: number, blochTheta: number) {

    function transform(face: Matrix) {
        return multiply(
            multiply(
                multiply(
                    multiply(face, phiRotation(-PERP)),
                    thetaRotation(PERP)
                ),
                phiRotation(-blochPhi)
            ),
            0.5
        )
    }

    return getBaseCircle(blochTheta).map(transform)
}


export function braKet(vectors: Coords2D[], i: number, colors: string[]) {
    let vec = vectors[i];
    return `\\textcolor{${colors[i]}}{(${vec.x.toFixed(2)} + ${vec.y.toFixed(
        2
    )}i) \\cdot | ${i} \\rangle}`;
}

export function getBlochMath(phi: number, theta: number, phiColor: string, thetaColor: string) {
    let thetaSide = `\\textcolor{${thetaColor}}{\\theta: ${(theta / pi).toFixed(2)} \\cdot \\pi}`;
    let phiSide = `\\textcolor{${phiColor}}{\\phi: ${(phi / 2 / pi).toFixed(2)} \\cdot 2\\pi}`;
    return [thetaSide, phiSide].join(', ');
}

export function getBlochLabel(i: number, colors: string[]) {
    let v = [0, -0.1, 1.2 * (1 - 2 * i)];
    return {
        faces: [matrix([v, v])],
        text: `∣${i}⟩`,
        style: { 'font-size': '0.2px', fill: colors[i], stroke: colors[i], opacity: '100%' }
    };
}
