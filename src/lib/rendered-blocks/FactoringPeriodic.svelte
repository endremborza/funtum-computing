<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummaryGreatest_common_divisor from './wiki/wikiSummaryGreatest_common_divisor.html?raw';
    import wikiSummaryEuclidean_algorithm from './wiki/wikiSummaryEuclidean_algorithm.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Solution</h2>
<p>The factoring problem can be solved with the following simple, but very time-consuming algorithm:</p>
<ol>
<li>
<p>We pick a random number <span on:mouseenter={() => setActive(["a", "N"])}>{@html math("a \\in \\mathbb{N}, 1 < a < N")}</span> and make sure that <span on:mouseenter={() => setActive(["a"])}>{@html math("a")}</span> and <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span> are relative primes, meaning <span on:mouseenter={() => setActive(["a", "N"])}>{@html math("\\gcd(a, N) = 1")}</span>, where <span on:mouseenter={() => setActive([])}>{@html math("\\gcd")}</span> stands for <Hoverable hovertext={wikiSummaryGreatest_common_divisor}>greatest common divisor</Hoverable>. (In case <span on:mouseenter={() => setActive(["a"])}>{@html math("a")}</span> happens to be a factor of <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span>, the entire problem is solved and no further steps are required, but that is highly unlikely if <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span> is large.)</p>
</li>
<li>
<p>Next, we construct the function <span on:mouseenter={() => setActive(["a", "f", "r", "N"])}>{@html math("f(r): \\mathbb{N} \\rightarrow \\mathbb{N} = a^r \\mod N")}</span> and find the smallest integer <span on:mouseenter={() => setActive(["r", "N"])}>{@html math("0 < \\hat{r} < N")}</span> such that <span on:mouseenter={() => setActive(["f", "r"])}>{@html math("f(\\hat{r}) = 1")}</span>. If <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span> turns out to be odd, we unfortunately have to repeat the entire procedure with a different <span on:mouseenter={() => setActive(["a"])}>{@html math("a")}</span> parameter.</p>
</li>
<li>
<p>If we're lucky and <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span> is even, we can proceed. From the definition of <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span> follows that there's <span on:mouseenter={() => setActive(["N", "m"])}>{@html math("m \\in \\mathbb{N}")}</span> such that <span on:mouseenter={() => setActive(["a", "r", "N", "m"])}>{@html math("a^{\\hat{r}} = m \\cdot N + 1")}</span>. We can then define the integer <span on:mouseenter={() => setActive(["a", "b", "r"])}>{@html math("b = a^{\\frac{\\hat{r}}{2}}")}</span>, which means <span on:mouseenter={() => setActive(["a", "b", "r"])}>{@html math("b^2 = (a^{\\frac{\\hat{r}}{2}})^2 = a^{\\hat{r}}")}</span>. Also, we can make use of a well-known algebraic identity to write <span on:mouseenter={() => setActive(["b"])}>{@html math("b^2 - 1 = (b + 1)(b - 1)")}</span>. Putting together these three equations, we find that <span on:mouseenter={() => setActive(["b", "N", "m"])}>{@html math("(b + 1)(b - 1) = m \\cdot N")}</span>.</p>
</li>
<li>
<p>And then we're done, because the prime factors we're looking for are <span on:mouseenter={() => setActive(["a", "r", "N"])}>{@html math("\\gcd(a^{\\frac{r}{2} - 1}, N)")}</span> and <span on:mouseenter={() => setActive(["a", "r", "N"])}>{@html math("\\gcd(a^{\\frac{r}{2} + 1}, N)")}</span>, and these are very easy to compute with the help of <Hoverable hovertext={wikiSummaryEuclidean_algorithm}>Euclid's algorithm</Hoverable>.</p>
</li>
</ol>
<p>For a more illuminating explanation, see the video <a href="https://www.youtube.com/watch?v=wUwZZaI5u0c&amp;t=731s">Hacking at Quantum Speed with Shor's Algorithm</a> by PBS Infinite Series.</p>
<p>The problem with this solution is that in order to find <span on:mouseenter={() => setActive(["r"])}>{@html math("\\hat{r}")}</span>, we might have to check all possible values between <span on:mouseenter={() => setActive([])}>{@html math("1")}</span> and <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span> one after the other, which is an insane amount of computation if <span on:mouseenter={() => setActive(["N"])}>{@html math("N")}</span> is number with several hundreds of digits. But that's only the case if we're trying with a classical computer.</p>
<!-- TODO edit the example according to the notation used here + elaborate on step 4. -->