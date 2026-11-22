'use strict';

const review = window.reviewContent;
const evidence = window.evidenceContent;
const byId = id => document.getElementById(id);
const format = value => Number(value).toFixed(2).replace('-', '−');
const interval = effect => format(effect.low) + ' to ' + format(effect.high);
const selectedFilter = byId('outcome-filter');
const tabs = [...document.querySelectorAll('#evidence-tabs [role="tab"]')];
const outcomes = evidence.outcomes;
let active = outcomes.find(outcome => outcome.analysis) || outcomes[0];
let view = 'forest';

function element(tag, attributes = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (value !== undefined && value !== null) node.setAttribute(key, value);
  }
  for (const child of children.flat()) if (child !== undefined && child !== null) node.append(child);
  return node;
}

function paragraph(text, className) {
  const p = element('p', {class: className});
  for (const [index, piece] of text.split(/\[\[([\d,]+)\]\]/g).entries()) {
    if (index % 2 === 0) {
      p.append(piece);
    } else {
      const superscript = element('sup', {class: 'citations'});
      for (const number of piece.split(',')) {
        if (superscript.childNodes.length) superscript.append(',');
        superscript.append(element('a', {href: '#ref-' + number, 'aria-label': 'Reference ' + number}, number));
      }
      p.append(superscript);
    }
  }
  return p;
}

function bindLink(id, href, label) {
  const link = byId(id);
  link.href = href;
  link.textContent = label;
}

function prepareLink(link, path) {
  const embedded = window.previewAssets?.[path];
  if (!embedded) return;
  const load = () => {
    if (!prepareLink.urls.has(path)) {
      const bytes = Uint8Array.from(atob(embedded.base64), char => char.charCodeAt(0));
      prepareLink.urls.set(path, URL.createObjectURL(new Blob([bytes], {type: embedded.type})));
    }
    return prepareLink.urls.get(path);
  };
  for (const name of ['focus', 'pointerdown', 'click', 'auxclick', 'contextmenu']) {
    link.addEventListener(name, () => { link.href = load(); }, {once:true});
  }
}
prepareLink.urls = new Map();

function documentItem(file, heading = 'h3') {
  const download = element('a', {href: file.file, download: file.file.split('/').at(-1), 'aria-label': 'Download ' + file.title}, 'Download');
  prepareLink(download, file.file);
  const actions = element('div', {class:'doc-actions'}, download);
  if (file.type === 'PDF') {
    const open = element('a', {href:file.file, target:'_blank', rel:'noopener', 'aria-label':'Open ' + file.title + ' PDF'}, 'Open PDF');
    prepareLink(open, file.file);
    actions.prepend(open);
  }
  return element('article', {class:'doc-item'},
    element('span', {class:'file-type'}, file.type),
    element(heading, {}, file.title), paragraph(file.description), actions);
}

function methodBlocks(items) {
  return items.map(([heading, description]) =>
    element('section', {}, element('h4', {}, heading), paragraph(description)));
}

