## Quantum Fourier transform

## Binary number system

In the decimal number system, there are $10$ distinct symbols used to represent numbers: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$. The value of these symbols depends on their place in a given number. For example, in the number $325$, the symbol $2$ stands for $2 \cdot 10$, whereas in the number $2847$, it represents $2 \cdot 1000$. In general, an integer in decimal notation with $n$ digits equals $\displaystyle{\sum_{k = 1}^{n} d_k \cdot 10^{n - k}}$, where $d_k$ is the $k$-th digit (going from left to right). To illustrate this with a concrete example, the number above $2847 = 2 \cdot 10^3 + 8 \cdot 10^2 + 4 \cdot 10^1 + 7 \cdot 10^0 = 2 \cdot 1000 + 8 \cdot 100 + 4 \cdot 10 + 7 \cdot 1$.

Analogously, in the binary number system, there are $2$ distinct symbols used to represent numbers: $0$ and $1$. The value of an integer in binary notation equals to $\displaystyle{\sum_{k = 1}^{n} d_k \cdot 2^{n - k}}$, where $d_k$ is the $k$-th (binary) digit. For instance, the binary number $1011 = 1 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0 = 1 \cdot 8 + 0 \cdot 4 + 1 \cdot 2 + 1 \cdot 1 = 11$.

## Representing numbers with qubits

Consider $n$ qubits aranged in a row, each of which are in either of the two basis states $|0\rangle$ or $|1\rangle$. With a little combinatorics, we can see that there are $\underbrace{2 \cdot \ldots \cdot 2}_\text{n times} = 2^n$ such combinations. For ease of notation, let $N := 2^n$.

For our purposes, we'll interpret these combinations as the binary representations of the numbers from $0$ to $N - 1$. For example, let $n = 5$ and the qubits be in the following state: $|0\rangle \otimes |1\rangle \otimes |0\rangle \otimes |0\rangle \otimes |1\rangle$. We can "read out" this state as the binary number $01001$, which - as we saw above - is equal to $0 \cdot 2^4 + 1 \cdot 2^3 + 0 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 0 + 8 + 0 + 0 + 1 = 9$.

## QFT on the qubit level

The quantum Fourier transform is an operation that modifies the states of qubits in a particular way. (How this is done in practice is another topic, for now we'll only look at the mathematics.) Namely, if $x$ is the number represented by the qubits (in the example above, $x = 9$), the QFT sets the state of the $k$-th qubit to $\frac{1}{\sqrt{2}} \left( |0\rangle + e^{\frac{2 \pi i x}{2^k}} |1\rangle \right)$. In other words, it sets $\alpha_k = \frac{1}{\sqrt{2}}$ and $\beta_k = \frac{1}{\sqrt{2}} e^{\frac{2 \pi i x}{2^k}}$ for all $k = 1, ..., n$.

Notice that even though $\alpha_k \neq \beta_k$, the associated measurement probabilities $\Vert{\alpha_k}\Vert^2 = \Vert{\beta_k}\Vert^2 = \frac{1}{2}$ for all $k = 1, ..., n$. This is because the $e^{\frac{2 \pi i x}{2^k}}$ term - as we saw in section 2.3 - indicates the qubit's phase and does not affect measurement probabilities.

Just like the state of a single qubit can be the linear combination of $|0\rangle$ and $|1\rangle$, the joint state of these $n$ qubits is essentially the linear combination of all the possible combinations of the $n$ basis states - which, as we saw in the previous section, represent the integers from $0$ to $N - 1$. Since both basis states are measured with a probability of $\frac{1}{2}$ for each qubit, one particular combination of the $n$ basis states is measured with a probability of $\underbrace{\frac{1}{2} \cdot \ldots \cdot \frac{1}{2}}_\text{n terms} = \frac{1}{2^n} = \frac{1}{N}$. What differs across these combinations are the phase, as we'll see in the next section.

## QFT on the representation level

Next, let's write out the joint state of the qubits:

$\underbrace{ \frac{1}{\sqrt{2}} \left( |0\rangle + e^{ \frac{2 \pi i x}{2^1} } |1\rangle \right) \otimes \ldots \otimes \frac{1}{\sqrt{2}} \left( |0\rangle + e^{ \frac{2 \pi i x}{2^n} } |1\rangle \right) }_\text{n terms}$

We can factor out the $\frac{1}{\sqrt{2}}$ term to get:

$\frac{1}{\sqrt{2^n}} \left(\left( |0\rangle + e^{\frac{2 \pi i x}{2^1}} |1\rangle \right) \otimes \ldots \otimes \left( |0\rangle + e^{\frac{2 \pi i x}{2^n}} |1\rangle \right) \right) = \frac{1}{\sqrt{N}} \left(\left( |0\rangle + e^{\frac{2 \pi i x}{2^1}} |1\rangle \right) \otimes \ldots \otimes \left( |0\rangle + e^{\frac{2 \pi i x}{2^n}} |1\rangle \right) \right)$

Let $y_k$ denote the $k$-th digit of the binary number represented by the $n$ qubits in a given basis state. In other words, $y_k = 0$ if the $k$-th qubit is in the $|0\rangle$ state, and $y_k = 1$ if it's in the $|1\rangle$ state for all $k = 1, \ldots, n$. Using this notation, we can write the expression above in the form of a sum instead of a product:

${\displaystyle \frac{1}{\sqrt{N}} \underbrace{ \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1}_\text{n terms} \overbrace{e^{2 \pi i x \frac{y_1}{2^1}} |y_1\rangle \otimes \ldots \otimes e^{2 \pi i x \frac{y_n}{2^n}}|y_n\rangle}^\text{n terms} }$

The formula above includes all possible combinations of basis states with *equal weight*, but *different phases*. Let's define the *phase of the combination* as the product of the phases of individual qubits within that combination. We can then factor out this phase as we iterate over the combinations:

$\displaystyle \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 \left( e^{2 \pi i x \frac{y_1}{2^1}} \cdot \ldots \cdot e^{2 \pi i x \frac{y_n}{2^n}} \right) \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right) =$

$\displaystyle = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 \prod_{k=1}^n e^{2 \pi i x \frac{y_k}{2^k}} \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right) =$

$\displaystyle = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 e^{2 \pi i x \sum_{k=1}^n \frac{y_k}{2^k}} \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right)$

Notice that if $y_k = 0$, the exponential term can be simplified the following way: $e^{2 \pi i x \frac{y_k}{2^k}} = e^{2 \pi i x \frac{0}{2^k}} = e^0 = 1$.


<!-- TODO a lot, e.g. remove and link to binary numbers -->
