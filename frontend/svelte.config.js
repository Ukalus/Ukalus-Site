import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	
	kit: {
		adapter: adapter(),
		alias: {
			'src/*': './src',
		}
	},
	preprocess: vitePreprocess(),
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	  }
};

export default config;
