import { createApp } from "vue";

/**
 * @description loads all Plugins
 * @param { ReturnType<typeofcreateApp> } app An instance of the entire application
 * @visit https://vitejs.dev/guide/features.html#glob-import
 */
export default function loadAllPlugins(
	app: ReturnType<typeof createApp>
): void {
	const files = import.meta.glob("./*.ts");

	for (const path in files) {
		files[path]().then((mod) => {
			if (typeof files[path] === "function") {
				mod.default(app); // console.log(path, mod)
			}
		});
	}
}
