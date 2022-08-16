<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummarySeparable_state from './wiki/wikiSummarySeparable_state.html?raw';
    import wikiSummaryQuantum_entanglement from './wiki/wikiSummaryQuantum_entanglement.html?raw';
    import wikiSummaryQuantum_register from './wiki/wikiSummaryQuantum_register.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Multiple qubits</h2>
<p>Most quantum algorithms require not only one, but several qubits. The states of these qubits may be <Hoverable hovertext={wikiSummarySeparable_state}>separable</Hoverable>, meaning they each contain one independent unit of information. However, it is possible for multiple qubits to share some information with each other, in which case they no longer have states of their own, but only one joint state. This is called <Hoverable hovertext={wikiSummaryQuantum_entanglement}>entaglement</Hoverable>, and it is another fundamental difference between classical and quantum computing. As an example, two qubits can be entangled in a way that, if we look at one of them and find it's in the basis state <span on:mouseenter={() => setActive([])}>{@html math("|0\\rangle,")}</span> we learn immediately that the other one must be in the basis state <span on:mouseenter={() => setActive([])}>{@html math("|1\\rangle,")}</span> and vice versa.</p>
<p>From now on, we'll refer to a sequence of qubits as a <Hoverable hovertext={wikiSummaryQuantum_register}>quantum register</Hoverable>. Let <span on:mouseenter={() => setActive(["\\psi"])}>{@html math("|\\psi\\rangle")}</span> denote the state of a register consisting of <span on:mouseenter={() => setActive(["n"])}>{@html math("n")}</span> qubits. If the qubits are separable, the state can be written as <span on:mouseenter={() => setActive(["\\alpha", "\\beta", "\\psi", "n"])}>{@html math("|\\psi\\rangle = \\left( \\alpha_1 |0\\rangle + \\beta_1 |1\\rangle \\right) \\otimes ... \\otimes \\left( \\alpha_n |0\\rangle + \\beta_n |1\\rangle \\right),")}</span> where <span on:mouseenter={() => setActive(["\\alpha", "\\beta", "k"])}>{@html math("\\alpha_k, \\beta_k")}</span> are the coefficients associated with the state of the <span on:mouseenter={() => setActive(["k"])}>{@html math("k")}</span>-th qubit as described above, and the operator <span on:mouseenter={() => setActive([])}>{@html math("\\otimes")}</span> indicates that none of the qubits are entagled with each other.</p>
<p>Note that the state of the register can also be written as a vector, but what you saw above and what we're going to use in the rest of the explanation is the alternative, so called Dirac or bra-ket notation.</p>
<!-- TODO add quantum algorithm + viz-->