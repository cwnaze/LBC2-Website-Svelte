import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to the file path equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	plugins: [sveltekit()],
	server: {
		https: {
			key: fs.readFileSync(path.resolve(__dirname, 'cert', 'localhost.key')),
			cert: fs.readFileSync(path.resolve(__dirname, 'cert', 'localhost.crt'))
		},
		port: 443 // You can change the port if needed
	}
});
