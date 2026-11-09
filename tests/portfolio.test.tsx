import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import { referenceProjects, technologies } from '../src/data/reference';
import activity from '../src/data/activity.json';
import { certifications, experiences } from '../src/data/portfolio';

function render(path: string) {
  return renderToStaticMarkup(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
}

test('all portfolio routes render complete, accessible content with local assets', () => {
  const home = render('/');
  const projects = render('/projects');
  const experience = render('/experience');
  const contact = render('/contact');

  assert.equal((home.match(/class="reference-project /g) || []).length, 4);
  assert.equal((projects.match(/class="reference-project /g) || []).length, referenceProjects.length);
  assert.equal((experience.match(/class="contribution"/g) || []).length, experiences.length);
  for (const item of experiences) assert.ok(experience.includes(item.company.replaceAll('&', '&amp;').replaceAll("'", '&#x27;')));
  for (const item of certifications) assert.ok(experience.includes(item.issuer));
  assert.equal((home.match(/class="tech-chip"/g) || []).length, technologies.length);
  assert.match(contact, /type="email"/);
  assert.equal((contact.match(/required=""/g) || []).length, 3);
  assert.match(render('/missing'), /Page not found/);

  for (const html of [home, projects, experience, contact]) {
    assert.match(html, /id="main"/);
    assert.match(html, /Anest/);
    assert.doesNotMatch(html, /Samiran|Sam721166|samirande_|sam\.de\.721166|timmo\.co|Excalidraw|Guillermo|7506/);
    assert.match(html, /aria-label="Main navigation"/);
    assert.match(html, /Switch to light mode/);
    assert.doesNotMatch(html, /href="\/(?:blogs|books|favourites)"/);
    for (const [, src] of html.matchAll(/src="([^"]+)"/g)) {
      if (src.startsWith('/')) assert.ok(existsSync(`public${src}`), `Missing image: ${src}`);
      else assert.ok(src.startsWith('https://cdn.dribbble.com/'));
    }
    for (const [, href] of html.matchAll(/href="(\/[^"#]*)"/g)) {
      assert.ok(['/', '/projects', '/experience', '/contact'].includes(href) || href.startsWith('/reference/'), `Broken route: ${href}`);
    }
  }

  for (const project of referenceProjects) {
    if (project.url) assert.equal(new URL(project.url).protocol, 'https:');
    if (project.image) assert.ok(existsSync(`public${project.image}`));
  }
  for (const font of ['inter', 'inter-italic', 'instrument-serif']) {
    assert.equal(readFileSync(`public/reference/${font}.woff2`).subarray(0, 4).toString(), 'wOF2');
  }
  assert.equal(activity.reduce((sum, day) => sum + day.count, 0), 1751);
  assert.ok(readFileSync('src/pages/Contact.tsx', 'utf8').includes('mailto:anestpetollari44@gmail.com'));
  assert.match(home, /calendar.app.google/);
  assert.equal(new Set(activity.map(day => day.date)).size, activity.length);
  assert.ok(activity.every(day => day.level >= 0 && day.level <= 4));
  assert.ok(activity.length >= 365);
});
