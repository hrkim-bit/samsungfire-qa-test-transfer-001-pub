const NAME_RE = /^[a-zA-Z][a-zA-Z0-9_-]{0,30}$/;

function isPositiveInt(value) {
  if (typeof value !== 'string' && typeof value !== 'number') return false;
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}

function sanitizeName(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return NAME_RE.test(trimmed) ? trimmed : null;
}

module.exports = { isPositiveInt, sanitizeName };
