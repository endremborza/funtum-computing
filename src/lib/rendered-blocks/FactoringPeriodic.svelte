<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    


    function setActive(e){
        console.log(e)
    }

</script>

<p>We can find the factors of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("N")}</span> by selecting <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("a")}</span> in a way that the greatest common denominator <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("K = \\gcd(a, N) \\neq 1")}</span>. We construct the function <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("f(r) = a^r \\mod N")}</span> and we are searching for the value <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("r > 0")}</span> so that <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("f(r) = 1")}</span>. If <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("r")}</span> is odd, we need to select a new <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("a")}</span>, otherwise we proceed. With an even <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("r")}</span>, we can create an integer <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("b = a^{\\frac{r}{2}}")}</span>. Also, due to <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("a^r \\mod N = 1")}</span> we have a positive integer <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("m")}</span> so that <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("a^r = m \\cdot N + 1 \\Rightarrow b^2-1 = (b + 1)(b - 1) = m \\cdot N")}</span>. This way the greatest common denominator of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("b+1")}</span> and <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("N")}</span> will be one of the factors of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("N")}</span>.</p>
<h1>TODO</h1>
<blockquote>
<p>add a concrete example here</p>
</blockquote>