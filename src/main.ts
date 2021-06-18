import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import store from '@/store'
import { AppConfig } from '@/config/app'

import { loadAllPlugins } from '@/plugins'

// import './styles/antd.less'

/** Inject the global static configuration into the application, which can be read through this.a, which is more convenient than manual injection by provide and inject*/
const app: ReturnType<typeof createApp> = createApp(App)
app.config.globalProperties = AppConfig


/** Load all Plugins */
loadAllPlugins(app)

/** Load depen needs */
// app.use(store)
app.use(router)
app.mount('#app')
