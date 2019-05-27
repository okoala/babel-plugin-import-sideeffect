# babel-plugin-import-sideeffect
add import sideEffect plugin for babel, work for antd.

# Example

`{"libraryName": "antd", "sideEffect", { "Button": "/projj/a/c/button.less" }}`
```js
import { Button } from 'antd';
      ↓ ↓ ↓ ↓ ↓ ↓
import { Button } from 'antd';
import '/projj/a/c/button.less';
```

# Usage

```shell
npm install babel-plugin-import-sideeffect --save-dev
```

Via `.babelrc` or babel-loader

```js
{
  "plugins": [["import-sideeffect", options]]
}
```


## Options

`sideEffect` can be object, each key would match import object where from libraryName.

```js
{
  "libraryName": "antd",
  "sideEffect": {}
}
```

`sideEffect` can be function, return your custom path.

```js
{
  "libraryName": "antd",
  "sideEffect": (name, file) => {}
}
```
