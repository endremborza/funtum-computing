### Solution

The factoring problem can be solved with the following simple, but very time-consuming algorithm:

1. We pick a random number $a \in \mathbb{N}, 1 < a < N$ and make sure that $a$ and $N$ are relative primes, meaning their greatest common divisor is $1$. (In case $a$ happens to be a factor of $N$, the entire problem is solved and no further steps are required, but that is highly unlikely if $N$ is large.)

2. Next, we construct the function $f(r): \mathbb{N} \rightarrow \mathbb{N} = a^r \mod N$ and find the smallest integer $0 < \hat{r} < N$ such that $f(\hat{r}) = 1$. If $\hat{r}$ turns out to be odd, we unfortunately have to repeat the entire procedure with a different $a$ parameter.

3. If we're lucky and $\hat{r}$ is even, we can proceed. From the definition of $\hat{r}$ follows that there's $m \in \mathbb{N}$ such that $a^{\hat{r}} = m \cdot N + 1$. We can define the integer $b = a^{\frac{\hat{r}}{2}}$, which means $b^2 = (a^{\frac{\hat{r}}{2}})^2 = a^{\hat{r}}$. Also, we can make use of a well-known algebraic identity to write $b^2 - 1 = (b + 1)(b - 1)$. Putting together these three equations, we find that $(b + 1)(b - 1) = m \cdot N$.

4. The sought prime factors of $N$ are $\gcd({a^{\frac{r}{2} - 1}}, N)$ and $\gcd({a^{\frac{r}{2} + 1}}, N)$ (where $\gcd$ stands for *greatest common divisor*).

For a more illuminating explanation, see the video [Hacking at Quantum Speed with Shor's Algorithm](https://www.youtube.com/watch?v=wUwZZaI5u0c&t=731s) by PBS Infinite Series.

The problem with this solution is that in order to find $\hat{r}$, we might have to check all possible values between $1$ and $N$ one after the other, which is an insane amount of computation if $N$ is number with several hundreds of digits. But that's only the case if we're trying with a classical computer.

<!-- TODO add a concrete example here -->