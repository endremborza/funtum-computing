We can find the factors of $N$ by selecting $a$ in a way that the greatest common denominator $K = \gcd(a, N) \neq 1$. We construct the function $f(r) = a^r \mod N$ and we are searching for the value $r > 0$ so that $f(r) = 1$. If $r$ is odd, we need to select a new $a$, otherwise we proceed. With an even $r$, we can create an integer $b = a^{\frac{r}{2}}$. Also, due to $a^r \mod N = 1$ we have a positive integer $m$ so that $a^r = m \cdot N + 1 \Rightarrow b^2-1 = (b + 1)(b - 1) = m \cdot N$. This way the greatest common denominator of $b+1$ and $N$ will be one of the factors of $N$.

# TODO

> add a concrete example here
