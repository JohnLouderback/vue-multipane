import alias from 'rollup-plugin-alias';
import VuePlugin from "rollup-plugin-vue";
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  name: "Multipane",
  input: "src/index.js",
  output: {
    file: "dist/vue-multipane.min.js",
    format: "umd",
  },
  sourcemaps: true,
  plugins: [
    alias({
      "@": "./",
    }),
    VuePlugin({
      css: true,
    }),
    buble(),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    uglify({}, minify),
  ],
};