function initializeReview() {
  byId('review-title').textContent = review.title;
  byId('hero-article-type').textContent = review.subtitle;
  byId('site-status').textContent = review.stage;
  byId('hero-summary').textContent = review.summary;
  byId('hero-scope').append(...review.scope.map(([label, value]) =>
    element('div', {}, element('dt', {}, label), element('dd', {}, value))));
  for (const id of ['hero-affiliation','author-affiliation']) byId(id).textContent = review.affiliation;
  byId('registered-date').textContent = 'Registered ' + review.registration.date;
  for (const [id, label] of [
    ['registry-hero', review.registration.id],
    ['registry-protocol', 'View PROSPERO record ' + review.registration.id],
    ['registry-footer', 'PROSPERO ' + review.registration.id]
  ]) bindLink(id, review.registration.url, label);

  byId('author-list').append(...review.authors.map(person =>
    element('li', {}, element('strong', {}, person.name),
      person.corresponding ? element('small', {}, 'Corresponding author') : null,
      person.email ? element('a', {href:'mailto:' + person.email}, person.email) : null)));
  byId('rationale').append(...review.rationale.map(text => paragraph(text)));
  byId('protocol-question').textContent = review.protocol.question;
  byId('pico').append(...review.protocol.pico.map(([name, details]) =>
    element('div', {}, element('dt', {}, name), element('dd', {}, details))));
  byId('protocol-methods').append(...methodBlocks(review.protocol.methods));
  byId('manuscript-version').textContent = review.manuscriptVersion;
  for (const section of review.manuscript) {
    byId('article-nav').append(element('a', {href:'#' + section.id}, section.title));
    const body = element('div', {class:'prose'},
      (section.paragraphs || []).map(text => paragraph(text)),
      section.items ? methodBlocks(section.items) : [],
      section.pending ? paragraph(section.pending, 'muted') : null);
    if (section.link) body.append(element('a', {href:section.link[0], class:'editorial-link'}, section.link[1]));
    byId('manuscript-content').append(element('section', {class:'manuscript-section', id:section.id},
      element('h3', {}, section.title), body));
  }
  for (const [index, [citation, source]] of review.references.entries()) {
    const link = source ? element('a', {href:source, 'aria-label':'Source for reference ' + (index + 1)}, source.includes('doi.org') ? 'DOI' : 'Source') : null;
    byId('reference-list').append(element('li', {id:'ref-' + (index + 1)}, citation, link));
  }
  for (const [citation, source] of review.analysisReferences) {
    byId('analysis-reference-list').append(element('li', {}, citation,
      element('a', {href:source}, source.includes('doi.org') ? 'DOI' : 'Source')));
  }
  const fileMap = new Map(review.documents.map(file => [file.id, file]));
  byId('protocol-download').append(documentItem(fileMap.get('protocol-pdf'), 'h4'));
  byId('manuscript-download').append(documentItem(fileMap.get('manuscript-pdf'), 'h3'));
  byId('download-grid').append(...review.documents.map(file => documentItem(file)));
  byId('supplement-downloads').append(...review.documents
    .filter(file => !['manuscript-pdf','protocol-pdf','prisma-pdf'].includes(file.id)).map(file => documentItem(file)));

  const imagePath = window.previewImage || review.prisma.image;
  const prismaImage = element('img', {src:imagePath, alt:review.prisma.alt, loading:'lazy', width:1688, height:1060});
  const zoom = element('button', {type:'button', class:'button secondary'}, 'Enlarge diagram');
  zoom.addEventListener('click', () => showFigure('Draft PRISMA 2020 flow diagram', element('img', {src:imagePath, alt:review.prisma.alt})));
  byId('prisma-figure').append(prismaImage, element('figcaption', {}, review.prisma.caption), zoom);

  for (const [name, query] of window.searchContent) {
    byId('search-queries').append(element('details', {class:'fold'},
      element('summary', {}, name), element('div', {class:'fold-body'}, element('div', {class:'query'}, query))));
  }
}

function showFigure(title, body) {
  const dialog = byId('figure-dialog');
  byId('figure-dialog-title').textContent = title;
  byId('figure-dialog-content').replaceChildren(body);
  dialog.showModal();
  byId('close-figure').focus();
}

function table(headers, rows, label) {
  const thead = element('thead', {}, element('tr', {}, headers.map(label => element('th', {scope:'col'}, label))));
  const tbody = element('tbody', {}, rows.map(row => element('tr', {}, row.map((value, index) =>
    element(index === 0 ? 'th' : 'td', index === 0 ? {scope:'row'} : {}, value)))));
  return element('div', {class:'table-wrap', tabindex:'0', role:'region', 'aria-label':label},
    element('table', {}, thead, tbody));
}

