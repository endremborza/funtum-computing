<script lang="ts">
	import { BlochSphere } from '$lib/qmath';
	import { MeasuredQubit } from '$lib/qmanipulate';
	import type { RegisterHistoryElement } from '$lib/qmanipulate';

	export let colors = ['#4682B4', '#FA8072'];
	export let phiColor = 'purple';
	export let elem: RegisterHistoryElement;
</script>

{#if elem instanceof BlochSphere}
	<line y2={elem.ketZeroChance()} stroke={colors[0]} />
	<line y1={1 - elem.ketOneChance()} y2="1" stroke={colors[1]} />
	<line x1="1" x2={1 + elem.phiX() * 0.5} y1="0.5" y2={0.5 + elem.phiY() * 0.5} stroke={phiColor} />
	<circle cx="1" cy="0.5" r="0.5" />
	<rect x="-0.2" y="-0.1" rx="0.1" ry="0.1" width="1.8" height="1.2" class="bloch-wrap" />
{:else if typeof elem === MeasuredQubit}
	<line x1="0.7" x2="0.7" y1="-0.9" y2="1.9" stroke="pink" />
{:else}
	<line x1="0.7" x2="0.7" y1="-0.9" y2="1.9" stroke="black" />
	{#if elem != 'pass'}
		<rect x="0" y="0" width="1.4" height="0.8" class="mod-wrap" />
		<text x="0.7" y="0.5" text-anchor="middle">{elem}</text>
	{/if}
{/if}

<style>
	line {
		stroke-width: 0.05;
	}

	circle {
		stroke: black;
		stroke-width: 0.02;
		fill-opacity: 0;
		stroke-dasharray: 0.1, 0.05;
	}

	text {
		font-size: 0.3px;
		font-family: 'KaTeX_Math';
	}

	.bloch-wrap {
		stroke: black;
		stroke-width: 0.02;
		fill-opacity: 0;
	}

	.mod-wrap {
		stroke: black;
		fill: lightgrey;
		stroke-width: 0.02;
		fill-opacity: 1;
	}
</style>
