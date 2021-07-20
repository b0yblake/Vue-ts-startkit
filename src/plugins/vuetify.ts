import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

import "vuetify/lib/styles/main.sass";

const vuetify = createVuetify({
	components,
	directives,
});

/**
 * @description manually register the antd-vue component to achieve the purpose of on-demand loading
 * @description Automatically register components
 * @param { ReturnType<typeof createApp> } app An instance of the entire application
 * @returns void
 */

export default function loadComponent(app: any) {
	app.use(vuetify);
	// app.use(VCard);
}
