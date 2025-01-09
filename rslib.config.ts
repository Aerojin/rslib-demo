import { pluginVue } from "@rsbuild/plugin-vue";
import { defineConfig } from '@rslib/core';

export default defineConfig({

  lib: [
    {
      bundle: true,
      dts: false,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    externals: {
      // vue: "Vue",
    },
  },
  plugins: [pluginVue()],
});
