import {
    matrix,
    cross,
    subtract,
    divide,
    dot,
    tan,
    pi,
    norm,
} from 'mathjs';
import type { MathArray } from 'mathjs';


// https://prideout.net/blog/svg_wireframes/#parametric-sphere-with-thick-borders

function normalize(v: number[] | MathArray) {
    return divide(v, norm(v));
}

export function createViewMatrix(eye: number[], target: number[], up: number[]) {
    //Creates a look at matrix that can be used as a viewMatrix according to OpenGL standards.

    const forward = normalize(subtract(target, eye));
    const side = normalize(cross(forward, up));
    const upNormed = normalize(cross(side, forward));

    //        [side[0], upNormed[0], -forward[0], 0.0],
    //[side[1], upNormed[1], -forward[1], 0.0],
    // [side[2], upNormed[2], -forward[2], 0.0],

    return matrix([
        ...[0, 1, 2].map((i) => ([side[i], upNormed[i], -forward[i], 0.0])),
        [-dot(side, eye), -dot(upNormed, eye), dot(forward, eye), 1.0]
    ]);
}

export function createPerspectiveProjection(fovy: number, aspect: number, near: number, far: number) {
    /*Creates perspective projection matrix.
.. seealso:: http://www.opengl.org/sdk/docs/man2/xhtml/gluPerspective.xml
.. seealso:: http://www.geeks3d.com/20090729/howto-perspective-projection-matrix-in-opengl/
:param float fovy: field of view in y direction in degrees
:param float aspect: aspect ratio of the view (width / height)
:param float near: distance from the viewer to the near clipping plane (only positive)
:param float far: distance from the viewer to the far clipping plane (only positive)
:rtype: numpy.array
:return: A projection matrix representing the specified perpective.
*/

    const ymax = near * tan((fovy * pi) / 360.0);
    const xmax = ymax * aspect;
    return createPerspectiveProjectionFromBounds(-xmax, xmax, -ymax, ymax, near, far);
}

function createPerspectiveProjectionFromBounds(
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
) {
    /*Creates a perspective projection matrix using the specified near
plane dimensions.
:param float left: The left of the near plane relative to the plane's centre.
:param float right: The right of the near plane relative to the plane's centre.
:param float top: The top of the near plane relative to the plane's centre.
:param float bottom: The bottom of the near plane relative to the plane's centre.
:param float near: The distance of the near plane from the camera's origin.
    It is recommended that the near plane is set to 1.0 or above to avoid rendering issues
    at close range.
:param float far: The distance of the far plane from the camera's origin.
:rtype: numpy.array
:return: A projection matrix representing the specified perspective.
.. seealso:: http://www.gamedev.net/topic/264248-building-a-projection-matrix-without-api/
.. seealso:: http://www.glprogramming.com/red/chapter03.html
*/

    /*
E 0 A 0
0 F B 0
0 0 C D
0 0-1 0
A = (right+left)/(right-left)
B = (top+bottom)/(top-bottom)
C = -(far+near)/(far-near)
D = -2*far*near/(far-near)
E = 2*near/(right-left)
F = 2*near/(top-bottom)
*/

    const A = (right + left) / (right - left);
    const B = (top + bottom) / (top - bottom);
    const C = -(far + near) / (far - near);
    const D = (-2.0 * far * near) / (far - near);
    const E = (2.0 * near) / (right - left);
    const F = (2.0 * near) / (top - bottom);

    return matrix([
        [E, 0.0, 0.0, 0.0],
        [0.0, F, 0.0, 0.0],
        [A, B, C, -1.0],
        [0.0, 0.0, D, 0.0]
    ]);
}
