<script lang="ts">
	import { draw } from 'svelte/transition';
	import { extent } from 'd3-array';
	import { scaleLinear } from 'd3-scale';
	import { line, curveBasis } from 'd3-shape';
	import { min } from 'mathjs';

	export let data: { x: number; y: number }[];
	export let show: boolean;
	export let strokeColor = '#8A2BE2';

	export let height = 300;
	export let aspectRatio = 2;

	$: dataSize = data.length;
	$: domainWidth = aspectRatio * 100;

	$: xScale = scaleLinear()
		.domain(extent(data.map((d) => d.x)))
		.range([0, domainWidth]);

	$: yScale = scaleLinear()
		.domain(extent(data.map((d) => d.y)))
		.range([0, 100]);

	$: pathLine = line()
		.x((d) => xScale(d.x))
		.y((d) => yScale(d.y));
	//.curve(curveBasis);
</script>

<svg width="100%" {height} viewBox="-15 -10 {domainWidth + 15} 120">
	{#each xScale.ticks(min(dataSize, 10)) as tickValue}
		<g transform={`translate(${xScale(tickValue).toPrecision(3)}, 102)`}>
			<line y2="3" stroke="black" />
			<text font-size="5" text-anchor="middle" y="8">{tickValue}</text>
		</g>
	{/each}
	{#each yScale.ticks(min(dataSize, 7)) as tickValue}
		<g transform={`translate(-2, ${yScale(tickValue).toPrecision(3)})`}>
			<line x2="-3" stroke="black" />
			<text font-size="5" text-anchor="end" x="-6" y="1.5">{tickValue}</text>
		</g>
	{/each}
	{#if show}
		<path transition:draw={{ duration: 2000 }} d={pathLine(data)} stroke={strokeColor} />
	{/if}
</svg>

<style>
	path {
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
	}

	line {
		stroke-width: 0.5;
	}
</style>
