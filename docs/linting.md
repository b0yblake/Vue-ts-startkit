<h1 align="center">Linting</h1>

`BEFENIT`

- Solve the problem of poor readability and poor maintainability caused by irregular code between teams.
- Solve the problem of inconsistent coding standards caused by different devs of team members.
- Find code style problems in advance, give corresponding specifications prompts, and fix them in time.
- Reduce the repeated modification process in the code review process and save time.
- Automatic formatting, unified coding style, say goodbye to dirty and messy code.

### EditorConfig

- http://editorconfig.org
- Sync convention between idea now is simple by using editorconfig
- Go to `VisualStudioCode` -> `Extendsion` -> `editorconfig`

1. Create file `.editorconfig`

```
# Editor configuration, see http://editorconfig.org

# top-most EditorConfig file
root = true

[*] # All files was applied
charset = utf-8
indent_style = tab # Indentation style（tab | space）
indent_size = 2
end_of_line = lf # Control line break type(lf | cr | crlf)
trim_trailing_whitespace = true # Remove any blank characters at the beginning of the line
insert_final_newline = true # Always insert a new line at the end of the file

[*.md] # *.md
max_line_length = off
trim_trailing_whitespace = false
```

### Prettier

- https://prettier.io/
- Prettier is a powerful code formatting tool. Basically, it can handle all file formats that can be used in the front end. It is the most popular code formatting tool at the moment.

1. Install

> npm i prettier -D
> npm install --save-dev eslint-plugin-prettier

2. Create profile convention for prettier

- Prettier supports file type JSON/JSON5 | JS | TS | YML/YAML | TOML (https://prettier.io/docs/en/configuration.html)
- Normally, file `prettier.config.js or .prettierrc.js` was placed in root directory

```
module.exports = {
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 88,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false,
  "vueIndentScriptAndStyle": true
}
```

3. Simple run
   > npx prettier --write .

### ESLint

- https://eslint.org/
- ESLint is a tool for finding and reporting problems in the code, and supports automatic repair of some problems
-

1. Install

> npm i eslint -D
