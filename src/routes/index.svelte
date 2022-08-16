<script lang="ts">
	import Qubit from '$lib/components/Qubit.svelte';
	import QuantumBlochSphere from '$lib/rendered-blocks/QuantumBlochSphere.svelte';
	import QuantumQubit from '$lib/rendered-blocks/QuantumQubit.svelte';
	import QuantumGate from '$lib/rendered-blocks/QuantumGate.svelte';
	import ComplexIntro from '$lib/rendered-blocks/ComplexIntro.svelte';

	import { slide } from 'svelte/transition';
	import { math } from 'mathlifier';
	import { cos, matrix, pi } from 'mathjs';
	import QGateSelector from '$lib/components/QGateSelector.svelte';

	let cameraPosition = { x: 4, y: 0.3, z: 0.5 };
	let aDeg = 15;
	let bDeg = 310;
	let rAlpha = 0.9;

	$: phiAlpha = (aDeg / 180) * pi;
	$: phiBeta = (bDeg / 180) * pi;
	let showBloch = false;
	let toggleBloch = true;

	let thetaDeg = 30;
	let phiDeg = 50;

	$: blochTheta = (thetaDeg / 180) * pi;
	$: blochPhi = (phiDeg / 180) * pi;

	let gate = {
		name: 'I',
		display: '',
		matrix: matrix([
			[1, 0],
			[0, 1]
		])
	};

	let currentMatrix = matrix([
		[1, 0],
		[0, 1]
	]);

	let showComplex = false;
</script>

<!--div class="sidebar" /-->

<init>
	<h1>Quantum Tinkering</h1>

	<QuantumQubit />

	<h2 type="button" on:click={() => (showComplex = !showComplex)}>
		Important properties of complex numbers <span class={`arrow ${showComplex ? 'down' : ''}`} />
	</h2>
	{#if showComplex}
		<div transition:slide={{ duration: 400 }}>
			<ComplexIntro />
		</div>
	{/if}

	<div class="interaction container mt-3">
		<div class="row mb-4">
			<div class="col-12">
				<p>
					Play around with 2 representations of a single qubit. You adjust the view of the 3D Bloch
					sphere by clicking on the image and dragging.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-12">
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
			<Qubit
				displayBloch={showBloch}
				{phiAlpha}
				{phiBeta}
				{rAlpha}
				blochClass="col-lg-4 col-md-12"
				vectorClass="col-lg-4 col-md-12"
			/>
		</div>
	</div>

	<QuantumBlochSphere />

	<QuantumGate />

	<div class="interaction container">
		<div class="row mb-4">
			<div class="col-12">
				<p>
					Look at the how a quantum gate - expressed as a unitary matrix - transforms a Bloch sphere
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-12">
				{@html math('\\theta')}<input
					type="range"
					bind:value={thetaDeg}
					min={0}
					max={180}
					step={1}
				/>
				{@html math('\\phi')}<input type="range" bind:value={phiDeg} min={0} max={360} step={1} />
				<span>Select quantum gate</span>
				<div>
					<QGateSelector bind:currentMatrix />
				</div>
				<b>Toggle Bloch/vectors</b>
				<input type="checkbox" bind:checked={toggleBloch} style="width:auto" />
			</div>
			<div class="col-lg-4 col-md-12">
				<Qubit
					bind:cameraPosition
					displayBloch={toggleBloch}
					displayVectors={!toggleBloch}
					phiBeta={-blochPhi}
					rAlpha={cos(blochTheta / 2)}
				/>
			</div>
			<div class="col-lg-4 col-md-12">
				<Qubit
					bind:cameraPosition
					displayBloch={toggleBloch}
					displayVectors={!toggleBloch}
					phiBeta={-blochPhi}
					rAlpha={cos(blochTheta / 2)}
					quantumGates={[currentMatrix]}
				/>
			</div>
		</div>
	</div>
</init>

<style>
	input {
		width: 100%;
	}

	init {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;
		width: auto;
		max-width: 80rem;
		margin: 0 auto;
		height: 100%;
		overflow-y: auto;
	}

	.arrow {
		margin: 1.4rem;
		font-size: 1.8rem;
		line-height: 0.1px;
		vertical-align: bottom;
	}

	.arrow::before {
		position: absolute;
		content: '';
		width: 0;
		height: 0;
		border: 0.5em solid transparent;
		border-left-color: gray;
		transform-origin: 0 50%;
		transition: transform 0.25s;
	}

	.arrow.down::before {
		transform: rotate(90deg);
		transition: transform 0.25s;
	}
</style>
