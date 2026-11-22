import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script, createContext} from 'node:vm';

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const read = path => readFileSync(join(root, path), 'utf8');
const globals = createContext({window:{}});
for (const name of ['review','outcomes','search']) {
  new Script(read('content/' + name + '.js'), {filename:name + '.js'}).runInContext(globals);
}
const {reviewContent:review, evidenceContent:evidence, searchContent:searches} = globals.window;
new Script(read('assets/review.js'), {filename:'review.js'});
const html = read('index.html');
const anchors = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const contentIds = [...anchors, ...review.manuscript.map(section => section.id),
  ...review.references.map((_, index) => 'ref-' + (index + 1)), 'outcome-title'];
assert.equal(new Set(contentIds).size, contentIds.length, 'Duplicate section identifier');
for (const [, path] of html.matchAll(/\s(?:src|href)="([^"]+)"/g)) {
  if (path.startsWith('#')) assert(contentIds.includes(path.slice(1)), 'Invalid anchor ' + path);
  else assert(existsSync(join(root, path)), 'Missing resource ' + path);
}
assert(existsSync(join(root, review.prisma.image)), 'Missing PRISMA source');
assert(existsSync(join(root, '.nojekyll')), 'Missing GitHub Pages marker');
for (const file of review.documents) {
  assert(existsSync(join(root, file.file)), 'Missing document ' + file.file);
  assert(readFileSync(join(root, file.file)).length > 0, 'Empty document ' + file.file);
}
for (const [citation, url] of [...review.references, ...review.analysisReferences]) {
  assert(citation.trim(), 'Empty citation');
  assert.equal(new URL(url).protocol, 'https:');
}
assert.equal(new URL(review.registration.url).pathname.split('/').at(-1), review.registration.id);
const usedReferences = JSON.stringify([review.rationale,review.manuscript]).matchAll(/\[\[([\d,]+)\]\]/g);
for (const [, list] of usedReferences) for (const index of list.split(',')) {
  assert(review.references[Number(index) - 1], 'Citation without reference ' + index);
}
assert.equal(searches.length, 4, 'Expected four database queries');
assert.equal(new Set(evidence.outcomes.map(item => item.id)).size, evidence.outcomes.length, 'Duplicate outcome identifier');
for (const outcome of evidence.outcomes) {
  assert(outcome.title && outcome.category && outcome.time);
  if (!outcome.analysis) {
    assert(outcome.pending && outcome.grade?.note, 'Missing reason for pending outcome');
    continue;
  }
  assert(['RR','MD','SMD'].includes(outcome.measure), 'Unexpected measure');
  for (const analysis of [outcome.analysis, outcome.sensitivity].filter(Boolean)) {
    const n = analysis.studies.reduce((total, study) => total + study.active + study.control, 0);
    const weights = analysis.studies.reduce((total, study) => total + study.weight, 0);
    assert.equal(n, analysis.n, 'Inconsistent participant count for ' + outcome.id);
    assert(Math.abs(weights - 100) <= analysis.studies.length * .05 + .001, 'Inconsistent weights for ' + outcome.id);
    assert(analysis.i2 >= 0 && analysis.i2 <= 100);
    for (const {effect} of [analysis, ...analysis.studies]) {
      assert(Object.values(effect).every(Number.isFinite), 'Invalid estimate or interval');
      assert(effect.low <= effect.value && effect.value <= effect.high, 'Interval excludes estimate');
      if (outcome.measure === 'RR') assert(effect.low > 0, 'Risk ratio bound must be positive');
    }
  }
}
console.log('Validated ' + evidence.outcomes.length + ' outcomes, ' + review.documents.length +
  ' downloads, ' + review.references.length + ' manuscript references, and all static page links.');
