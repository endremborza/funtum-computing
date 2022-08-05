<script lang="ts">
	import Qbit from '$lib/components/Qbit.svelte';
	import QuantumBlochSphere from '$lib/rendered-blocks/QuantumBlochSphere.svelte';
	import QuantumQubit from '$lib/rendered-blocks/QuantumQubit.svelte';
	import QuantumSystem from '$lib/rendered-blocks/QuantumSystem.svelte';

	import { math } from 'mathlifier';
	import { pi } from 'mathjs';
	import CameraControl from '$lib/components/CameraControl.svelte';

	export let disabledScroll = false;

	$: cameraPosition = { x: 3, y: 2, z: 1.5 };

	$: aDeg = 15;
	$: bDeg = 310;
	$: rAlpha = 0.9;

	$: phiAlpha = (aDeg / 180) * pi;
	$: phiBeta = (bDeg / 180) * pi;
</script>

<h2>Quantum Basics</h2>

<QuantumQubit />

<div class="interaction">
	<div class="cpanel">
		{@html math('\\phi \\alpha')}<input
			class="slider"
			type="range"
			bind:value={aDeg}
			min={0}
			max={360}
			step={1}
		/>
		{@html math('\\phi \\beta')}<input
			class="slider"
			type="range"
			bind:value={bDeg}
			min={0}
			max={360}
			step={1}
		/>
		{@html math('r \\alpha')}<input
			class="slider"
			type="range"
			bind:value={rAlpha}
			min={0}
			max={1}
			step={0.01}
		/>
	</div>

	<Qbit displayBloch={false} {phiAlpha} {phiBeta} {rAlpha} />
</div>

<QuantumBlochSphere />

<div class="interaction">
	<CameraControl bind:disabledScroll bind:cameraPosition minX={1.5} polar={true} />
	<Qbit displayVectors={false} {phiAlpha} {phiBeta} {rAlpha} {cameraPosition} />
</div>

<QuantumSystem />

<style>
	.cpanel {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
