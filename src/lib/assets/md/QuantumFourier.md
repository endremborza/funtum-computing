## Quantum Fourier transform (QFT)

## Representing numbers with qubits

Consider $n$ qubits aranged in a row, each of which are in either of the two basis states $|0\rangle$ or $|1\rangle$. With a little combinatorics, we can see that there are $\underbrace{2 \cdot \ldots \cdot 2}_\text{n times} = 2^n$ such combinations. For ease of notation, let $N := 2^n$.

For our purposes, we'll interpret these combinations as the {{binary representations|wiki:Binary_number}} of the numbers from $0$ to $N - 1$. For example, let $n = 5$ and the qubits be in the following state: $|0\rangle \otimes |1\rangle \otimes |0\rangle \otimes |0\rangle \otimes |1\rangle$. We can "read out" this state as the binary number $01001$, which is equal to $\small 0 \cdot 2^4 + 1 \cdot 2^3 + 0 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 0 + 8 + 0 + 0 + 1 = 9$.

## QFT on the qubit level

The {{quantum Fourier transform|wiki:Quantum_Fourier_transform}} is an operation that modifies the states of qubits in a particular way. (How this is done in practice is another topic, for now we'll only look at the mathematics.) Namely, if $x$ is the number represented by the qubits (in the example above, $x = 9$), the QFT sets the state of the $k$-th qubit to $\frac{1}{\sqrt{2}} \left( |0\rangle + e^{\frac{2 \pi i x}{2^k}} |1\rangle \right)$. In other words, it sets $\alpha_k = \frac{1}{\sqrt{2}}$ and $\beta_k = \frac{1}{\sqrt{2}} e^{\frac{2 \pi i x}{2^k}}$ for all $k = 1, ..., n$.

Notice that even though $\alpha_k \neq \beta_k$, the associated measurement probabilities $\Vert{\alpha_k}\Vert^2 = \Vert{\beta_k}\Vert^2 = \frac{1}{2}$ for all $k = 1, ..., n$. This is because the $e^{\frac{2 \pi i x}{2^k}}$ term - as we saw in the section about the Bloch-sphere - indicates the qubit's phase and does not affect measurement probabilities.

Just like the state of a single qubit can be the linear combination of $|0\rangle$ and $|1\rangle$, the state of these $n$ qubits is essentially the linear combination of all the possible combinations of the $n$ basis states - which, as we saw in the previous section, represent the integers from $0$ to $N - 1$. Take a moment to appreciate this fact. We applied an operator to $n$ qubits to obtain a quantum system that represents $2^n$ numbers at the same time and is capable of performing computations on all of those numbers in parallel! This parallelism is one of the main properties that make quantum computers so powerful compared to classical ones. Since both basis states are measured with a probability of $\frac{1}{2}$ for each qubit, any particular combination of the $n$ basis states is measured with a probability of $\underbrace{\frac{1}{2} \cdot \ldots \cdot \frac{1}{2}}_\text{n terms} = \frac{1}{2^n} = \frac{1}{N}$. What differs across these combinations - and is an essential component of the QFT - is the phase, as we'll see in the next section.

## QFT on the representation level

Let's denote the state of the entire sequence of qubits with $|\psi\rangle$ and write it out as shown below:

$|\psi\rangle = \underbrace{ \frac{1}{\sqrt{2}} \left( |0\rangle + e^{ \frac{2 \pi i x}{2^1} } |1\rangle \right) \otimes \ldots \otimes \frac{1}{\sqrt{2}} \left( |0\rangle + e^{ \frac{2 \pi i x}{2^n} } |1\rangle \right) }_\text{n terms}$

We can factor out the $\frac{1}{\sqrt{2}}$ term to get:

$|\psi\rangle = \frac{1}{\sqrt{2^n}} \left(\left( |0\rangle + e^{\frac{2 \pi i x}{2^1}} |1\rangle \right) \otimes \ldots \otimes \left( |0\rangle + e^{\frac{2 \pi i x}{2^n}} |1\rangle \right) \right) = \frac{1}{\sqrt{N}} \left(\left( |0\rangle + e^{\frac{2 \pi i x}{2^1}} |1\rangle \right) \otimes \ldots \otimes \left( |0\rangle + e^{\frac{2 \pi i x}{2^n}} |1\rangle \right) \right)$

Let $y$ denote the binary number represented by the $n$ qubits in a given basis state, and $y_k$ the $k$-th digit of $y$. In other words, $y_k = 0$ if the $k$-th qubit is in the $|0\rangle$ state, and $y_k = 1$ if it's in the $|1\rangle$ state for all $k = 1, \ldots, n$. Recalling our knowledge of binary numbers, we can write $y$ as the weighted sum of its digits: $\displaystyle{ y = \sum_{k=1}^n y_k \cdot 2^{n - k}}$. Notice that the $2^n$ term within the sum does not depend on $k$ and so we can factor it out: $\displaystyle{ y = 2^n \cdot \sum_{k=1}^n y_k \cdot 2^{-k} = N \cdot \sum_{k=1}^n \frac{y_k}{2^k}}$. Remember this step, as it is going to be important shortly!

Using this new notation, we can write the state of the qubits in the form of a sum instead of a product:

$|\psi\rangle = \displaystyle{ \frac{1}{\sqrt{N}} \underbrace{ \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1}_\text{n terms} \overbrace{e^{\frac{2 \pi i x y_1}{2^1}} |y_1\rangle \otimes \ldots \otimes e^{\frac{2 \pi i x y_n}{2^n}}|y_n\rangle}^\text{n terms} }$

In case you're wondering how the formula above can be derived from the definition we started with, note that for all $k$, the term $e^{\frac{2 \pi i x y_k}{2^k}}|y_k\rangle$ equals

- $e^{\frac{2 \pi i x \cdot 0}{2^k}}|0\rangle = 1 \cdot |0\rangle = |0\rangle$ if $y_k = 0$, and
- $e^{\frac{2 \pi i x \cdot 1}{2^k}}|1\rangle = e^{\frac{2 \pi i x }{2^k}}|1\rangle$ if $y_k = 1$, 

which is exactly how we defined the QFT.

The $n$ embedded summations might seem confusing at first, but what they actually do is iterate over all possible combinations of basis states. In the final sum, these are included with *equal weight* (meaning they are measured with equal probability), but the composing basis states will have *different phases* in each combination, as already mentioned at the end of the previous section.

Let's now define the *phase of the combination* as the product of the phases of individual qubits within that combination, and factor it out as shown below:

$|\psi\rangle = \displaystyle{ \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 \left( e^{\frac{2 \pi i x y_1}{2^1}} \cdot \ldots \cdot e^{\frac{2 \pi i x y_n}{2^n}} \right) \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right)}$

