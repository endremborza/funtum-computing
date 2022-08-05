<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let measurements: { ind: number; measured: number }[] = [];

	export function createMeasurement() {
		measurements.push({ ind: measurements.length, measured: Math.floor(Math.random() * 200) });
		measurements = measurements;
	}
</script>

<div class="control">
	<button on:click={createMeasurement}>Measure</button>
</div>

<p>all measurements:</p>

<div class="array">
	{#each measurements as measure (measure.ind)}
		<div
			animate:flip={{ duration: 300 }}
			out:scale={{ duration: 250 }}
			in:scale={{ duration: 250 }}
			class="element"
		>
			{measure.measured}
		</div>
	{/each}
</div>

<style>
	button {
		color: #000;
		background-color: var(--accent-color);
		padding: 0.75em 1.5em;
		border: 2px solid black;
		border-radius: 0.25em;
		box-shadow: -0.25em 0.25em 0 #000;
		cursor: pointer;
		width: 130px;
		margin: 15px;
	}

	.array {
		display: flex;
		height: 3em;
	}

	.element {
		width: 3em;
		height: 3em;
		background-color: #5f8;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
	}

	.element + .element {
		margin-left: 0.25em;
	}
</style>
