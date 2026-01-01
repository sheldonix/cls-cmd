const CLEAR_SEQUENCE = '\x1b[H\x1b[2J\x1b[3J';
const CLEAR_SCREEN_SEQUENCE = '\x1b[H\x1b[2J';

function cls(options = {}) {
  const out = options.stream || process.stdout;
  if (!out || !out.isTTY) {
    return false;
  }

  const clearBuffer = options.clearBuffer !== false;
  const sequence = clearBuffer ? CLEAR_SEQUENCE : CLEAR_SCREEN_SEQUENCE;
  out.write(sequence);
  return true;
}

export { cls, CLEAR_SEQUENCE, CLEAR_SCREEN_SEQUENCE };
export default cls;
