<script lang="ts">
	import TwoVectors from './TwoVectors.svelte';
	import SvgScene from './SvgScene.svelte';
	import CameraControl from './CameraControl.svelte';
	import { math } from 'mathlifier';
	import { vectorFromPolar, vectorFromCoords, BlochSphere } from '$lib/qmath';
	import { circle, globeGrid } from '$lib/shapes';
	import { multiply, pi, cos, sin, matrix } from 'mathjs';
	import { braKet, getBlochLabel, getBlochMath, getBlochThetaFaces } from '$lib/qlabels';
	import type { Matrix } from 'mathjs';
	import { SingleQubit, transformQubit } from '$lib/qmath';

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

	$: qubit = SingleQubit.fromPolar(phiAlpha, phiBeta, rAlpha);

	$: finalQubit = transformQubit(qubit, quantumGates);
	$: braKets = [0, 1].map((i) => braKet(finalQubit.elem(i), i, colors));
	$: bloch = new BlochSphere(finalQubit);

	$: blochVector = vectorFromPolar({ theta: bloch.theta, phi: bloch.phi, r: 1 });
	$: blochMath = getBlochMath(bloch.phi, bloch.theta, phiColor, thetaColor);
	$: positionVector = vectorFromCoords(cameraPosition);
	$: params = finalQubit.toParams();

	$: scene = [
		...globeGrid(12),
		{
			faces: [matrix([[0, 0, 0], blochVector])],
			style: { stroke: 'black', 'stroke-width': 0.02 },
			line: true
		},
		{
			faces: [
				multiply(circle(32, bloch.phi / (2 * pi)), sin(bloch.theta)),
				matrix([
					[cos(bloch.phi) * sin(bloch.theta), sin(bloch.phi) * sin(bloch.theta), 0],
					blochVector
				])
			],
			style: { stroke: phiColor, fill: 'none', opacity: '90%', 'stroke-width': 0.015 },
			line: true
		},
		{
			faces: getBlochThetaFaces(bloch),
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
			<TwoVectors vectors={params} {colors} />
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
