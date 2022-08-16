<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import CameraControl from '$lib/components/CameraControl.svelte';
	import Qbit from '$lib/components/Qubit.svelte';
	import { pi, multiply, sqrt } from 'mathjs';

	let svgSize = 600;
	$: cameraPosition = { x: 3, y: 2, z: 1.5 };

	$: aDeg = 15;
	$: bDeg = 310;
	$: rAlpha = 0.9;

	$: phiAlpha = (aDeg / 180) * pi;
	$: phiBeta = (bDeg / 180) * pi;

	let H = multiply(1 / sqrt(2), [
		[1, 1],
		[1, -1]
	]);
</script>

<div class="sidebar">
	Camera Position
	<div>
		{cameraPosition.x.toFixed(2)}, {cameraPosition.y.toFixed(2)}, {cameraPosition.z.toFixed(2)}
	</div>

	<div class="camera-control">
		<CameraControl bind:cameraPosition minX={1.5} polar={true} />
	</div>
</div>

<main>
	<h1>QFT</h1>

	<div class="cpanel">
		phiA<input class="slider" type="range" bind:value={aDeg} min={0} max={360} step={1} />
		phiB<input class="slider" type="range" bind:value={bDeg} min={0} max={360} step={1} />
		rA<input class="slider" type="range" bind:value={rAlpha} min={0} max={1} step={0.01} />
	</div>

	<Qbit {phiAlpha} {phiBeta} {rAlpha} {cameraPosition} {svgSize} />
	<Qbit {phiAlpha} {phiBeta} {rAlpha} {cameraPosition} {svgSize} quantumGates={[H]} />
</main>

<style>
	input {
		padding: 3px;
		margin: 9px;
	}

	.slider {
		width: 300px;
		margin-top: 0.5em;
	}

	.cpanel {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
