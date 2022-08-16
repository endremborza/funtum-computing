The general form of a complex number $z \in \mathbb{C}$ is the following: $z = a i + b,$ where $a, b \in \mathbb{R}$ and $i = \sqrt{-1}.$ $a$ is called the {{imaginary|wiki:Imaginary_number}} and $b$ the {{real|wiki:Real_number}} component of $z.$ In fact, all real numbers are complex numbers, the imaginary component of which is zero ($a=0$).

Complex numbers can be represented geometrically as two-dimensional vectors in the so called {{complex plane|wiki:Complex_plane}}, the $x$-coordinate of which corresponds to the real, and the $y$-coordinate to the imaginary component.

Let $\Vert{z}\Vert = \sqrt{a^2 + b^2}$ denote the Euclidean {{norm|wiki:Norm_(mathematics)}} of the vector associated with the complex number $z.$ This concept is especially relevant in quantum computing, because the measurement probabilities of the basis states equals the square of the norm $\Vert{z}\Vert^2 = a^2 + b^2$ of the complex coefficients defining the state of a qubit, as you can see above.

Another important thing to note is that each 2-dimensional vector is uniquely defined by two properties: its length and angle of rotation. Consequently, a complex number $z$ can be expressed as $\Vert{z}\Vert \cdot e^{i \phi_z},$ where $\phi_z \in [0, 2\pi].$ Here, $e^{i \phi_z}$ is a vector of unit length in the complex plane, rotated around the origin by an angle of $\phi_z$ ($2\pi$ corresponds to a full rotation). All we have to do to get back $z,$ then, is multiply this rotated unit vector by $\Vert{z}\Vert$ to adjust its norm.

