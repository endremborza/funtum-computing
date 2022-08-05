<script lang="ts">
	import { math } from 'mathlifier';
	import { gcd } from 'mathjs';

	export let bits = 7;

	function getPeriod(a: number, N: number) {
		for (let n = 1; n < N; n++) {
			let rem = a % N;
			for (let j = 1; j < n; j++) {
				rem = (rem * a) % N;
			}
			if (rem == 1) {
				return n;
			}
		}
		return 0;
	}

	let nmax = Math.pow(2, bits) - 1;
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
	let previousN = N;
	let a = 7;
	let hovn: number = 0;
	let p1: number, p2: number, hovrem: number;

	$: r = getPeriod(a, N);
	$: K = gcd(N, a);
	$: b = Math.pow(a, r / 2);

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

	function updateVals(value: any) {
		N = value; // isComposite(value) ? value : previousN;
		previousN = N;
		a = a >= N ? N - 1 : a;
	}
</script>

<div class="cpanel">
	<div class="varlabel">a:</div>
	<input class="numsel" type="number" bind:value={a} min={2} max={N - 1} />
	<input class="slider" type="range" bind:value={a} min={2} max={N - 1} />
	<div class="varlabel">N:</div>
	<input class="numsel" type="number" use:updateN={N} bind:value={N} min="1" max={nmax} />
	<div id="decomp">{@html math(` = ${p1} \\cdot ${p2}`)}</div>
</div>

<p>
	The greatest common divisor of {@html math(`a = ${a}`)} and {@html math(`N = ${N}`)} is
	{@html math(`K = ${K}`)}. This is very quick to calculate.
</p>

{#if K != 1}
	<p>
		As in this case {@html math(`K \\neq 1`)}, a new {@html math(`a`)} is needed. Or to put a more positive
		spin on it, we instantly can found a prime factor for {@html math('N')}, which in fact
		{@html math(`K=${K}`)} is. However, in order to see the whole algorithm in action, we should choose
		a new {@html math(`a`)}.
	</p>
{:else}
	<p>
		As {@html math(`K = ${K}`)}, the value of {@html math('r')} in {@html math('a^r \\mod N = 1')} will
		be informative.
	</p>
	<p>
		As these are all relatively small numbers, we can try all relevant possible values for
		{@html math('r')} rather quickly and find that {@html math(`${a}^{${r}} \\mod ${N} = 1`)} which means
		that there is an {@html math('m')} for which {@html math(`${a}^{${r}} = m \\cdot ${N} + 1`)}
	</p>
	<p>
		{#if r % 2 == 0}
			As {@html math('r')} is even, so we can create {@html math('b = a^{\\frac{r}{2}}')}, and
			expand the above so that
			{@html math(`a^r = m \\cdot N + 1 \\Rightarrow b^2-1 = (b + 1)(b - 1) = m \\cdot N`)}. In this
			case, as {@html math(`b = ${b}`)}, we can calculate the greatest common divisor for
			{@html math('N')} with {@html math('b-1')} and {@html math('b+1')} very quickly, which are
			{@html math(`${gcd(N, b - 1)}`)} and {@html math(`${gcd(N, b + 1)}`)} respectively
		{:else}
			{@html math('r')} is odd, we need a new {@html math('a')}.
		{/if}
	</p>
{/if}

<style>
	.varlabel {
		font-size: x-large;
		font-style: italic;
		font-family: 'KaTeX_Main';
		border-left: #bb99ff 0.2em solid;
		padding-left: 0.2em;
		margin-left: 2em;
	}
	input {
		padding: 3px;
		margin: 9px;
	}

	.slider {
		width: 300px;
		margin-top: 0.5em;
	}

	.numsel {
		width: 60px;
	}

	.cpanel {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#decomp {
		width: 8em;
	}
</style>
