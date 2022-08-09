<script lang="ts">
	import QuantumFourier from '$lib/rendered-blocks/QuantumFourier.svelte';
	import { pow, multiply, e, pi, i } from 'mathjs';
	import type { Complex } from 'mathjs';
	import LineChart from '$lib/components/LineChart.svelte';
	import { math } from 'mathlifier';

	$: qubits = 3;
	$: x = 9;

	$: N = pow(2, qubits);

	let xTransformed: Complex[];
	$: xTransformed = [...Array(N).keys()].map((k) => pow(e, multiply((2 * pi * x * k) / N, i)));

	$: dataReal = xTransformed.map((c, i) => ({ x: i, y: c.im }));
	$: dataImag = xTransformed.map((c, i) => ({ x: i, y: c.re }));
</script>

<QuantumFourier />

<div class="interaction container">
	<div class="row">
		<div class="col-lg-6 col-sm-12">
			<span class="label">{@html math(`x = ${x}`)}</span>
			<input type="range" bind:value={x} min={0} max={10} step={1} />
		</div>
		<div class="col-lg-6 col-sm-12">
			<span class="label">{qubits} qubits</span>
			<input type="range" bind:value={qubits} min={3} max={10} step={1} />
		</div>
	</div>
	<div class="mb-3">
		<p>Real part</p>
		<LineChart data={dataReal} show={true} aspectRatio={3} />
	</div>
	<div>
		<p>Imaginary part</p>
		<LineChart data={dataImag} show={true} aspectRatio={3} strokeColor={'#A0522D'} />
	</div>
</div>

<style>
	input {
		width: 100%;
	}
	.label {
		width: 100%;
		display: block;
	}
</style>
