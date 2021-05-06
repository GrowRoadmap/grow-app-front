// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "Grow Roadmap",
  brandUrl: "https://github.com/GrowRoadmap",
  brandImage: "https://avatars.githubusercontent.com/u/83783141?s=200&v=4",
  colorPrimary: '#4427f1',
  colorSecondary: '#351ad3',

  // UI
  appBg: '#4427f1',
  appContentBg: '#FFF',
  appBorderColor: '#fff',
  appBorderRadius: 4,

  // Typography
  fontBase: '"rubik", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#e5e9f6',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#fff',
  barBg: '#2adf59',

  // Form colors
  inputBg: '#FFF',
  inputBorder: '#fff',
  inputTextColor: '#fff',
  inputBorderRadius: 4,
});
