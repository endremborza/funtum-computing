<script lang="ts">
	function getFullData(N: number, a: number, measured: number) {
		let table: { rem: number; n: number; ttip: string; measured: number | null }[] = [];
		for (let n = nmax; n >= 1; n--) {
			let rem = a % N;
			for (let j = 1; j < n; j++) {
				rem = (rem * a) % N;
			}
			if (rem == 1) {
				r = n;
			}
			table.push({
				rem,
				n,
				ttip: `Here as a=${a} and N=${N} => ${a} ^ ${n} % ${N} = ${rem}`,
				measured: rem == measured ? rem : null
			});
		}
		return { table };
	}

	//let measured = a | N ? 0 : 0;
	//let data = getFullData(N, a, measured);
	//let measurements: { ind: number; measured: number }[];
	//$: measurements = a | N ? [] : [];

	function createMeasurement() {
		//measured = data.table[Math.floor(Math.random() * nmax)].rem;
		//measurements.push({ ind: measurements.length, measured });
		//measurements = measurements;
	}
</script>
