import path from 'path';
import pluginTester from 'babel-plugin-tester';
import importSideEffectPlugin from '../src/index';

pluginTester({
  plugin: importSideEffectPlugin,
  pluginOptions: {
    "libraryName": "antd",
    "sideEffect": {
      "Button": "./button.less",
      "Menu": "./menu.less",
      "DatePicker": "./datepicker.less",
    }
  },
  fixtures: path.join(__dirname, 'fixtures'),
})
