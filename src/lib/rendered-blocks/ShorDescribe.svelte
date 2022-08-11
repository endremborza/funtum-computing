<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummaryPeriodic_function from './wiki/wikiSummaryPeriodic_function.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<h2>The period-finding problem</h2>
<p>Recall the steps for computing the prime factors of a large integer <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span>, the hard part of which was finding the smallest <span on:mouseenter={() => setActive(["r", "N"])}>{@html math("1 < \\hat{r} < N")}</span> such that <span on:mouseenter={() => setActive(["a", "f", "r", "N"])}>{@html math("f(\\hat{r}) = a^{\\hat{r}} \\mod N = 1")}</span>. It turns out that <span on:mouseenter={() => setActive(["f"])}>{@html math("f")}</span> is a <Hoverable hovertext={wikiSummaryPeriodic_function}>periodic</Hoverable> function, and the integer <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span> we're looking for is its period. This is because the period of <span on:mouseenter={() => setActive(["f"])}>{@html math("f")}</span> is defined as the smallest integer <span on:mouseenter={() => setActive(["p"])}>{@html math("0 < p")}</span>, for which <span on:mouseenter={() => setActive(["f", "r", "p"])}>{@html math("f(r) = f(r + p)")}</span> for all <span on:mouseenter={() => setActive(["r"])}>{@html math("r")}</span>. We know for sure that <span on:mouseenter={() => setActive(["a", "f", "N"])}>{@html math("f(0) = a^{0} \\mod N = 1 \\mod N = 1")}</span>, from which follows that <span on:mouseenter={() => setActive(["f", "p"])}>{@html math("f(0) = f(0 + p) = f(p) = 1")}</span>. Thus, the period <span on:mouseenter={() => setActive(["p"])}>{@html math("p")}</span> is the smallest positive integer, at which the value of <span on:mouseenter={() => setActive(["f"])}>{@html math("f")}</span> is <span on:mouseenter={() => setActive([])}>{@html math("1")}</span>, and this is exactly how we originally defined <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span>.</p>
<p>Thus, finding <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span> can be reformulated as finding the period of the function <span on:mouseenter={() => setActive(["f"])}>{@html math("f")}</span>, which is where the quantum Fourier transform will prove extremely useful.</p>
<h2>Finding the period with the help of interference</h2>
<p>...</p>
<!-- TODO: include visualizations and finish text -->