$|\psi\rangle = \displaystyle{ = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 \prod_{k=1}^n e^{\frac{2 \pi i x y_k}{2^k}} \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right)}$

After making use of the product rule for exponents...

$|\psi\rangle = \displaystyle{ = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 e^{\sum_{k=1}^n \frac{2 \pi i x y_k}{2^k}} \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right)}$

and factoring out the $2 \pi i x$ term that does not depend on $k$, we arrive at the formula below:

$|\psi\rangle = \displaystyle{ = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 \ldots \sum_{y_{n}=0}^1 e^{2 \pi i x \sum_{k=1}^n \frac{y_k}{2^k}} \left( |y_1\rangle \otimes \ldots \otimes |y_n\rangle \right)}$

Recall what I asked you to keep in mind a few paragraphs ago, and notice that the sum in the exponential $\displaystyle{ \sum_{k=1}^n \frac{y_k}{2^k}}$ is actually equal to $\frac{y}{N}$. Thus, we can now replace the individual $y_k$ digits with the number $y$ itself and the multiple, embedded summations with a single one that iterates over all possible values of $y$. In addition, let's abbreviate the notation we used for the product of the basis states with $|y\rangle = |y_1\rangle \otimes \ldots \otimes |y_n\rangle$, to finally obtain this way more elegant formula for the QFT:

$|\psi\rangle = \displaystyle{ \frac{1}{\sqrt{N}} \sum_{y=0}^{N - 1} e^{\frac{2 \pi i x y}{N}} |y\rangle}$

The elegance comes from the fact that it shows what the qubits represent on a symbolic level, as opposed to the expression we started with that is a direct insight into the bit-level implementation.

Now let's illustrate visually what the formula above actually means. To give a proper intuition, we'll look at multiple systems with increasing number of qubits. For a chosen value of $x$, the plot below shows the $e^{\frac{2 \pi i x y}{N}}$ terms for all possible values of $y$ that these systems can represent. Because this term is a complex number, the geometric representation of which would require two dimensions, the real and imaginary components are shown separately. Notice that as the number of qubits increases, the plots gradually turn into sinusoidal wave patterns. Furthermore, the number of peaks of these waves - their frequency - equals $x$, which you can verify by modifying $x$ with the help of the slider.


<!-- TODO a lot, e.g. remove and link to binary numbers, insert interactive plot that shows the waves! -->
