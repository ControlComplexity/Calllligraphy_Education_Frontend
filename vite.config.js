//defineConfig 是助手函数,给vscode实现代码提示
import { defineConfig } from 'vite'
//vue的插件,让项目支持vue
import supportVue from '@vitejs/plugin-vue'
//path.resolve 是node.js的对象,用于解释返回真实全路径
import { resolve } from 'path'
//__dirname是系统变量,返回的是当前项目的目录
import viteCompression from 'vite-plugin-compression'

const currentSrcPath = resolve(__dirname, 'src')
const currentImagePath = resolve(__dirname, 'src/assets/image')
const currentAssetPath = resolve(__dirname, 'src/assets')
const currentComponentPath = resolve(__dirname, 'src/components')
const currentViewComponentPath = resolve(__dirname, 'src/views')

export default defineConfig({
	plugins: [supportVue(), viteCompression()],
	resolve: {
		alias: {
			'@': currentSrcPath,
			'@asset': currentAssetPath,
			'@image': currentImagePath,
			'@component': currentComponentPath,
			'@view': currentViewComponentPath
		}
	},
	productionSourceMap: false,
	productionGzip: true,
	optimizeDeps: {
		//include:[]
		inclue: ['axios', 'mockjs', 'lodash', 'echarts']
	},
	build: {
		assetsPublicPath: './',
		// target: 'modules',
		outDir: 'dist',
		assetsDir: 'static',
		// minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: false,
				drop_debugger: true,
			},
		},
		output: {
			comments: true,
		},
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				// assetFileNames: 'static/assets/[name]-[hash].[ext]',
			}
		}
	},

	server: {
		port: 3001,
		cors: true,
		open: false,
		proxy: {
			'/interface': {
				target: 'http://101.43.39.188:10000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/interface/, '')
			}
		}
	}
})