function gradeBadge(rating) {
  if (!rating) return element('span', {class:'muted'}, 'Pending');
  const count = {'High':4, 'Moderate':3, 'Low':2, 'Very low':1}[rating] ?? 0;
  return element('span', {class:'grade-mark'},
    element('span', {class:'dots', 'aria-hidden':'true'}, '●'.repeat(count) + '○'.repeat(4 - count)), rating);
}

function drawForest(outcome, analysis, expandable) {
  const ratio = outcome.measure === 'RR';
  const favorsInterventionOnRight = outcome.favorsInterventionOnRight ?? (ratio && outcome.category !== 'Safety');
  const baseline = ratio ? 1 : 0;
  const all = [...analysis.studies, {name:'Pooled estimate', ...analysis}];
  const linear = value => ratio ? Math.log(value) : value;
  const points = all.flatMap(study => [linear(study.effect.low), linear(study.effect.high)]);
  const lower = Math.min(linear(baseline), ...points);
  const upper = Math.max(linear(baseline), ...points);
  const span = upper - lower || 1;
  const position = number => 7 + 86 * (linear(number) - lower) / span;
  const css = number => number.toFixed(3) + '%';
  const marks = ratio ? [.0625,.125,.25,.5,1,2,4,8,16,32,64].filter(x => position(x) >= 0 && position(x) <= 100) :
    Array.from({length:5}, (_, i) => Math.round((lower + span * i / 4) * 10) / 10);
  const frame = element('div', {class:'plot-frame'});
  for (const [index, study] of all.entries()) {
    const pool = index === all.length - 1;
    const {low, high, value} = study.effect;
    const lo = position(low);
    const hi = position(high);
    const point = position(value);
    const weight = pool ? 0 : study.weight ?? 0;
    const track = element('span', {class:'forest-track', 'aria-hidden':'true',
      style:'--null:' + css(position(baseline)) + ';--left:' + css(lo) + ';--range:' + css(hi - lo) +
      ';--point:' + css(point) + ';--weight:' + (5 + Math.sqrt(weight)).toFixed(1) + 'px;--diamond:' + css(100 * (point - lo) / (hi - lo || 1))},
    element('i', {class:'ci-line'}), element('i', {class:'ci-point'}));
    frame.append(element('div',{class:'forest-row' + (pool ? ' pooled' : '')},
      element('span',{}, study.name), track,
      element('span',{class:'forest-value'}, format(value), element('small',{}, interval(study.effect)))));
  }
  const axis = element('div', {class:'forest-axis', 'aria-hidden':'true'}, element('span'),
    element('div', {class:'axis-track'}, marks.map(tick => element('span', {style:'--tick:' + css(position(tick))}, String(tick).replace('-', '−')))),
    element('span', {class:'forest-value'}, outcome.measure + ' (95% CI)'));
  frame.append(axis);
  frame.append(element('div', {class:'plot-directions', 'aria-hidden':'true'},
    element('span', {}, favorsInterventionOnRight ? 'Favours placebo' : 'Favours anti-CGRP'),
    element('span', {}, favorsInterventionOnRight ? 'Favours anti-CGRP' : 'Favours placebo')));
  const heading = element('div', {class:'plot-heading'}, paragraph('Study estimates and 95% confidence intervals'));
  if (expandable) {
    const button = element('button', {type:'button', class:'button secondary'}, 'Enlarge plot');
    button.addEventListener('click', () => showFigure(outcome.title + ' · ' + outcome.time, drawForest(outcome, analysis, false)));
    heading.append(button);
  }
  return element('figure', {class:'plot-figure'}, heading, frame,
    element('figcaption', {}, analysis.model + ' · I² ' + analysis.i2 + '% · ' + analysis.studies.length + ' studies · ' + analysis.n + ' participants. Squares represent study estimates and their size represents weight. The diamond shows the pooled estimate and interval.' +
      (ratio ? ' The risk ratio axis is logarithmic.' : ' The difference axis is linear.')));
}

