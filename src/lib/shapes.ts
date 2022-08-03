import { vectorFromPolar, PERP, thetaRotation, phiRotation } from "./qmath"
import { pi, add, multiply, cos, asin, matrix } from 'mathjs'
import type { Matrix } from "mathjs"

export function circle(resolution: number = 32, rate: number = 1) {
    let rangeEnd = (rate < 1) ? (resolution + 1) : resolution
    let points = [...Array(rangeEnd).keys()].map((i) => vectorFromPolar({ theta: PERP, phi: rate * 2 * pi * i / resolution, r: 1 }))
    if (rate != 1 && rate != 0.5) {
        points.push([0, 0, 0])
    }
    return matrix(points)
}


function getGrids(count: number, base: number[][]) {
    const resolution = base.length;

    function gridLevel(ind: number) {
        const height = (ind + 1) / (count + 1);
        const lifter = [...Array(resolution).keys()].map(() => [0, 0, height]);
        return add(
            multiply(base, cos(asin(height))),
            lifter
        );
    }

    return [...Array(count).keys()].map(gridLevel)
}



function getAxes(extent: number = 1.1) {
    return [0, 1, 2].map((i) => ([-extent, extent].map((e) => {
        let v = [0, 0, 0];
        v[i] = e;
        return v
    })))
}

function allSides(polygon: number[][] | Matrix) {
    return [polygon, ...[1, 2, 3].map((i) => multiply(polygon, thetaRotation(i * PERP)))]
}

export function globeGrid(resolution: number = 32) {

    const baseQuarterCircle = circle(resolution, 0.25);

    return [
        {
            faces: [
                ...allSides(baseQuarterCircle),
                ...allSides(multiply(baseQuarterCircle, phiRotation(3 * PERP)))
            ]
        },
        //{ faces: getGrids(4, baseQuarterCircle), line: true, style: { fill: 'none' } }
    ]
}