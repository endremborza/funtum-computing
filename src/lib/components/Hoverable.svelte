<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let hovertext: string;

	let hovering = false;

	const enter = () => (hovering = true);
	const leave = () => (hovering = false);
</script>

<span class="hover-outer" on:mouseenter={enter} on:mouseleave={leave}>
	<slot />
	{#if hovering}
		<div in:scale={{ duration: 150, easing: quintOut, opacity: 0 }} class="hover-inner">
			{@html hovertext}
		</div>
	{/if}
</span>

<style>
	.hover-outer {
		position: relative;
		color: var(--accent-color);
		font-weight: bold;
	}

	.hover-inner {
		position: absolute;
		width: 20rem;
		z-index: 50;
		--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
		--tw-bg-opacity: 1;
		background-color: rgba(255, 255, 255, var(--tw-bg-opacity));

		border-width: 2px;
		border-radius: 0.5rem;
		border-color: rgba(229, 231, 235, var(--tw-border-opacity));

		padding: 1rem;

		left: 2rem;
		top: 1rem;
	}
</style>
