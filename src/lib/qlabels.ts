import { matrix, multiply, pi, type Complex, type Matrix } from "mathjs";
import { PERP, phiRotation, thetaRotation, BlochSphere } from "./qmath";
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

export function getBlochThetaFaces(bloch: BlochSphere) {

    function transform(face: Matrix) {
        return multiply(
            multiply(
                multiply(
                    multiply(face, phiRotation(-PERP)),
                    thetaRotation(PERP)
                ),
                phiRotation(-bloch.phi)
            ),
            0.5
        )
    }

    return getBaseCircle(bloch.theta).map(transform)
}


export function braKet(param: Complex, i: number, colors: string[]) {
    return `\\textcolor{${colors[i]}}{(${param.re.toFixed(2)} + ${param.im.toFixed(2)}i) \\cdot | ${i} \\rangle}`;
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
