<script lang="ts">
	import { multiply, matrix } from 'mathjs';
	import { createPerspectiveProjection, createViewMatrix } from '$lib/perspective';
	import { getBspTree, getFaces, type SceneElement } from '$lib/render';

	export let precision = 5;
	export let shift = 5;

	export let cameraPosition = [20, 25, 60];
	export let cameraLooksAt = [0, 0, 0];
	export let upVector = [0, 0, 1];

	export let fovy = 25;
	export let aspect = 1;
	export let near = 0.2;
	export let far = 1;

	export let scene: SceneElement[] = [];

	export let defaultStyle = {
		fill: 'white',
		'fill-opacity': '0.6',
		stroke: 'black',
		'stroke-linejoin': 'round',
		'stroke-width': '0.005'
	};

	$: projectionMatrix = multiply(
		createViewMatrix(cameraPosition, cameraLooksAt, upVector),
		createPerspectiveProjection(fovy, aspect, near, far)
	);

	$: bspTree = getBspTree(scene, precision, shift);

	$: faces = getFaces(bspTree, scene, projectionMatrix, matrix(cameraPosition), precision, shift);
</script>

<g {...defaultStyle}>
	{#each faces as { line, attrs, text }, j}
		{#if line}
			<polyline {...attrs} />
		{:else if text}
			<text {...attrs}>
				{text}
			</text>
		{:else}
			<polygon {...attrs} />
		{/if}
	{/each}
</g>
