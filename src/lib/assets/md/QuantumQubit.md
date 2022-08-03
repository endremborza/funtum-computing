## Qubit states

The elementary units of information in classical computing are {{bits|wiki:Bit}}. As their name suggests, bits represent one single *bit* of information, which means they can take on either of two values $0$ and $1$ at a time.

{{Qubits|wiki:Qubit}} are the quantum computing equivalent of bits. They differ from classical bits - among other things - in that they can take on a multitude of values instead of just $0$ and $1$, until that value is *measured*, at which point they behave just like classical bits. To explain what this means exactly, we'll need to introduce some further concepts.

Let $|0\rangle$ and $|1\rangle$ denote the so called *basis states* of a qubit that are the quantum-equivalent of classical bit states. If you look at a qubit directly to learn it's value, you'll see one of these basis states. But while you're not looking - due to it's quantum nature - the state of a qubit may be something more intricate. Generally, it can be expressed as the *linear combination* of the two basis states: $\alpha |0\rangle + \beta |1\rangle$. Here, $\alpha$ and $\beta$ are {{complex numbers|wiki:Complex_number}} that indicate the relative weight, with which the two basis states are present in this combination. More precisely, if we now look at the qubit, we'll see the basis state $|0\rangle$ with a probability of $\Vert{\alpha}\Vert^2$, and the basis state $|1\rangle$ with a probability of $\Vert{\beta}\Vert^2$. Because these probabilities must add up to one - as $|0\rangle$ and $|1\rangle$ are the only possible outcomes - the equation $\Vert{\alpha}\Vert^2 + \Vert{\beta}\Vert^2 = 1$ must hold for all possible qubit states. Let's call $\Vert{\alpha}\Vert^2$ and $\Vert{\beta}\Vert^2$ the *measurement probabilities* of the basis states.

# TODO

> introduce the interactivity