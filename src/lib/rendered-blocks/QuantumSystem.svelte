<script lang="ts">
    import { math } from 'mathlifier';
	import Hoverable from '$lib/components/Hoverable.svelte';
    


    function setActive(e){
        console.log(e)
    }

</script>

<h2>Multiple qubits</h2>
<p>As you might have guessed, quantum algorithms require not only one, but several qubits. These qubits may be <em>independent</em> from each other, meaning their states can be expressed individually. However, it is possible for multiple qubits to <em>share</em> some information with each other, in which case they no longer have states of their own, but represent a unit of information together. This is called <em>entaglement</em>, and it is another fundamental difference between classical and quantum computing. As an example, two qubits can be entangled in a way that, if we look at one of them and find it's in the basis state <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("|0\\rangle")}</span>, we learn immediately that the other one must be in the basis state <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("|1\\rangle")}</span>, and vice versa.</p>
<p>The joint state of a sequence of <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("n")}</span> <em>independent</em> qubits can be written as <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\left( \\alpha_1 |0\\rangle + \\beta_1 |1\\rangle \\right) \\otimes ... \\otimes \\left( \\alpha_n |0\\rangle + \\beta_n |1\\rangle \\right)")}</span>, where <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\alpha_k, \\beta_k")}</span> are the coefficients associated with the state of the <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("k")}</span>-th qubit as described above, and the operator <span on:mouseenter={() => setActive(["a", "b"])}>{@html math("\\otimes")}</span> indicates that none of the qubits are entagled with each other.</p>
<h1>TODO</h1>
<blockquote>
<p>visualize a very simple system and maybe add something about quantum gates</p>
</blockquote>