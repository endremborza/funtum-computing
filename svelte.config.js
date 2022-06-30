import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			optimizeDeps: {
			  include: [
				"fast-deep-equal",
				"clone",
				"semver",
				"json-stringify-pretty-compact",
				"fast-json-stable-stringify",
			  ],
			}
		}
	}
};
export default config;
