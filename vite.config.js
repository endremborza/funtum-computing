import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: [
			"fast-deep-equal",
			"semver",
			"fast-json-stable-stringify",
		],
	}

};

export default config;
