## Solution

The factoring problem can be solved with the following simple, but very time-consuming algorithm:

1. We pick a random number $a \in \mathbb{N}, 1 < a < N$ and make sure that $a$ and $N$ are relative primes, meaning $\gcd(a, N) = 1,$ where $\gcd$ stands for {{greatest common divisor|wiki:Greatest_common_divisor}}. (In case $a$ happens to be a factor of $N,$ the entire problem is solved and no further steps are required, but that is highly unlikely if $N$ is large.)

2. Next, we construct the function $f_{a, N}(r): \mathbb{N} \rightarrow \mathbb{N} = a^r \mod N$ and find the smallest integer $0 < \hat{r} < N$ such that $f_{a, N}(\hat{r}) = 1.$ If $\hat{r}$ turns out to be odd, we unfortunately have to repeat the entire procedure with a different $a$ parameter.

3. If we're lucky and $\hat{r}$ is even, we can proceed. From the definition of $\hat{r}$ follows that there's $m \in \mathbb{N}$ such that $a^{\hat{r}} = m \cdot N + 1.$ We can then define the integer $b = a^{\frac{\hat{r}}{2}},$ which means $b^2 = (a^{\frac{\hat{r}}{2}})^2 = a^{\hat{r}}.$ Next, we make use of a well-known algebraic identity to write $b^2 - 1 = (b + 1)(b - 1).$ Putting together these three equations, we find that $(b + 1)(b - 1) = m \cdot N.$

4. For this step, we need to make sure that neither terms on the left of the expression above are divisible by $N$. Note that we know for sure $(b - 1) \mod N \neq 0,$ because that would imply $b = a^{\frac{\hat{r}}{2}} \mod N = 1,$ and we defined $\hat{r}$ as the smallest positive integer, for which that equality holds, so it cannot hold for $\frac{\hat{r}}{2} < \hat{r}$. Unfortunately, we cannot guarantee the same for the other term, so if $(b + 1) \mod N = 0,$ we have to choose a new $a$ and start from the beginning. If $(b + 1) \mod N \neq 0,$ however, we have solved the problem, because the prime factors we're looking for are $\gcd(b - 1, N)$ and $\gcd(b + 1, N),$ and these are very easy to compute with the help of {{Euclid's algorithm|wiki:Euclidean_algorithm}}. To see why this is true, consider the following. We have established that neither $(b - 1)$ nor $(b + 1)$ are divisible by $N,$ but their product is, as it equals $m \cdot N$. This is only possible, if both of them share a factor with $N,$ and the factors they share are different.

If you're not entirely satisfied with the explanation above, check out the video [Hacking at Quantum Speed with Shor's Algorithm](https://www.youtube.com/watch?v=wUwZZaI5u0c&t=731s) by PBS Infinite Series.

The problem with this solution is that in order to find $\hat{r},$ we might have to check all possible values between $1$ and $N$ one after the other, which is an insane amount of computation if $N$ is number with several hundreds of digits. But that's only the case if we're trying with a classical computer.

<!-- TODO edit the example according to the notation used here + elaborate on step 4. -->