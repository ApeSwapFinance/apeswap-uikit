import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [
    postcss({
      modules: true,
      minimize: true
    }),
    typescript()
  ]
};
