So, how does the algorithm work? Below you find a step-by-step description, for now without the quantum part. relies on the {{periodic|wiki:Periodic_function}} nature of $f(r) = a^r \mod N$.

1. Pick a random number $\large a \in \mathbb{N}, 1 < a < N$ and make sure that $\large a$ and $\large N$ are relative primes, meaning their greatest common divisor is $\large 1$. (In case $a$ happens to be a factor of $\large N$, the entire problem is solved and no further steps are required, but that is highly unlikely for large $\large N$.)


2. Find the period of the function $\large a^n \mod{N}$. The period is the smallest $\large r \in \mathbb{N}, 1 < r < N$ such that $\large a^r \mod{N} = 1$. If the period turns out to be odd, the entire procedure has to be repeated with a different $\large a$ parameter.


3. If we're lucky and the period is even, the sought factors are $\large \gcd({a^{\frac{r}{2} - 1}}, N)$ and $\large \gcd({a^{\frac{r}{2} + 1}}, N)$ (where $\gcd$ stands for *greatest common divisor*). For a detailed explanation of why this is true, see the video [Hacking at Quantum Speed with Shor's Algorithm](https://www.youtube.com/watch?v=wUwZZaI5u0c&t=731s) by PBS Infinite Series.

The problematic part of this procedure that is responsible for the above mentioned exponential scaling is finding the period $r$. Shor's algorithm utilizes a special quantum operation, the so called *quantum Fourier transform*, to find $r$ more quickly than any classical algorithm could. This is what we'll elaborate on in the next section.

# TODO

> eliminate repetition with FactoringPeriodic block