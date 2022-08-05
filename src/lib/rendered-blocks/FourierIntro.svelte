<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    


    function setActive(e){
        console.log(e)
    }

</script>

<p>The Fourier transform of a function <span on:mouseenter={() => setActive(["f"])}>{@html math("f")}</span> is defined as: <span on:mouseenter={() => setActive(["\\xi", "d", "x", "f"])}>{@html math("\\Large \\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty}{ f(x) \\cdot e^{-2 \\pi i x \\xi} dx}")}</span>.</p>
<p>Let <span on:mouseenter={() => setActive(["x", "N"])}>{@html math("\\large x_0, \\ldots, x_{N - 1}")}</span> be a sequence of complex numbers.</p>
<p>The discrete Fourier transform of that sequence is another sequence defined by the following formula: <span on:mouseenter={() => setActive(["n", "X", "x", "N", "k"])}>{@html math("\\large X_k = \\sum_{n=1}^{N - 1}{x_n \\cdot e^{-2 \\pi i \\frac{k}{N} n}}")}</span>.</p>
<p>We obtain original function by applying the inverse Fourier transform: <span on:mouseenter={() => setActive(["x", "\\xi", "d", "f"])}>{@html math("\\large f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2 \\pi i \\xi x} d\\xi")}</span>.</p>
<p>Analogously, we can obtain the original sequence with the help of the inverse discrete Fourier transform: 
<span on:mouseenter={() => setActive(["n", "X", "x", "N", "k"])}>{@html math("\\large x_n = \\frac{1}{N} \\sum_{k=1}^{N - 1} X_k \\cdot e^{2 \\pi i \\frac{n}{N} k}")}</span>.</p>
<!-- TODO 3b1b type illustration -->