import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		hmr: process.env.GITPOD_WORKSPACE_URL
			? {
				protocol: 'wss',
				clientPort: 443,
				host: process.env.GITPOD_WORKSPACE_URL.replace(
					'https://',
					'5173-',
				),
			}
			: true,
	}
});
