import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: true
		}),
		paths: {
			// change below to your repo name
			base: dev ? "" : "/qft-viz",
		},
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
			}
		}
	}
};
export default config;
