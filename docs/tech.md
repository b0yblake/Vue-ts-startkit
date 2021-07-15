<h1 align="center">Vite tooling</h1>

### Next Generation Frontend Tooling

- https://vitejs.dev/guide/why.html
- https://github.com/vitejs/awesome-vite
- https://vitejs.dev/config/

### New features of vite uses `vite.config.js`

<details>
<summary>Declare the path "@" instead of "/src"</summary><br>

```
alias: [{find: "@", replacement: path.resolve(__dirname, '/src')}
```

</details>

<details>
<summary>Declare the path of variable source to use variable in style tag in components</summary><br>

```
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @import "./src/assets/stylesheets/_variables";
        @import "./src/assets/stylesheets/include-media";
      `
    }
  }
}
```

</details>

<details>
<summary>Instead of import single files, we had new feature to import multiple modules</summary><br>

- https://vitejs.dev/guide/features.html#glob-import

```

```

</details>

<details>
<summary>Customize field line in `vite.config.js`</summary><br>

```
// File `.env.production`
VITE_NAME=Wheatgrass
VITE_PORT=8080

// File `vite.config.js`
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [vue()],

    server: {
      port: process.env.VITE_PORT,
    },
  });
}
```

</details>
