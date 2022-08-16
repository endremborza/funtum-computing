<script lang="ts">
	import { complex } from 'mathjs';
	import { SingleQubit } from '$lib/qmath';
	import { math } from 'mathlifier';
	import { QuantumRegisterHistory } from '$lib/qmanipulate';
	import { create, phaseShift, rotateX } from '$lib/qgates';
	import QRegisterVizLayerElement from '$lib/components/QRegisterVizLayerElement.svelte';
	import type { QuantumRegisterTransformation } from '$lib/qmanipulate';

	const ketZero = new SingleQubit(complex(1, 0), complex(0, 0));
	const ketOne = new SingleQubit(complex(0, 0), complex(1, 0));

	export let initialQbits: SingleQubit[] = [ketZero, ketOne, ketOne, ketZero];
	export let transformations: QuantumRegisterTransformation[] = [
		create.H([0, 1, 3]),
		phaseShift(0.432, [1]),
		create.X([2]),
		create.Y([0]),
		create.Z([3]),
		create.SWAP([2, 3]),
		create.X([1]),
		phaseShift(1.19, [0]),
		create.Z([0]),
		rotateX(0.876, [1])
	];
	export let colors = ['#4682B4', '#FA8072'];
	export let phiColor = 'purple';
	export let objSize = 50;

	$: registerHistory = new QuantumRegisterHistory(initialQbits, transformations);
	$: boxWidth = 3 * registerHistory.qubits + 1;
	$: boxHeight = 2 * registerHistory.layerCount + 4;

	//https://qiskit.org/textbook/ch-algorithms/shor.html
	//https://quantum-computing.ibm.com/composer/docs/iqx/guide/shors-algorithm
</script>

<div class="sidebar">
	Operations

	{@html math('\\varphi')}
	{@html math('\\pi')}
	{@html math('q_{1}')}
</div>

<main>
	<h1>Quantum Register</h1>

	<svg
		height={objSize * boxHeight}
		width={objSize * boxWidth}
		viewBox="-1 -3 {boxWidth} {boxHeight}"
	>
		{#each Array(registerHistory.qubits) as _, i}
			<text font-size="0.5" text-anchor="middle" x={i * 3 + 0.7} y="-1">{i}</text>
		{/each}
		{#each registerHistory.iterateElement() as elem}
			<g transform={`translate(${elem.j * 3}, ${elem.i * 2})`}>
				<QRegisterVizLayerElement elem={elem.elem} {phiColor} {colors} />
			</g>
		{/each}
	</svg>
</main>
