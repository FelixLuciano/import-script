# import-script
Import text files as modules 📦

### WARNING
[`URL.createObjectURL`](mod.ts#L5) Not implemented! (Deno 1.7.1)

### Usage
```js
import importScript from "https://deno.land/x/import_script@0.0.3/mod.ts"

const { myScript } = await importScript("https://gist.github.com/Username/Gist-ID/.../.js")
```

### Credits
[@7cc](https://gist.github.com/7cc) with [importFromGist.js](https://gist.github.com/7cc/3eeea9a8eb37dbc03dc43b190bdde899)

### License
[MIT](https://github.com/FelixLuciano/import-script/blob/main/LICENSE)
