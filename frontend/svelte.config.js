import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	
	kit: {
		adapter: adapter({
			fallback: "index.html",
		}),
		alias: {
			'src/*': './src',
		}
	},
	preprocess:[ vitePreprocess({})],
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	  }
};

export default config;
