import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
// import store from '@/store'

/** Load style sheets */
import "@/assets/stylesheets/index.scss";

/** Load configs */
import { AppConfig } from "@/config/app";

/** Load all Plugins */
import loadAllPlugins from "@/plugins";

/** Inject the global static configuration into the application, which can be read through this.a, which is more convenient than manual injection by provide and inject */
const app: ReturnType<typeof createApp> = createApp(App);
app.config.globalProperties = AppConfig;

/** Run all Plugins  */
loadAllPlugins(app);

/** Load depen needs */
// app.use(store)

app.use(router);
app.mount("#app");
