<script lang="ts">
	import InteractivePeriodicFactoring from '$lib/components/InteractivePeriodicFactoring.svelte';
	import FactoringIntro from '$lib/rendered-blocks/FactoringIntro.svelte';
	import FactoringPeriodic from '$lib/rendered-blocks/FactoringPeriodic.svelte';
</script>

<h2>Factoring</h2>

<FactoringIntro />

<FactoringPeriodic />

<div class="interaction">
	<InteractivePeriodicFactoring />
</div>
