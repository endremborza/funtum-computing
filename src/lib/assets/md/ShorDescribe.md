## The period-finding problem

Recall the steps for computing the prime factors of a large integer $N,$ the hard part of which was finding the smallest $1 < \hat{r} < N$ such that $f_{a, N}(\hat{r}) = a^{\hat{r}} \mod N = 1.$ It turns out that $f_{a, N}$ is a {{periodic|wiki:Periodic_function}} function, and below we'll show that the number $\hat{r}$ we're looking for is exactly its period.

In general, the period of a function $g$ is defined as the smallest positive number $0 < p,$ for which $g(x) = g(x + p)$ for all $x$ in the domain of $g.$ (In other words, $g$ is a repeating sequence of the same pattern with length $p.$) Specifically for $f_{a, N},$ because its domain is $\mathbb{N},$ its period has to be an integer.

Let $\hat{p} \in \mathbb{N}$ denote the period of $f_{a, N}.$ We know for sure that $f_{a, N}(0) = a^{0} \mod N = 1 \mod N = 1,$ from which follows that $f_{a, N}(0) = f_{a, N}(0 + \hat{p}) = f_{a, N}(\hat{p}) = 1.$ Thus, the $\hat{p}$ is the smallest positive integer, for which the value of $f_{a, N}$ equals $1.$ Notice that this is exactly how we originally defined $\hat{r},$ and so $\hat{r} = \hat{p}.$ 

Thus, the factoring problem can essentially be reformulated as the problem of finding the period of the function $f_{a, N},$ for which the quantum Fourier transform turns out to be really useful.

## The algorithm

#### Step 1.

In order to implement Shor's algorithm, we'll need two quantum register with at least $\log_2N$ qubits, as that is the number of digits required to represent $N$ in binary notation. (In case $\log_2N$ is not an integer, we have to round it up.) Note that this is a lower limit, and the more qubits we use, the faster we'll find the solution.

Let $\log_2N \leq n$ denote the number of qubits we chose to construct the both registers, and $|\psi_1\rangle, |\psi_2\rangle$ the current state of the two registers. Let's ignore the second register for now, and start with all qubits of the first register being in the basis state $|0\rangle,$ thus we can write its state as $|\psi_1\rangle = \underbrace{|0\rangle \otimes \ldots \otimes |0\rangle}_\text{n terms}.$

#### Step 2.

Next, we apply the so called $H$ (Hadamard) gate to each qubit of the first register, in order to set them into an equal superposition of the two basis states. This means the state of the register is now $|\psi_1\rangle = \underbrace{\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) \otimes \ldots \otimes \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)}_\text{n terms}.$ We can factor out the $\frac{1}{\sqrt{2}}$ terms to obtain $|\psi_1\rangle = \frac{1}{\sqrt{2^n}}(|0\rangle + |1\rangle) \otimes \ldots \otimes (|0\rangle + |1\rangle).$

Let $x$ denote the number represented by the qubits of the first register (that is, the number we get if we read out the state as a sequence of binary digits). As we already saw in the case of the QFT, each qubit being in an equal superposition of the two basis states translates to the entire register being in the superposition of all combinations of these basis states, and consequently $x$ being in the superposition of all values from $0$ to $2^n - 1.$ Let's express the state as the superposition of these values: $|\psi_1\rangle = \displaystyle{\frac{1}{\sqrt{2^n}}\sum_{x=0}^{2^n-1}|x\rangle}.$ Thus, if we now measure the entire register and read out $x,$ we're going to get each possible value with an equal probability of $\frac{1}{2^n}.$

#### Step 3.

This is the point where the second register enters the picture. We begin with all qubits of this register being in the basis state $|1\rangle,$ so $|\psi_2\rangle = \underbrace{|0\rangle \otimes \ldots \otimes |0\rangle}_\text{n terms}.$ Let $y$ denote the number represented by the second register, analogously to $x.$ Next, we apply a combination of gates to entangle the qubits of the two registers in a special way, in order to implement the function $f_{a, N}(x) = a^x \mod N.$ To see what this means, let's take a step back and assume all qubits of the first register are in one particular basis state, and so $x$ is a definite value between $0$ and $2^n - 1,$ instead of a superposition of values. If we now applied the current step of the algorithm to the registers, it would set $y = a^x \mod N.$

But because in our case the first register is actually in a superposition of all possible values of $x,$ after this step, the second register is also going to be in a superposition of representing $y = a^x \mod N$ for all values of $x.$ Thus, we can write its state as $\displaystyle{|\psi_2\rangle = \sum_{x=0}^{2^n - 1} |y\rangle = \sum_{x=0}^{2^n - 1} |a^x \mod N\rangle}.$

#### Step 4.

Next, we measure the second register. This will make all qubits of the second register into one of the basis states randomly, and so $y$ will take on a definite value. Furthermore, the measurement will not only modify $|\psi_2,$ but also $\psi_1,$ because the qubits of the two registers are entangled. The value of $y$ is a function of the value of $x,$ and so if we measure a particular $y,$ the superposition of the first register can only contains those values of $x$ that are consistent with the measurement, namely for which $a^x \mod N = y.$ So, although the measurement does not make the superposition of the first register disappear entirely, it filters it to the values of $x$ that fulfil this criterion. And because $f_{a, N}$ is a repeating pattern with period $\hat{p},$ those values are going to be $\hat{p}$ apart from each other. Let the sequence $0 \leq x_0, \ldots, x_k < 2^n$ denote these values. Thus, we can write the state of the first register as $\displaystyle{|\psi_1\rangle = \sum_{i=0}^{k} |x_i\rangle},$ where $x_{i + 1} - x_i = \hat{p}$ for all $i < k.$

#### Step 5.

Now, we apply the QFT to the first register. For a definite value of $x,$ this would yield the state $\displaystyle{|\psi_1\rangle = \frac{1}{\sqrt{2^n}} \sum_{y=0}^{2^n - 1} e^{\frac{2 \pi i x y}{2^n}} |y\rangle}.$ But just like above, the register is in a superposition, and so the state after is going to be a linear combination of the QFT for all values of $x$: $\displaystyle{|\psi_1\rangle = \frac{1}{\sqrt{2^n}} \sum_{i=0}^{k} \sum_{x=0}^{2^n - 1} e^{\frac{2 \pi i x_i y}{2^n}} |x\rangle}.$

#### Step 6.

We saw in the section on the QFT that for a given $x,$ the resulting phases form a sinusoidal wave pattern with a frequency of $x.$ In this case, because of the superposition, the resulting phases are going to form a linear combination of sinusoidal wave patterns with frequencies $x_0, \ldots, x_k.$ And this is the key to the solution, because these waves are going to {{interfere|wiki:Wave_interference}} with each other in a particular way. Remember that the phases generated by the QFT were complex vectors of unit length. Now, we're adding those vectors together for $x_0, \ldots, x_k,$ and so the length of the resulting vectors will no longer be $1.$

Instead, at certain points (values of $x$), the waves constructively interfere, meaning their displacements sum up to a large positive or negative value, and so the measurement probabilities of those points get amplified. At other points, the displacements cancel each other out, leading to probability amplitudes near zero. If we then measure the register and read out the represented value $x,$ it's most likely going to be one of the points of constructive interference. And the points, at which this constructive interference happens are related to the period in a special way. Namely, they are the points $\frac{j\cdot N}{\hat{p}}$ for $j = 0, \ldots, \hat{p} - 1.$ Thus, all we have to do now is measure the final state of the first register a sufficient number of times to get a statistically reliable estimation of the period.

<!-- TODO: include visualizations and finish text -->