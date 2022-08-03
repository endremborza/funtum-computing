<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Notes</h2>
<p>Quantum Fourier transform: <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large |\\tilde{x}\\rangle = \\frac{1}{\\sqrt{N}} \\sum_{y=0}^{N - 1} e^{2 \\pi i \\frac{x}{N} y} |y\\rangle }")}</span></p>
<p>Complex conjugate of quantum fourier transform: <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large |\\tilde{x}\\rangle^{\\dagger} = \\frac{1}{\\sqrt{N}} \\sum_{y=0}^{N - 1} e^{-2 \\pi i \\frac{x}{N} y} |y\\rangle }")}</span></p>
<p><strong>Converting between decimal and binary representation:</strong></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large y = \\sum_{k=1}^{n} y_k 2^{n - k} }")}</span></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large |y\\rangle = |y_1 ... y_n\\rangle = |y_1\\rangle \\otimes ... \\otimes |y_n\\rangle }")}</span></p>
<p><strong>Therefore, the QFT can be rewritten as:</strong></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large |\\tilde{x}\\rangle = \\frac{1}{\\sqrt{N}} \\sum_{y=0}^{N - 1} e^{2 \\pi i x \\sum_{k=1}^{n} \\frac{y_k}{2^k}} |y_1\\rangle \\otimes ... \\otimes |y_n\\rangle }")}</span></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large = \\frac{1}{\\sqrt{N}} \\sum_{y=0}^{N - 1} \\prod_{k=1}^n e^{2 \\pi i x \\frac{y_k}{2^k}} |y_1\\rangle \\otimes ... \\otimes |y_n\\rangle }")}</span></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large = \\frac{1}{\\sqrt{N}} \\sum_{y_1=0}^1 ...  \\sum_{y_{n}=0}^1 \\prod_{k=1}^n e^{2 \\pi i x \\frac{y_k}{2^k}} |y_1\\rangle \\otimes ... \\otimes |y_n\\rangle }")}</span></p>
<p><span on:mouseenter={() => setActive(["a", "b"])}>{@html math("{\\displaystyle \\large = \\frac{1}{\\sqrt{N}} \\left( \\left( |0\\rangle + e^{\\frac{2 \\pi i x}{2^1}} |1\\rangle \\right) \\otimes ... \\otimes \\left( |0\\rangle + e^{\\frac{2 \\pi i x}{2^n}} |1\\rangle \\right) \\right) }")}</span></p>