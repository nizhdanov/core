import base from './.prettierrc.base.mjs';

/** @type {import("prettier").Config} */
export default {
  ...base,
  tailwindFunctions: ['cn', 'cva', 'clsx'],
  plugins: ['prettier-plugin-tailwindcss']
};
