import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'node:path'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import vue from '@vitejs/plugin-vue'
import type { ComponentResolver } from 'unplugin-vue-components'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		VueRouter({
			routesFolder: [
				{ src: 'src/pages', path: '' },
				// example page
				// { src: 'src/examples', path: 'examples/' },
			],
			importMode: 'async',
		}),

		AutoImport({
			imports: ['vue', VueRouterAutoImports],
			dts: 'src/auto-imports.d.ts',
			dirs: ['src/composables/**', 'src/store', 'src/utils'],
			vueTemplate: true,
		}),

		Components({
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
			extensions: ['vue', 'md'],
			dirs: ['src/components', 'src/layouts/components'],
			deep: true,
			dts: 'src/components.d.ts',
			directoryAsNamespace: true,
			resolvers: [
				{
					type: 'component',
					resolve: (name: string) => {
						if (['Footer', 'Header', 'Sidebar'].includes(name)) {
							return {
								name,
								from: `~/layouts/components/${name}.vue`
							}
						}
					}
				} as ComponentResolver
			]
		}),
	],
  css: {
		preprocessorOptions: {
		  scss: {
				api: 'modern',
				additionalData: '@use "~/styles/helpers/_variables.scss" as *;'
			},
		},
	  },
})
