/**
 * Jednokratno: izdvaja data URI iz Cursor agent-transcript JSONL retka i piše logo.jpg.
 * npm run import-logo -- <putanja-do.jsonl>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/brand/logo.jpg');

const transcriptPath = process.argv[2];
if (!transcriptPath) {
  console.error('Usage: node import-logo-from-transcript.mjs <path-to.jsonl>');
  process.exit(1);
}

const lines = fs.readFileSync(transcriptPath, 'utf8').split(/\r?\n/);
const line = lines.find((l) => l.includes('data:image/jpeg;base64,'));
if (!line) {
  console.error('No data:image/jpeg;base64, in file');
  process.exit(1);
}

const row = JSON.parse(line);
const text = row.message?.content?.[0]?.text ?? '';
const prefix = 'data:image/jpeg;base64,';
const i = text.indexOf(prefix);
if (i === -1) {
  console.error('Prefix not found');
  process.exit(1);
}

let raw = text.slice(i + prefix.length);
const cut = raw.indexOf('  možete');
if (cut !== -1) raw = raw.slice(0, cut);
raw = raw.replace(/<\/user_query>\s*$/i, '').trim();

const buf = Buffer.from(raw, 'base64');
if (buf.length < 100) {
  console.error('Decoded buffer too small, bad base64?');
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, buf);
console.log('Wrote', outPath, `(${buf.length} bytes)`);
