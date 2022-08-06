## Important properties of complex numbers

The general form of a {{complex number|wiki:Complex_number}} $z \in \mathbb{C}$ is the following: $z = a i + b$, where $a, b \in \mathbb{R}$ and $i = \sqrt{-1}$. $a$ is called the {{imaginary|wiki:Imaginary_number}} and $b$ the {{real|wiki:Real_number}} component of $z$. In fact, all real numbers are complex numbers, the imaginary component of which is zero ($a=0$).

Complex numbers can be represented geometrically as two-dimensional vectors in the so called {{complex plane|wiki:Complex_plane}}, where the $x$-axis stands for the real, and the $y$-axis for the imaginary component.

Let $\Vert{z}\Vert = \sqrt{a^2 + b^2}$ denote the {{Euclidean norm|wiki:Norm_(mathematics)#Euclidean_norm}} of the vector associated with the complex number $z$. Consequently, $\Vert{z}\Vert^2 = a^2 + b^2$ is the square of this norm, and it's going to play an important role in what follows.

Another important thing to note is that each 2-dimensional vector is uniquely defined by two properties: its length and angle of rotation. Consequently, a complex number $z$ can be expressed as $\Vert{z}\Vert \cdot e^{i \phi_z}$, where $\phi_z \in [0, 2\pi]$. Here, $e^{i \phi_z}$ is a vector of unit length in the complex plane, rotated around the origin by an angle of $\phi_z$ ($2\pi$ corresponds to a full rotation). All we have to do to get back $z$, then, is multiply this rotated unit vector by $\Vert{z}\Vert$ to adjust its norm.

## Qubit states

The elementary units of information in classical computing are {{bits|wiki:Bit}}. As their name suggests, bits represent one single {{bit of information|wiki:Information_theory}}, which means they can take on either of two values $0$ and $1$ at a time.

{{Qubits|wiki:Qubit}} are the quantum computing equivalent of bits. They differ from classical bits - among other things - in that they can take on a multitude of values instead of just $0$ and $1$, until that value is {{measured|wiki:Measurement_in_quantum_mechanics}}, at which point they behave just like classical bits. To explain what this means exactly, we'll need to introduce some further concepts.

Let $|0\rangle$ and $|1\rangle$ denote the so called basis states of a qubit that are the quantum-equivalent of classical bit states. If you look at a qubit directly to learn it's value, you'll see one of these basis states. But while you're not looking - due to it's quantum nature - the {{state|wiki:Quantum_state}} of a qubit may be something more intricate. Generally, it can be expressed as the {{linear combination|wiki:Linear_combination}} of the two basis states: $\alpha |0\rangle + \beta |1\rangle$. Here, $\alpha$ and $\beta$ are complex numbers that indicate the relative weight, with which the two basis states are present in this combination. More precisely, if we now look at the qubit, we'll see the basis state $|0\rangle$ with a probability of $\Vert{\alpha}\Vert^2$, and the basis state $|1\rangle$ with a probability of $\Vert{\beta}\Vert^2$. Because these probabilities must add up to one - as $|0\rangle$ and $|1\rangle$ are the only possible outcomes - the equation $\Vert{\alpha}\Vert^2 + \Vert{\beta}\Vert^2 = 1$ must hold for all possible qubit states. Let's call $\Vert{\alpha}\Vert^2$ and $\Vert{\beta}\Vert^2$ the measurement probabilities of the basis states.

<!-- TODO introduce the interactivity -->