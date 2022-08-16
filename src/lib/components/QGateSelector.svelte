<script lang="ts">
	import { staticGates } from '$lib/qgates';
	import { add, matrix, subtract, dotDivide, type Matrix } from 'mathjs';
	import { math } from 'mathlifier';

	//https://en.wikipedia.org/wiki/Quantum_logic_gate

	//Identity_gate
	//Pauli_gates_(X,Y,Z)
	//Hadamard_gate
	//Phase_shift_gates
	//Square_root_of_NOT_gate_(√NOT)

	type GateInfo = { name: string; matrix: Matrix; display: string };

	let allGates: GateInfo[] = [
		{
			name: 'Identity Gate',
			matrix: matrix([
				[1, 0],
				[0, 1]
			]),
			display: '{\\displaystyle I={\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}}}'
		},
		{
			name: 'Hadamard Gate',
			matrix: staticGates.H,
			display:
				'{\\displaystyle H={\\frac {1}{\\sqrt {2}}}{\\begin{bmatrix}1&1 \\\\ 1&-1\\end{bmatrix}}}'
		},
		{
			name: 'Pauli-X',
			matrix: matrix(staticGates.X),
			display:
				'{\\displaystyle X=\\sigma _{x}=\\operatorname {NOT} ={\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}}}'
		},
		{
			name: 'Pauli-Y',
			matrix: matrix(staticGates.Y),
			display: '{\\displaystyle Y=\\sigma _{y}={\\begin{bmatrix}0&-i\\\\i&0\\end{bmatrix}}}'
		},
		{
			name: 'Pauli-Z',
			matrix: matrix(staticGates.Z),
			display: '{\\displaystyle Z=\\sigma _{z}={\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}}}'
		},
		{
			name: '√NOT',
			matrix: staticGates.sqrtX,
			display:
				'{\\displaystyle {\\sqrt {X}}={\\sqrt {\\text{NOT}}}={\\frac{1}{2}}{\\begin{bmatrix}1+i&1-i\\\\1-i&1+i \\end{bmatrix}}}'
		}
	];

	export let gate = allGates[0];
	export let transitionTime = 800;
	export let transitionSteps = 20;
	export let currentMatrix = allGates[0].matrix;

	let diffMat: Matrix;
	let currentDisplay = '';

	function makeTransition() {
		diffMat = dotDivide(subtract(gate.matrix, currentMatrix), transitionSteps);
		step(0);
		currentDisplay = gate.display;
	}

	function step(n: number) {
		setTimeout(() => {
			currentMatrix = add(currentMatrix, diffMat);
			if (n >= transitionSteps - 1) {
				currentMatrix = gate.matrix;
			} else {
				step(n + 1);
			}
		}, transitionTime / transitionSteps);
	}
</script>

<div class="pt-4">
	<select bind:value={gate} on:change={makeTransition}>
		{#each allGates as gateInfo}
			<option value={gateInfo}>
				{gateInfo.name}
			</option>
		{/each}
	</select>
</div>

<div class="pt-4">
	{@html math(currentDisplay)}
</div>
