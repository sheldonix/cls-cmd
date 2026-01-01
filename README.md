<div align="center">
# cls-cmd

**Cross-platform `cls` command to clear the terminal screen and the scrollback buffer**

[![npm version](https://img.shields.io/npm/v/cls-cmd.svg)](https://www.npmjs.com/package/cls-cmd)
[![npm downloads](https://img.shields.io/npm/dm/cls-cmd.svg)](https://www.npmjs.com/package/cls-cmd)
[![node version](https://img.shields.io/node/v/cls-cmd.svg)](https://www.npmjs.com/package/cls-cmd)
[![license](https://img.shields.io/npm/l/cls-cmd.svg)](./LICENSE)
</div>

## Features
- CLI commands: `cls` and `cls-cmd`
- TTY-aware: no output when the target stream is not a TTY
- Programmatic API with stream control
- CJS and ESM entry points

## Install
```bash
npm install -g cls-cmd
```

If you plan to use the API, install it locally in your project instead.
```bash
npm install cls-cmd
```

## Usage
```bash
cls [--keep-buf] [--help] [--version]
```

Options:
- `--keep-buf` - clear screen only, keep scrollback buffer
- `-h, --help` - show help
- `-v, --version` - show version

## API
```js
cls(options?: {
  clearBuffer?: boolean;
  stream?: NodeJS.WriteStream;
}): boolean
```

### Parameters
`options` is an object with the following fields:
- `clearBuffer?: boolean` - default `true`; set to `false` to keep scrollback buffer
- `stream?: NodeJS.WriteStream` - default `process.stdout`; use `process.stderr` to clear via stderr

### Examples
```js
// CommonJS
const cls = require('cls-cmd');

// or ESM
import cls from 'cls-cmd';

// keep scrollback buffer
cls({ clearBuffer: false });

// clear via stderr (useful when stdout is redirected)
cls({ stream: process.stderr });

cls();
```

### Return Value
`true` if the target stream is a TTY and the clear sequence was written, otherwise `false`.

### Exports
```js
const {
  cls,
  CLEAR_SEQUENCE,
  CLEAR_SCREEN_SEQUENCE
} = require('cls-cmd');
```

## Behavior Notes
- Uses ANSI escape sequences: `\x1b[H\x1b[2J\x1b[3J`
- If the target stream is not a TTY (`stream.isTTY !== true`), nothing is written
- `--keep-buf` or `clearBuffer: false` uses `\x1b[H\x1b[2J` (screen only)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

[![GitHub](https://img.shields.io/badge/Github-sheldonix%2Fcls--cmd-green?logo=github)](https://github.com/sheldonix/cls-cmd)

## License
[MIT](./LICENSE)
