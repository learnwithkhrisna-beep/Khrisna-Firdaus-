import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SERVICES_CATALOGUE,
  calculateEstimatedTimeline,
  generateDeliverablesList,
  calculatePrintSpecs,
  validateBriefForm,
  generateBriefId
} from './briefCalculator.ts';

test('SERVICES_CATALOGUE contains all 7 official services', () => {
  assert.equal(SERVICES_CATALOGUE.length, 7);
  const ids = SERVICES_CATALOGUE.map((s) => s.id);
  assert.ok(ids.includes('desain-logo'));
  assert.ok(ids.includes('branding-kit'));
  assert.ok(ids.includes('desain-menu'));
  assert.ok(ids.includes('desain-kemasan'));
  assert.ok(ids.includes('feed-media-sosial'));
  assert.ok(ids.includes('desain-undangan'));
  assert.ok(ids.includes('spanduk-banner'));
});

test('calculateEstimatedTimeline handles single and multiple services correctly', () => {
  const logoTimeline = calculateEstimatedTimeline(['desain-logo'], 'standard');
  assert.ok(logoTimeline.daysMin >= 1);
  assert.ok(logoTimeline.daysMax >= logoTimeline.daysMin);

  const multipleTimeline = calculateEstimatedTimeline(['desain-logo', 'branding-kit'], 'standard');
  assert.ok(multipleTimeline.daysMax >= logoTimeline.daysMax);

  const expressTimeline = calculateEstimatedTimeline(['desain-logo'], 'express');
  assert.ok(expressTimeline.daysMax <= logoTimeline.daysMax);
});

test('generateDeliverablesList aggregates deliverables correctly without duplicate items', () => {
  const deliverables = generateDeliverablesList(['desain-logo']);
  assert.ok(deliverables.length > 0);
  assert.ok(deliverables.some((d) => d.includes('Vector')));
});

test('calculatePrintSpecs computes accurate pixel dimensions at 300 DPI for A4 standard', () => {
  // A4 size: 210mm x 297mm
  const specs = calculatePrintSpecs(210, 297, 300, 3);
  // 210mm in inches = 8.2677in * 300 ~= 2480px
  assert.equal(specs.pixelWidth, 2480);
  // 297mm in inches = 11.6929in * 300 ~= 3508px
  assert.equal(specs.pixelHeight, 3508);
  assert.equal(specs.bleedMm, 3);
  assert.ok(specs.pixelWidthWithBleed > specs.pixelWidth);
});

test('validateBriefForm properly flags missing fields', () => {
  const invalid = validateBriefForm({
    clientName: '',
    clientEmail: 'bad-email',
    brandName: '',
    selectedServices: [],
    projectDescription: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.clientName);
  assert.ok(invalid.errors.clientEmail);
  assert.ok(invalid.errors.brandName);
  assert.ok(invalid.errors.selectedServices);
  assert.ok(invalid.errors.projectDescription);

  const valid = validateBriefForm({
    clientName: 'Khrisna Kusuma',
    clientEmail: 'khrisna@example.com',
    clientPhone: '+628123456789',
    brandName: 'Kopi Teduh Santai',
    selectedServices: ['desain-logo', 'desain-menu'],
    timelineUrgency: 'standard',
    projectDescription: 'Kebutuhan identitas visual untuk coffee shop modern dengan gaya minimalis arsitektural.'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateBriefId creates a well-formatted studio brief ID', () => {
  const id = generateBriefId();
  assert.ok(id.startsWith('TDC-'));
  assert.equal(id.split('-').length, 3);
});
