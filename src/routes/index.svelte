<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { VegaLite } from 'svelte-vega';
	import spec1 from '$lib/spec1';

	let info = '';
	function hovHandle(...args: any) {
		let val = args[1].n;
		if (args[1].n != undefined) {
			info = `n: ${val}`;
		} else {
			info = '';
		}
	}

	const handlers = { hov: hovHandle };

	const bits = 6;
	const nmax = Math.pow(2, bits) - 1;

	let N = 39;
	let a = 7;
	let measured = 0;

	let table: { rem: number; n: number; ttip: string; measured: number | null }[] = [];
	let data = { table };
	let spec = spec1;

	let measurements: Array<number> = [];

	function setDataTable() {
		table = [];
		for (let i = 1; i <= nmax; i++) {
			let rem = a % N;
			for (let j = 1; j < i; j++) {
				rem = (rem * a) % N;
			}
			table.push({
				rem,
				n: i,
				ttip: `Here as a=${a} and N=${N} => ${a} ^ ${i} % ${N} = ${rem}`,
				measured: rem == measured ? rem : null
			});
		}
		data = { table };
	}

	function handleUpdateData() {
		measurements = [];
		setDataTable();
	}
	handleUpdateData();

	function createMeasurement() {
		measured = data.table[Math.floor(Math.random() * nmax)].rem;
		measurements.push(measured);
		measurements = measurements;
		setDataTable();
	}
</script>

<svelte:head>
	<title>QFT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>QFT</h1>

<button on:click={createMeasurement}>Measure</button>

<label>
	a: {a}
	<input type="range" bind:value={a} min="1" max="15" on:change={handleUpdateData} />
</label>

<label>
	N: {N}
	<input type="range" bind:value={N} min="4" max={nmax} on:change={handleUpdateData} />
</label>

<VegaLite {data} {spec} signalListeners={handlers} />

info: {info}
<br />
measured: {measured}
<br />
all measurements:
<div class="array">
	{#each measurements as element}
		<b>{element}</b><br />
	{/each}
</div>

<style>
	button {
		padding: 3px;
		width: 130px;
		margin: 15px;
	}
	input {
		width: 300px;
	}
	label {
		text-align: center;
		vertical-align: middle;
		padding: 3px;
		margin: 5px;
	}
</style>
