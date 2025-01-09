import { dirname, join } from 'node:path'
import type { StorybookConfig } from 'storybook-vue3-rsbuild'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config = {
  stories: [
    "../stories/*.mdx",
    "../stories/**/*.mdx",
    "../stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    "@storybook/addon-essentials", 
    "storybook-addon-rslib",
    '@storybook/addon-interactions',
  ],
  framework: {
    name: getAbsolutePath('storybook-vue3-rsbuild'),
    options: {},
  }, // 例如 storybook-react-rsbuild
  docs: {
    autodocs: 'tag',
  },

};

export default config;
