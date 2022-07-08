<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { VegaLite } from 'svelte-vega';
	import type { View } from 'svelte-vega';
	import { math } from 'mathlifier';

	import spec1 from '$lib/spec1';

	//sympy integration
	//effects of hovering over variables

	function gcd(a: number, b: number): number {
		if (!b) {
			return a;
		}
		return gcd(b, a % b);
	}

	function getFullData(N: number, a: number, measured: number) {
		let table: { rem: number; n: number; ttip: string; measured: number | null }[] = [];
		for (let n = nmax; n >= 1; n--) {
			let rem = a % N;
			for (let j = 1; j < n; j++) {
				rem = (rem * a) % N;
			}
			if (rem == 1) {
				r = n;
			}
			table.push({
				rem,
				n,
				ttip: `Here as a=${a} and N=${N} => ${a} ^ ${n} % ${N} = ${rem}`,
				measured: rem == measured ? rem : null
			});
		}
		return { table };
	}

	let view: View;
	let spec = spec1;

	const handlers = { hov: hovHandle };

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
	function hovHandle(...args: any) {
		let val = args[1].n;
		hovrem = val != undefined ? args[1].rem : 0;
		hovn = val != undefined ? val : 0;
	}

	$: measured = a | N ? 0 : 0;
	$: data = getFullData(N, a, measured);
	let measurements: { ind: number; measured: number }[];
	$: measurements = a | N ? [] : [];

	function createMeasurement() {
		measured = data.table[Math.floor(Math.random() * nmax)].rem;
		measurements.push({ ind: measurements.length, measured });
		measurements = measurements;
	}

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
</script>

<svelte:head>
	<title>QFT</title>
	<meta name="description" content="Svelte demo app" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
</svelte:head>

<h1 id="mh1">QFT</h1>

<div class="cpanel">
	<div class="control">
		<button on:click={createMeasurement}>Measure</button>
	</div>
	<div class="varlabel">a:</div>
	<input class="numsel" type="number" bind:value={a} min={2} max={N - 1} />
	<input class="slider" type="range" bind:value={a} min={2} max={N - 1} />
	<div class="varlabel">N:</div>
	<input class="numsel" type="number" use:updateN={N} bind:value={N} min="1" max={nmax} />
	<div id="decomp">{@html math(` = ${p1} \\times ${p2}`)}</div>
</div>

<div class="cpanel">
	<VegaLite {data} {spec} bind:view signalListeners={handlers} />
</div>

<div class="expl">
	<p>
		The greatest common denominator of {@html math(`\\htmlData{tooltip=abc}{a} = ${a}`, {
			trust: true
		})} and {@html math(`N = ${N}`)} is {@html math(`K = ${K}`)}. This is very quick to calculate.
	</p>

	{#if K != 1}
		<p>As in this case {@html math(`K \\neq 1`)}, a new {@html math(`a`)} is needed.</p>
	{:else}
		<p>
			As {@html math(`\\href{#mh1}{K} = ${K}`, { trust: true })}, the period will be informative.
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
		info: {@html math(meqInfo)}
	</p>
	<p>
		measured: {measured}
	</p>
	<p>all measurements:</p>
</div>

<div class="array">
	{#each measurements as measure (measure.ind)}
		<div
			animate:flip={{ duration: 300 }}
			out:scale={{ duration: 250 }}
			in:scale={{ duration: 250 }}
			class="element"
		>
			{measure.measured}
		</div>
	{/each}
</div>

<style>
	button {
		color: #000;
		background-color: #bb99ff;
		padding: 0.75em 1.5em;
		border: 2px solid black;
		border-radius: 0.25em;
		box-shadow: -0.25em 0.25em 0 #000;
		cursor: pointer;
		width: 130px;
		margin: 15px;
	}

	.varlabel {
		font-size: x-large;
		font-style: italic;
		border-left: #bb99ff 0.2em solid;
		padding-left: 0.2em;
		margin-left: 2em;
	}
	input {
		padding: 3px;
		margin: 9px;
	}

	.array {
		display: flex;
		height: 3em;
	}

	.element {
		width: 3em;
		height: 3em;
		background-color: #5f8;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
	}

	.element + .element {
		margin-left: 0.25em;
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
