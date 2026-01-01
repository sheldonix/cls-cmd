#!/usr/bin/env node
'use strict';

const cls = require('../src/index.js');
const pkg = require('../package.json');

const args = process.argv.slice(2);
const helpText = [
  `cls ${pkg.version}`,
  '',
  'Usage: cls [options]',
  '',
  'Options:',
  '  --keep-buf     Keep scrollback buffer',
  '  -h, --help     Show help',
  '  -v, --version  Show version',
].join('\n');

if (args.includes('--help') || args.includes('-h')) {
  console.log(helpText);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(`cls ${pkg.version}`);
  process.exit(0);
}

const allowed = new Set(['--keep-buf', '--help', '-h', '--version', '-v']);
const unknown = args.find((arg) => !allowed.has(arg));
if (unknown) {
  console.error(`Unknown option: ${unknown}`);
  console.error(helpText);
  process.exit(1);
}

const keepBuffer = args.includes('--keep-buf');
cls({ clearBuffer: !keepBuffer });
