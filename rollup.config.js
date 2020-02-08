const fs = require('fs');

import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import cjs from "rollup-plugin-cjs-es";

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const ver = "v" + pkg.version;
const urlVer = "https://github.com/josdejong/mathjs-expression-parser (" + ver + ")";
const banner = [
	"/**",
	"* Copyright (c) " + new Date().getFullYear() + ", Jos de Jong",
	"* All rights reserved. (MIT Licensed)",
	"*",
	"* mathjs-expression-parser",
	"* Just the expression parser of mathjs",
	"* " + urlVer,
	"*/",
	"",
].join("\n");

const stdCfg = 	{
	input: './index.js',
	output: {
		name: 'mathjs-expression-parser',
		file: './dist/mathjs-expression-parser.js',
		format: 'umd',
		esModule: false,
		banner,
	},
	plugins: [
		resolve(),
		cjs({nested: true}),
		buble({objectAssign: 'Object.assign'})
	]
};

const minCfg = 	{
	input: './index.js',
	output: {
		name: 'mathjs-expression-parser',
		file: './dist/mathjs-expression-parser.min.js',
		format: 'umd',
		esModule: false,
		banner: "/*! " + urlVer + " */",
	},
	plugins: [
		resolve(),
		cjs({nested: true}),
		buble({objectAssign: 'Object.assign'}),
		terser({
			compress: {
				inline: 0,
			//	passes: 3,
				keep_fargs: false,
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				unsafe_math: true,
				unsafe_undefined: true,
			},
			output: {
				comments: /^!/
			}
		}),
	]
};

export default [
	stdCfg,
	minCfg,
];