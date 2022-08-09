<script lang="ts">
	import { math } from 'mathlifier';
	import { vectorFromPolar, vectorFromCoords, type Polar2D } from '$lib/qmath';
	import TwoVectors from './TwoVectors.svelte';
	import SvgScene from './SvgScene.svelte';
	import { circle, globeGrid } from '$lib/shapes';
	import { multiply, pi, acos, sqrt, complex, subset, index, cos, sin, matrix, e } from 'mathjs';
	import type { Matrix, Complex } from 'mathjs';
	import { braKet, getBlochLabel, getBlochMath, getBlochThetaFaces } from '$lib/qlabels';
	import CameraControl from './CameraControl.svelte';

	export let cameraPosition = { x: 4, y: 0.3, z: 0.5 };
	export let quantumGates: Matrix[] = [];

	export let phiAlpha = 0;
	export let phiBeta = 0;
	export let rAlpha = 0;

	export let colors = ['#4682B4', '#FA8072'];
	export let phiColor = 'purple';
	export let thetaColor = 'red';

	export let svgSize = 300;
	export let displayMath = true;
	export let displayBloch = true;
	export let displayVectors = true;

	export let selfControl = true;
	export let polar = true;

	export let vectorClass = '';
	export let blochClass = '';

	//for reference
	//https://en.wikipedia.org/wiki/Spherical_coordinate_system
	//https://en.wikipedia.org/wiki/Bloch_sphere
	//https://en.wikipedia.org/wiki/Quantum_state#Superposition_of_pure_states
	//https://en.wikipedia.org/wiki/Quantum_logic_gate#Hadamard_gate
	//https://en.wikipedia.org/wiki/Hadamard_transform#Quantum_computing_applications

	let compToCoords = (c: Complex) => ({ x: c.re, y: c.im });

	function getVectors(A: Polar2D, B: Polar2D, quantumGates: Matrix[]) {
		let vecQbit = [A, B].map((p) => [complex(p)]);
		quantumGates.forEach((QM) => {
			vecQbit = multiply(QM, vecQbit);
		});
		return [0, 1].map((i) => subset(vecQbit, index(i, 0)));
	}

	$: compVector = getVectors(
		{ phi: phiAlpha, r: rAlpha },
		{ phi: phiBeta, r: sqrt(1 - Math.pow(rAlpha, 2)) },
		quantumGates
	);

	$: vectors = compVector.map(compToCoords);
	$: braKets = [0, 1].map((i) => braKet(vectors, i, colors));

	$: A = compVector[0].toPolar();
	$: B = compVector[1].toPolar();

	$: blochPhi = ((x) => (x < 0 ? 2 * pi + x : x))(A.phi - B.phi);
	$: blochTheta = 2 * acos(A.r);
	$: blochVector = vectorFromPolar({ theta: blochTheta, phi: blochPhi, r: 1 });
	$: blochMath = getBlochMath(blochPhi, blochTheta, phiColor, thetaColor);

	$: positionVector = vectorFromCoords(cameraPosition);

	$: scene = [
		...globeGrid(12),
		{
			faces: [matrix([[0, 0, 0], blochVector])],
			style: { stroke: 'black', 'stroke-width': 0.02 },
			line: true
		},
		{
			faces: [
				multiply(circle(32, blochPhi / (2 * pi)), sin(blochTheta)),
				matrix([[cos(blochPhi) * sin(blochTheta), sin(blochPhi) * sin(blochTheta), 0], blochVector])
			],
			style: { stroke: phiColor, fill: 'none', opacity: '90%', 'stroke-width': 0.015 },
			line: true
		},
		{
			faces: getBlochThetaFaces(blochPhi, blochTheta),
			style: { fill: thetaColor, opacity: '90%', 'stroke-width': 0 }
		},
		...[0, 1].map((i) => getBlochLabel(i, colors))
	];
</script>

{#if displayVectors}
	<div class={vectorClass} style="--size:{svgSize}">
		{#if displayMath}
			<span style="--size:{svgSize}">
				{@html math(braKets.join(' + '), { trust: true })}
			</span>
		{/if}
		<svg width={svgSize} height={svgSize} viewBox="-2 -2 4 4">
			<TwoVectors {vectors} {colors} />
		</svg>
	</div>
{/if}
{#if displayBloch}
	<div class={blochClass} style="--size:{svgSize}">
		{#if displayMath}
			<span style="--size:{svgSize}">
				{@html math(blochMath, { trust: true })}
			</span>
		{/if}
		{#if selfControl}
			<CameraControl bind:cameraPosition minX={1.5} {polar} viewBox="-2 -2 4 4">
				<SvgScene cameraPosition={positionVector} {scene} />
			</CameraControl>
		{:else}
			<svg height={svgSize} width={svgSize} viewBox="-2 -2 4 4">
				<SvgScene cameraPosition={positionVector} {scene} />
			</svg>
		{/if}
	</div>
{/if}

<style>
	span {
		font-size: calc(var(--size) / 24 * 1px); /* {svgSize / 24}px */
		text-align: center;
		width: calc(var(--size) * 1px);
		display: block;
	}

	div {
		width: calc(var(--size) * 1px);
	}
</style>
