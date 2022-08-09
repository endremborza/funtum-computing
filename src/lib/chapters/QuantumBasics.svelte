<script lang="ts">
	import Qbit from '$lib/components/Qbit.svelte';
	import QuantumBlochSphere from '$lib/rendered-blocks/QuantumBlochSphere.svelte';
	import QuantumQubit from '$lib/rendered-blocks/QuantumQubit.svelte';
	import QuantumSystem from '$lib/rendered-blocks/QuantumSystem.svelte';

	import { math } from 'mathlifier';
	import { pi } from 'mathjs';
	import CameraControl from '$lib/components/CameraControl.svelte';

	$: cameraPosition = { x: 3, y: 2, z: 1.5 };

	$: aDeg = 15;
	$: bDeg = 310;
	$: rAlpha = 0.9;

	$: phiAlpha = (aDeg / 180) * pi;
	$: phiBeta = (bDeg / 180) * pi;
	let showBloch = true;
</script>

<h2>Quantum Basics</h2>

<QuantumQubit />

<div class="interaction container">
	<div class="row mb-4">
		<div class="col-12">
			<p>
				Play around with 2 representations of a single qubit. You adjust the view of the 3D Bloch
				sphere by clicking on the image and dragging.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4 col-sm-12">
			{@html math('\\phi_\\alpha')}<input
				type="range"
				bind:value={aDeg}
				min={0}
				max={360}
				step={1}
			/>
			{@html math('\\phi_\\beta')}<input
				type="range"
				bind:value={bDeg}
				min={0}
				max={360}
				step={1}
			/>
			{@html math('r_\\alpha')}<input
				type="range"
				bind:value={rAlpha}
				min={0}
				max={1}
				step={0.01}
			/>
			<b>Display Bloch sphere</b>
			<input type="checkbox" bind:checked={showBloch} style="width:auto" />
		</div>
		<Qbit
			displayBloch={showBloch}
			{phiAlpha}
			{phiBeta}
			{rAlpha}
			blochClass="col-lg-4 col-sm-12"
			vectorClass="col-lg-4 col-sm-12"
		/>
	</div>
</div>

<QuantumBlochSphere />

<!--
<div class="interaction">
	<CameraControl bind:cameraPosition minX={1.5} polar={true} />
	<Qbit displayVectors={false} {phiAlpha} {phiBeta} {rAlpha} {cameraPosition} />
</div>
-->

<QuantumSystem />

<style>
	input {
		width: 100%;
	}
</style>
