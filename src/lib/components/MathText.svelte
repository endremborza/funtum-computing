<script lang="ts">
	function gcd(a: number, b: number): number {
		if (!b) {
			return a;
		}
		return gcd(b, a % b);
	}

	const bits = 6;
	const nmax = Math.pow(2, bits) - 1;
	const primes: Set<number> = new Set();

	for (let p = 2; p <= nmax / 2; p++) {
		let isPrime = true;
		primes.forEach(function (prime) {
			if (p % prime == 0) {
				isPrime = false;
			}
		});
		isPrime && primes.add(p);
	}

	let N = 39;
	let a = 7;
	let hovn: number = 0;
	let p1: number, p2: number, hovrem: number;
	let r = 12;
	$: K = gcd(N, a);
	$: meqInfo = hovn < 1 ? `${a}^n \\mod ${N} = y` : `${a}^{${hovn}} \\mod ${N} = ${hovrem}`;
	let previousN = N;

	function isComposite(n: number) {
		for (const prime of primes) {
			if (primes.has(n / prime)) {
				p1 = prime;
				p2 = n / prime;
				return true;
			}
		}
		return false;
	}
	isComposite(N);

	function updateVals(value: any) {
		N = value; // isComposite(value) ? value : previousN;
		previousN = N;
		a = a >= N ? N - 1 : a;
	}

	function updateN(node: any, value: any) {
		return {
			update(value: any) {
				let change = value - previousN;
				if (change == 0) return;
				while (!isComposite(value)) {
					value += change;
					if (value <= 2) return;
					if (value >= nmax) return;
				}
				updateVals(value);
			}
		};
	}

	function enter(x) {
		console.log(x);
	}

	function setActive(symbols: string[]) {
		console.log(symbols);
	}
</script>

<!--

<p>
	{@html rendered}
</p>

<p>
	{rendered}
</p>

<p>
	The greatest common denominator of <span on:mouseenter={enter}>{@html math(`a = ${a}`)}</span> and {@html math(
		`N = ${N}`
	)} is {@html math(`K = ${K}`)}. This is very quick to calculate.
</p>

{#if K != 1}
	<p>As in this case {@html math(`K \\neq 1`)}, a new {@html math(`a`)} is needed.</p>
{:else}
	<p>
		As {@html math(`K = ${K}`)}, the period will be informative.
	</p>
	<p>
		The period of the function is {@html math(`${r}`)}. Therefore {@html math(
			`a^{${r}} = m \\times N + 1`
		)}. Therefore {@html math(`${a}^{${r}} = m \\times ${N} + 1`)}.
	</p>
	<p>
		{#if r % 2 == 0}
			The period is even, so we can create {@html math('b = a^{\\frac{r}{2}}')}. {@html math(
				`a^r = m \\times N + 1 \\Rightarrow b^2-1 = (b + 1)(b - 1) = m \\times N`
			)}
		{:else}
			The priod is odd, we need a new a.
		{/if}
	</p>
{/if}

<p>
	Inline math (static): {@html math('A = \\frac{\\pi r^2}{10}')}
</p>

<p>
	info: <span on:mouseenter={enter}>{@html math(meqInfo)}</span>
</p>
-->
