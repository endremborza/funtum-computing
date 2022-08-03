<script lang="ts">
	import { draw } from 'svelte/transition';
	import { extent } from 'd3-array';
	import { scaleLinear } from 'd3-scale';
	import { line, curveBasis } from 'd3-shape';

	export let data: { x: number; y: number }[];
	export let show: boolean;

	let innerHeight = 20;
	// scales
	const xScale = scaleLinear()
		.domain(extent(data.map((d) => d.x)))
		.range([0, 100]);

	const yScale = scaleLinear()
		.domain(extent(data.map((d) => d.y)))
		.range([20, 80]);

	// the path generator
	const pathLine = line()
		.x((d) => xScale(d.x))
		.y((d) => yScale(d.y))
		.curve(curveBasis);
</script>

<svg width="800" height="300" viewBox="0 0 100 100">
	{#each xScale.ticks() as tickValue}
		<g transform={`translate(${xScale(tickValue)},0)`}>
			<line y2={innerHeight} stroke="black" />
			<text font-size="8" text-anchor="middle" dy=".1em" y={innerHeight + 3}>
				{tickValue}
			</text>
		</g>
	{/each}
	{#if show}
		<path transition:draw={{ duration: 2000 }} d={pathLine(data)} />
	{/if}
</svg>

<style>
	path {
		stroke: purple;
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
	}
</style>
