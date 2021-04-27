/** @type {import('@sveltejs/kit').Config} */
const adapter = require('@sveltejs/adapter-netlify');
module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		prerender: {
			crawl: true,
			pages: ['/blog']
		}
	}
};
