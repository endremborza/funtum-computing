## Multiple qubits

As you might have guessed, quantum algorithms require not only one, but several qubits. These qubits may be *independent* from each other, meaning their states can be expressed individually. However, it is possible for multiple qubits to *share* some information with each other, in which case they no longer have states of their own, but represent a unit of information together. This is called *entaglement*, and it is another fundamental difference between classical and quantum computing. As an example, two qubits can be entangled in a way that, if we look at one of them and find it's in the basis state $|0\rangle$, we learn immediately that the other one must be in the basis state $|1\rangle$, and vice versa.

The joint state of a sequence of $n$ *independent* qubits can be written as $\left( \alpha_1 |0\rangle + \beta_1 |1\rangle \right) \otimes ... \otimes \left( \alpha_n |0\rangle + \beta_n |1\rangle \right)$, where $\alpha_k, \beta_k$ are the coefficients associated with the state of the $k$-th qubit as described above, and the operator $\otimes$ indicates that none of the qubits are entagled with each other.

# TODO

> visualize a very simple system and maybe add something about quantum gates