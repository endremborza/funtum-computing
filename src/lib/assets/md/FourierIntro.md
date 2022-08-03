The Fourier transform of a function $f$ is defined as: $\Large \hat{f}(\xi) = \int_{-\infty}^{\infty}{ f(x) \cdot e^{-2 \pi i x \xi} dx}$.

Let $\large x_0, \ldots, x_{N - 1}$ be a sequence of complex numbers.

The discrete Fourier transform of that sequence is another sequence defined by the following formula: $\large X_k = \sum_{n=1}^{N - 1}{x_n \cdot e^{-2 \pi i \frac{k}{N} n}}$.

We obtain original function by applying the inverse Fourier transform: $\large f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d\xi$.

Analogously, we can obtain the original sequence with the help of the inverse discrete Fourier transform: 
$\large x_n = \frac{1}{N} \sum_{k=1}^{N - 1} X_k \cdot e^{2 \pi i \frac{n}{N} k}$.


