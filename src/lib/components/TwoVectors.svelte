<script lang="ts">
	import type { Complex } from 'mathjs';

	export let vectors: Complex[] = [];
	export let colors = ['#4682B4', '#FA8072'];
</script>

<circle cx="0" cy="0" r="1" />
<line x1="-1.5" y1="0" x2="1.5" y2="0" class="axis" />
<line x1="0" y1="-1.5" x2="0" y2="1.5" class="axis" />
<text x="1.07" y="-0.05">1</text>
<text x="-1.35" y="-0.05">−1</text>
<text x="0.08" y="-1.15" font-style="italic">i</text>
<text x="0.05" y="1.25" font-style="italic">−i</text>
{#each vectors as vec, i}
	<line x1="0" y1="0" x2={vec.re} y2={-vec.im} class="vec" stroke={colors[i]} />
{/each}

<style>
	text {
		font-size: 0.24px;
		font-family: 'KaTeX_Main';
	}

	circle {
		stroke: black;
		stroke-width: 0.02;
		fill-opacity: 0;
		stroke-dasharray: 0.1, 0.05;
	}

	.axis {
		stroke: black;
		stroke-width: 0.01;
	}

	.vec {
		stroke-width: 0.03;
	}
</style>
