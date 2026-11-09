import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const directory = mkdtempSync(join(tmpdir(), 'portfolio-check-'));
try {
  const result = await build({
    entryPoints: ['tests/portfolio.test.tsx'],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"production"' },
    write: false,
  });
  const file = join(directory, 'portfolio.test.cjs');
  writeFileSync(file, result.outputFiles[0].contents);
  execFileSync(process.execPath, ['--test', file], { stdio: 'inherit' });
} finally {
  rmSync(directory, { recursive: true, force: true });
}
