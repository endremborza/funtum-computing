<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummarySeparable_state from './wiki/wikiSummarySeparable_state.html?raw';
    import wikiSummaryQuantum_entanglement from './wiki/wikiSummaryQuantum_entanglement.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Multiple qubits</h2>
<p>Most quantum algorithms require not only one, but several qubits. The states of these qubits may be <Hoverable hovertext={wikiSummarySeparable_state}>separable</Hoverable>, meaning they each contain one independent unit of information. However, it is possible for multiple qubits to share some information with each other, in which case they no longer have states of their own, but only one joint state. This is called <Hoverable hovertext={wikiSummaryQuantum_entanglement}>entaglement</Hoverable>, and it is another fundamental difference between classical and quantum computing. As an example, two qubits can be entangled in a way that, if we look at one of them and find it's in the basis state <span on:mouseenter={() => setActive([])}>{@html math("|0\\rangle")}</span>, we learn immediately that the other one must be in the basis state <span on:mouseenter={() => setActive([])}>{@html math("|1\\rangle")}</span>, and vice versa.</p>
<p>Let <span on:mouseenter={() => setActive(["\\psi"])}>{@html math("|\\psi\\rangle")}</span> denote the state of a sequence of <span on:mouseenter={() => setActive(["n"])}>{@html math("n")}</span> qubits. If the qubits are separable, the state can be written as <span on:mouseenter={() => setActive(["n", "\\psi", "\\beta", "\\alpha"])}>{@html math("|\\psi\\rangle = \\left( \\alpha_1 |0\\rangle + \\beta_1 |1\\rangle \\right) \\otimes ... \\otimes \\left( \\alpha_n |0\\rangle + \\beta_n |1\\rangle \\right)")}</span>, where <span on:mouseenter={() => setActive(["k", "\\beta", "\\alpha"])}>{@html math("\\alpha_k, \\beta_k")}</span> are the coefficients associated with the state of the <span on:mouseenter={() => setActive(["k"])}>{@html math("k")}</span>-th qubit as described above, and the operator <span on:mouseenter={() => setActive([])}>{@html math("\\otimes")}</span> indicates that none of the qubits are entagled with each other.</p>
<!-- TODO remove the fourier transform intro from below, visualize a very simple system and maybe add something about quantum gates -->