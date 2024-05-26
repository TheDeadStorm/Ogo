import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueDevTools(),
		UnoCSS({
			presets: [presetUno(), presetAttributify()],
			include: [
				'./index.html',
				'./src/**/*.{vue,js,ts,jsx,tsx}',
				'./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
			],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
