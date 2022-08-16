<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import wikiSummaryOperator__physics_ from './wiki/wikiSummaryOperator__physics_.html?raw';
    import wikiSummaryQuantum_circuit from './wiki/wikiSummaryQuantum_circuit.html?raw';
    import wikiSummaryQuantum_logic_gate from './wiki/wikiSummaryQuantum_logic_gate.html?raw';


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Quantum gates</h2>
<p><Hoverable hovertext={wikiSummaryOperator__physics_}>Quantum operators</Hoverable> are functions that act on the state of a quantum system. Quantum algorithms are sequences of specific quantum operators that modify the state of single or multiple qubits. The physical device that implements quantum algorithms is called a <Hoverable hovertext={wikiSummaryQuantum_circuit}>quantum circuit</Hoverable>, the building blocks of which are <Hoverable hovertext={wikiSummaryQuantum_logic_gate}>quantum logic gates</Hoverable> that correspond to the individual operators in the sequence.</p>
<p>For each quantum operator, there's a corresponding matrix and the state of the qubit can be written as a vector, <span on:mouseenter={() => setActive(["b", "m", "\\alpha", "a", "x", "r", "\\beta", "t"])}>{@html math("\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}")}</span> so the algebraic representation of an operator <span on:mouseenter={() => setActive(["U"])}>{@html math("U")}</span> acting on the state <span on:mouseenter={() => setActive(["\\psi"])}>{@html math("|\\psi\\rangle")}</span> is essentially the matrix multiplication <span on:mouseenter={() => setActive(["U", "\\psi"])}>{@html math("U|\\psi\\rangle")}</span>. For example, the Hadamard gate is represented by the <span on:mouseenter={() => setActive(["b", "m", "H", "a", "x", "r", "t"])}>{@html math("\\displaystyle H = \\frac{1}{\\sqrt{2}} \\cdot \\begin{bmatrix}1&1 \\\\ 1&-1\\end{bmatrix}")}</span> matrix, which means it can transform a qubit from a state of <span on:mouseenter={() => setActive(["b", "m", "a", "x", "r", "t"])}>{@html math("\\begin{bmatrix}1+0i\\\\0+0i\\end{bmatrix}")}</span> to <span on:mouseenter={() => setActive(["b", "m", "a", "x", "r", "t"])}>{@html math("\\begin{bmatrix}\\frac{1}{\\sqrt{2}}+0i\\\\\\frac{1}{\\sqrt{2}}+0i\\end{bmatrix}")}</span>. This is a slightly more complicated case of <a href="https://www.youtube.com/watch?v=kYB8IZa5AuE">thinking of matrices as linear transformations</a> - as complex numbers are involved - but the basic principles remain the same, and hopefully one can gather a decent understanding by tinkering with the Bloch sphere and its transformations below.</p>