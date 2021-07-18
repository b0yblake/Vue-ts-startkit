import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "/src"),
			},
			{ find: "~", replacement: resolve(__dirname, "/src") },
			// {find: 'views', replacement: resolve(__dirname, 'src/views')},
		],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/assets/stylesheets/_variables";
          @import "./src/assets/stylesheets/include-media";
        `,
			},
		},
	},
	base: "./", // Set the packaging path
	server: {
		port: 3000, // Set the service start port number
		open: true, // Set whether to automatically open the browser when the service starts
		cors: true,
	},
	plugins: [
		vue(),
		ViteComponents({
			// relative paths to the directory to search for components.
			dirs: ["src/components/global"],

			// valid file extensions for components.
			extensions: ["vue"],
			// search for subdirectories
			deep: true,

			// Allow subdirectories as namespace prefix for components.
			directoryAsNamespace: false,
			// Subdirectory paths for ignoring namespace prefixes
			// works when `directoryAsNamespace: true`
			globalNamespaces: [],
		}),
	],
});