function studyData(outcome, analysis) {
  const headers = ['Study', 'Anti-CGRP', 'Placebo', 'Estimate (95% CI)', 'Weight', 'Overall RoB 2'];
  const group = (n, events) => events === null ? 'n = ' + n : events + '/' + n;
  return table(headers, analysis.studies.map(study => [
    study.name, group(study.active, study.activeEvents), group(study.control, study.controlEvents),
    element('span', {class:'number'}, format(study.effect.value) + ' (' + interval(study.effect) + ')'),
    study.weight.toFixed(1) + '%', study.risk
  ]), outcome.title + ' study estimates');
}

function renderEvidenceView(outcome) {
  const target = byId('evidence-view');
  const analysis = outcome.analysis;
  for (const tab of tabs) {
    const selected = view === tab.dataset.view;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  target.setAttribute('aria-labelledby', 'tab-' + view);
  target.replaceChildren();
  if (view === 'grade') {
    target.append(element('h4', {}, 'Certainty of evidence'), gradeBadge(outcome.grade.rating), paragraph(outcome.grade.note));
    if (outcome.absolute) {
      target.append(table(['Placebo risk', 'Estimated risk with anti-CGRP', 'Difference (95% CI)'],
        [[outcome.absolute.control, outcome.absolute.intervention, outcome.absolute.difference]], 'Absolute effects per 1,000 participants'));
    }
  } else if (!analysis) {
    target.append(paragraph(outcome.pending, 'muted'));
  } else if (view === 'forest') {
    target.append(drawForest(outcome, analysis, true));
  } else if (view === 'study') {
    target.append(studyData(outcome, analysis));
    target.append(paragraph('Group counts are the numbers analyzed. For dichotomous outcomes, they are shown as events/participants. RoB 2 judgments are outcome-specific.', 'method-note'));
  } else if (outcome.sensitivity) {
    const alt = outcome.sensitivity;
    target.append(paragraph('The MIDAS sensitivity analysis repeats the synthesis using a random-effects model. Both models use the same study data and population.'), table(
      ['Model','Estimate (95% CI)','I²','Participants'],
      [analysis,alt].map(a => [a.model, outcome.measure + ' ' + format(a.effect.value) + ' (' + interval(a.effect) + ')', a.i2 + '%', String(a.n)]),
      'Sensitivity analysis by model'));
    target.append(drawForest(outcome, alt, true));
  } else {
    target.append(paragraph('No separate sensitivity analysis for this outcome is documented in the available RevMan export.', 'muted'));
  }
}

function renderOutcomeList(restoreFocus = false) {
  const shown = outcomes.filter(item => selectedFilter.value === 'All' || item.category === selectedFilter.value);
  byId('outcome-list').replaceChildren(...shown.map(item => {
    const button = element('button', {type:'button', 'aria-pressed':String(item === active), 'aria-controls':'outcome-header evidence-view', 'data-outcome':item.id},
      item.title, element('span', {class:'outcome-time'}, item.time));
    button.addEventListener('click', () => selectOutcome(item.id, {restoreFocus:true}));
    return button;
  }));
  if (restoreFocus) byId('outcome-list').querySelector('[aria-pressed="true"]')?.focus();
}

function selectOutcome(id, {restoreFocus = false, resetFilter = false} = {}) {
  const outcome = outcomes.find(item => item.id === id);
  if (!outcome) return;
  active = outcome;
  view = 'forest';
  if (resetFilter) selectedFilter.value = 'All';
  renderOutcomeList(restoreFocus);
  const {title, category, time, description, analysis, population} = outcome;
  const effectDisplay = analysis ? element('div', {class:'effect-strip'},
    element('strong', {}, outcome.measure + ' ' + format(analysis.effect.value) + (outcome.unit ? ' ' + outcome.unit : '')),
    element('span', {}, '95% CI ' + interval(analysis.effect)), element('span', {}, population)) : null;
  byId('outcome-header').replaceChildren(paragraph(category + ' · ' + time, 'eyebrow'),
    element('h3', {id:'outcome-title'}, title), paragraph(description), effectDisplay);
  renderEvidenceView(outcome);
}

function initializeEvidence() {
  const categories = ['All', ...new Set(outcomes.map(item => item.category))];
  selectedFilter.replaceChildren(...categories.map(key => element('option', {value:key}, key === 'All' ? 'All outcomes' : key)));
  byId('evidence-description').textContent = review.evidenceDescription;
  byId('evidence-notice').append(element('strong', {}, review.evidenceStatus + '. '), review.evidenceNotice);
  selectedFilter.addEventListener('change', () => {
    const shown = outcomes.filter(item => selectedFilter.value === 'All' || item.category === selectedFilter.value);
    selectOutcome(shown.includes(active) ? active.id : shown[0].id);
  });
  for (const [index, tab] of tabs.entries()) {
    const activate = button => { view = button.dataset.view; renderEvidenceView(active); };
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      const keyboardTargets = {ArrowRight:(index + 1) % tabs.length, ArrowLeft:(index + tabs.length - 1) % tabs.length, Home:0, End:tabs.length - 1};
      if (!(event.key in keyboardTargets)) return;
      event.preventDefault();
      const next = tabs[keyboardTargets[event.key]];
      activate(next);
      next.focus();
    });
  }
  for (const id of ['mmd-change','response-50','hit-6']) {
    const item = outcomes.find(outcome => outcome.id === id && outcome.analysis);
    if (!item) continue;
    const a = item.analysis;
    const link = element('a', {href:'#evidence'}, element('span', {class:'snapshot-title'}, item.title),
      element('b', {}, item.measure + ' ' + format(a.effect.value)), element('small', {}, [item.time, review.estimateStatus].filter(Boolean).join(' · ')));
    link.addEventListener('click', () => selectOutcome(item.id, {resetFilter:true}));
    byId('snapshot').append(link);
  }
  byId('findings-table').append(table(['Outcome','Time point','Effect (95% CI)','Participants','GRADE'],
    outcomes.map(item => {
      const a = item.analysis;
      return [element('a', {href:'#evidence', 'data-select':item.id}, item.title), item.time,
        a ? element('span', {class:'number'}, item.measure + ' ' + format(a.effect.value) + ' (' + interval(a.effect) + ')') : 'Under review',
        a ? String(a.n) + ' (' + a.studies.length + ' trials)' : 'Under review', gradeBadge(item.grade.rating)];
    }), 'Summary of findings'));
  byId('findings-table').addEventListener('click', event => {
    const link = event.target.closest('[data-select]');
    if (link) selectOutcome(link.dataset.select, {resetFilter:true});
  });
  byId('trial-table').append(paragraph('Trial-level characteristics from the RevMan study information export. The populations used in each synthesis are listed with the outcome.', 'muted'),
    table(['Trial','Drug','Design and controlled follow-up','Registry'],
      evidence.trials.map(trial => [
        element('a', {href:'https://doi.org/' + trial.doi}, trial.name), trial.drug,
        trial.design + ' · ' + trial.period, element('a', {href:'https://clinicaltrials.gov/study/' + trial.registry}, trial.registry)
      ]), 'Trial characteristics'));
  byId('availability').append(...evidence.pendingOutcomes.map(text => element('li', {}, text)));
  selectOutcome(active.id);
}

function initializeNavigation() {
  const toggle = byId('menu-toggle');
  const nav = byId('navigation');
  const links = [...nav.querySelectorAll('a')];
  toggle.hidden = false;
  const setOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  };
  const markLocation = () => {
    const hash = location.hash || '#overview';
    const section = document.getElementById(hash.slice(1))?.closest('main > section');
    for (const link of links) {
      if (link.hash === '#' + section?.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') === 'false'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.querySelector('.masthead').addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener('hashchange', markLocation);
  byId('close-figure').addEventListener('click', () => byId('figure-dialog').close());
  markLocation();
}

initializeReview();
initializeEvidence();
initializeNavigation();
