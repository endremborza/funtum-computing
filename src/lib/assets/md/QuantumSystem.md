## Multiple qubits

Most quantum algorithms require not only one, but several qubits. The states of these qubits may be {{separable|wiki:Separable_state}}, meaning they each contain one independent unit of information. However, it is possible for multiple qubits to share some information with each other, in which case they no longer have states of their own, but only one joint state. This is called {{entaglement|wiki:Quantum_entanglement}}, and it is another fundamental difference between classical and quantum computing. As an example, two qubits can be entangled in a way that, if we look at one of them and find it's in the basis state $|0\rangle,$ we learn immediately that the other one must be in the basis state $|1\rangle,$ and vice versa.

From now on, we'll refer to a sequence of qubits as a {{quantum register|wiki:Quantum_register}}. Let $|\psi\rangle$ denote the state of a register consisting of $n$ qubits. If the qubits are separable, the state can be written as $|\psi\rangle = \left( \alpha_1 |0\rangle + \beta_1 |1\rangle \right) \otimes ... \otimes \left( \alpha_n |0\rangle + \beta_n |1\rangle \right),$ where $\alpha_k, \beta_k$ are the coefficients associated with the state of the $k$-th qubit as described above, and the operator $\otimes$ indicates that none of the qubits are entagled with each other.

Note that the state of the register can also be written as a vector, but what you saw above and what we're going to use in the rest of the explanation is the alternative, so called Dirac or bra-ket notation.


<!-- TODO add quantum algorithm + viz-->
