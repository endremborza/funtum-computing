import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { string } from 'rollup-plugin-string';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			//ssr: {
			//	noExternal: ['vega-embed']
			//},
			optimizeDeps: {
				include: [
					"fast-deep-equal",
					"clone",
					"semver",
					"json-stringify-pretty-compact",
					"fast-json-stable-stringify",
				],
			},
			plugins: [
				//...
				string({
					include: ['**/*.md', '**/*.html']
				})
				//...
			]

		},
	}
};
export default config;
