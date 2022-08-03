<script lang="ts">
	import { math } from 'mathlifier';
	import { vectorFromPolar, vectorFromCoords, type Polar2D } from '$lib/qmath';
	import TwoVectors from './TwoVectors.svelte';
	import SvgScene from './SvgScene.svelte';
	import { circle, globeGrid } from '$lib/shapes';
	import { multiply, pi, acos, sqrt, complex, subset, index, add, cos, sin, matrix } from 'mathjs';
	import type { Matrix, Complex } from 'mathjs';
	import { braKet, getBlochLabel, getBlochMath, getBlochThetaFaces } from '$lib/qlabels';

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

<div style="display:grid;grid-template-columns: {svgSize}px {svgSize}px">
	<div class="elem">
		{#if displayMath}
			<span style="font-size: {svgSize / 24}px;text-align: center;">
				{@html math(braKets.join(' + '), { trust: true })}
			</span>
		{/if}
		<svg width={svgSize} height={svgSize} viewBox="-2 -2 4 4">
			<TwoVectors {vectors} {colors} />
		</svg>
	</div>

	<div class="elem">
		{#if displayMath}
			<span style="font-size: {svgSize / 24}px;text-align: center;">
				{@html math(blochMath, { trust: true })}
			</span>
		{/if}
		<svg baseProfile="full" height={svgSize} width={svgSize} viewBox="-2 -2 4 4">
			<SvgScene cameraPosition={positionVector} {scene} />
		</svg>
	</div>
</div>

<style>
	.elem {
		display: grid;
	}
</style>
