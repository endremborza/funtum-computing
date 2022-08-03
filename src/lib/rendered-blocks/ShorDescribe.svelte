<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummaryPeriodic_function from './wiki/wikiSummaryPeriodic_function.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<p>So, how does the algorithm work? Below you find a step-by-step description, for now without the quantum part. relies on the <Hoverable hovertext={wikiSummaryPeriodic_function}>periodic</Hoverable> nature of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("f(r) = a^r \\mod N")}</span>.</p>
<ol>
<li>
<p>Pick a random number <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large a \\in \\mathbb{N}, 1 < a < N")}</span> and make sure that <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large a")}</span> and <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large N")}</span> are relative primes, meaning their greatest common divisor is <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large 1")}</span>. (In case <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("a")}</span> happens to be a factor of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large N")}</span>, the entire problem is solved and no further steps are required, but that is highly unlikely for large <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large N")}</span>.)</p>
</li>
<li>
<p>Find the period of the function <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large a^n \\mod{N}")}</span>. The period is the smallest <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large r \\in \\mathbb{N}, 1 < r < N")}</span> such that <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large a^r \\mod{N} = 1")}</span>. If the period turns out to be odd, the entire procedure has to be repeated with a different <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large a")}</span> parameter.</p>
</li>
<li>
<p>If we're lucky and the period is even, the sought factors are <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large \\gcd({a^{\\frac{r}{2} - 1}}, N)")}</span> and <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\large \\gcd({a^{\\frac{r}{2} + 1}}, N)")}</span> (where <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\gcd")}</span> stands for <em>greatest common divisor</em>). For a detailed explanation of why this is true, see the video <a href="https://www.youtube.com/watch?v=wUwZZaI5u0c&amp;t=731s">Hacking at Quantum Speed with Shor's Algorithm</a> by PBS Infinite Series.</p>
</li>
</ol>
<p>The problematic part of this procedure that is responsible for the above mentioned exponential scaling is finding the period <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("r")}</span>. Shor's algorithm utilizes a special quantum operation, the so called <em>quantum Fourier transform</em>, to find <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("r")}</span> more quickly than any classical algorithm could. This is what we'll elaborate on in the next section.</p>
<h1>TODO</h1>
<blockquote>
<p>eliminate repetition with FactoringPeriodic block</p>
</blockquote>