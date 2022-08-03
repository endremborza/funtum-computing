## Notes

Quantum Fourier transform: ${\displaystyle \large |\tilde{x}\rangle = \frac{1}{\sqrt{N}} \sum_{y=0}^{N - 1} e^{2 \pi i \frac{x}{N} y} |y\rangle }$

Complex conjugate of quantum fourier transform: ${\displaystyle \large |\tilde{x}\rangle^{\dagger} = \frac{1}{\sqrt{N}} \sum_{y=0}^{N - 1} e^{-2 \pi i \frac{x}{N} y} |y\rangle }$

**Converting between decimal and binary representation:**

${\displaystyle \large y = \sum_{k=1}^{n} y_k 2^{n - k} }$

${\displaystyle \large |y\rangle = |y_1 ... y_n\rangle = |y_1\rangle \otimes ... \otimes |y_n\rangle }$

**Therefore, the QFT can be rewritten as:**

${\displaystyle \large |\tilde{x}\rangle = \frac{1}{\sqrt{N}} \sum_{y=0}^{N - 1} e^{2 \pi i x \sum_{k=1}^{n} \frac{y_k}{2^k}} |y_1\rangle \otimes ... \otimes |y_n\rangle }$

${\displaystyle \large = \frac{1}{\sqrt{N}} \sum_{y=0}^{N - 1} \prod_{k=1}^n e^{2 \pi i x \frac{y_k}{2^k}} |y_1\rangle \otimes ... \otimes |y_n\rangle }$

${\displaystyle \large = \frac{1}{\sqrt{N}} \sum_{y_1=0}^1 ...  \sum_{y_{n}=0}^1 \prod_{k=1}^n e^{2 \pi i x \frac{y_k}{2^k}} |y_1\rangle \otimes ... \otimes |y_n\rangle }$

${\displaystyle \large = \frac{1}{\sqrt{N}} \left( \left( |0\rangle + e^{\frac{2 \pi i x}{2^1}} |1\rangle \right) \otimes ... \otimes \left( |0\rangle + e^{\frac{2 \pi i x}{2^n}} |1\rangle \right) \right) }$