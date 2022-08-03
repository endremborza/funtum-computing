<script context="module" lang="ts">
	//https://kit.svelte.dev/docs/page-options
	export const prerender = true;
</script>

<script lang="ts">
	import Factoring from '$lib/chapters/Factoring.svelte';
	import FullFourier from '$lib/chapters/FullFourier.svelte';
	import QuantumBasics from '$lib/chapters/QuantumBasics.svelte';
	import Shors from '$lib/chapters/Shors.svelte';
</script>

<div class="sidebar" />

<main>
	<h1>Interactive Quantum Computing</h1>

	<p>This page intends to introduce concepts, connect them and derive a practical use case</p>

	<h2>Clickable Table of Contents</h2>

	<Factoring />

	<QuantumBasics />

	<FullFourier />

	<Shors />
</main>
