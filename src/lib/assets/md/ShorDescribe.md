## The period-finding problem

Recall the steps for computing the prime factors of a large integer $N$, the hard part of which was finding the smallest $1 < \hat{r} < N$ such that $f(\hat{r}) = a^{\hat{r}} \mod N = 1$. It turns out that $f$ is a {{periodic|wiki:Periodic_function}} function, and the integer $\hat{r}$ we're looking for is its period. This is because the period of $f$ is defined as the smallest integer $0 < p$, for which $f(r) = f(r + p)$ for all $r$. We know for sure that $f(0) = a^{0} \mod N = 1 \mod N = 1$, from which follows that $f(0) = f(0 + p) = f(p) = 1$. Thus, the period $p$ is the smallest positive integer, at which the value of $f$ is $1$, and this is exactly how we originally defined $\hat{r}$.

Thus, finding $\hat{r}$ can be reformulated as finding the period of the function $f$, which is where the quantum Fourier transform will prove extremely useful.

## Finding the period with the help of interference

...

<!-- TODO: include visualizations and finish text -->