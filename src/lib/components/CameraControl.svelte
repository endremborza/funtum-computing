<script lang="ts">
	import { pi } from 'mathjs';
	import { browser } from '$app/env';
	import { coordsFromPolar, polarFromCoords } from '../qmath';
	import type { Coords3D, Coords2D } from '../qmath';

	export let cameraPosition: Coords3D = { x: 2.5, y: 0.25, z: 0.2 };
	export let minX = 1;
	export let polar = false;
	export let controlHeight = 300;
	export let controlWidth = 300;
	export let viewBox = '-5 -5 10 10';

	let cameraPolar = polarFromCoords(cameraPosition);
	let cSize = 0.5;
	let minSize = 0.2;

	let resolution = (cSize - minSize) / ((polar ? cameraPolar.r : cameraPosition.x) - minX);

	let cx = polar ? (((cameraPolar.phi + 3 * pi) % (2 * pi)) / (2 * pi)) * 10 - 5 : cameraPosition.y; // TODO: scaling
	let cy = polar ? (cameraPolar.theta / pi) * 10 - 5 : -cameraPosition.z;

	let handleDrag = (e: MouseEvent) => {};

	function wheelChange(e: WheelEvent) {
		let sizeChange = e.wheelDeltaY / 1200;
		cSize = Math.max(cSize + sizeChange, minSize);
		return sizeChange / resolution;
	}

	function dragChange(e: MouseEvent): Coords2D {
		let newX = e.offsetX / controlWidth;
		let newY = e.offsetY / controlHeight;
		cx = newX * 10 - 5;
		cy = newY * 10 - 5;
		return { x: newX, y: newY };
	}

	function coordDrag(e: MouseEvent) {
		let newCoords = dragChange(e);
		cameraPosition.y = newCoords.x * 10 - 5;
		cameraPosition.z = (1 - newCoords.y) * 10 - 5;
	}

	function polarDrag(e: MouseEvent) {
		let newCoords = dragChange(e);
		cameraPolar.phi = newCoords.x * 2 * pi - pi;
		cameraPolar.theta = newCoords.y * pi;
		cameraPosition = coordsFromPolar(cameraPolar);
	}

	function polarRoll(e: WheelEvent) {
		cameraPolar.r = Math.max(cameraPolar.r + wheelChange(e), minX);
		cameraPosition = coordsFromPolar(cameraPolar);
	}

	function coordRoll(e: WheelEvent) {
		cameraPosition.x = Math.max(cameraPosition.x + wheelChange(e), minX);
	}

	function dragOn() {
		handleDrag = polar ? polarDrag : coordDrag;
	}

	function dragOff() {
		handleDrag = () => {};
	}

	let handleWheel = polar ? polarRoll : coordRoll;

	let disabledScroll = false;
	$: if (browser) document.body.classList.toggle('scroll-lock', disabledScroll);
</script>

<svg
	height={controlHeight}
	width={controlWidth}
	{viewBox}
	on:mouseenter={() => {
		disabledScroll = true;
	}}
	on:mouseleave={() => {
		disabledScroll = false;
	}}
	on:mousemove={handleDrag}
	on:mousedown={dragOn}
	on:mouseup={dragOff}
	on:mouseleave={dragOff}
	on:wheel={handleWheel}
>
	<slot>
		<circle on:mousedown={dragOn} {cx} {cy} r={cSize} />
	</slot>
</svg>

<style>
	svg {
		border: #ff3e00;
		border-width: 0.1rem;
		border-style: solid;
	}
	circle {
		fill: #ff3e00;
	}
</style>
