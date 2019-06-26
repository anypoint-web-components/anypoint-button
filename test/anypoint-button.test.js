import { fixture, assert, aTimeout } from '@open-wc/testing';
import { a11ySuite } from '@advanced-rest-client/a11y-suite/index.js';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../anypoint-button.js';
import '@polymer/iron-test-helpers/mock-interactions.js';

/* global MockInteractions  */

describe('<anypoint-button>', function() {
  async function basicFixture() {
    return (await fixture(`<anypoint-button>Button</anypoint-button>`));
  }

  async function roleFixture() {
    return (await fixture(`<anypoint-button role="radiobutton">Button</anypoint-button>`));
  }

  async function tabindexFixture() {
    return (await fixture(`<anypoint-button tabindex="-1">Button</anypoint-button>`));
  }

  async function togglesFixture() {
    return (await fixture(`<anypoint-button toggles>Button</anypoint-button>`));
  }

  async function noinkFixture() {
    return (await fixture(`<anypoint-button noink>Button</anypoint-button>`));
  }

  async function highEmphasisFixture() {
    return (await fixture(`<anypoint-button emphasis="high">Button</anypoint-button>`));
  }

  describe('a11y', () => {
    a11ySuite('Normal button', `<anypoint-button>Button</anypoint-button>`);
    a11ySuite('Disabled button', `<anypoint-button disabled>Button</anypoint-button>`);

    it('Has role set', async () => {
      const element = await basicFixture();
      assert.equal(element.getAttribute('role'), 'button');
    });

    it('Respects existing role', async () => {
      const element = await roleFixture();
      assert.equal(element.getAttribute('role'), 'radiobutton');
    });

    it('Has tabindex set', async () => {
      const element = await basicFixture();
      assert.equal(element.getAttribute('tabindex'), '0');
    });

    it('Respects existing tabindex', async () => {
      const element = await tabindexFixture();
      assert.equal(element.getAttribute('tabindex'), '-1');
    });
  });

  describe('High emphasis state', () => {
    let element;
    beforeEach(async () => {
      element = await highEmphasisFixture();
    });

    it('Has elevation default elevation', () => {
      assert.equal(element.elevation, 1);
    });

    it('Has elevation when toggles and active', () => {
      element.toggles = true;
      element.active = true;
      assert.equal(element.elevation, 2);
    });

    it('pressed and released', function() {
      MockInteractions.down(element);
      assert.equal(element.elevation, 3);
      MockInteractions.up(element);
      assert.equal(element.elevation, 1);
    });
  });

  describe('Low emphasis state', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Has default elevation', () => {
      assert.equal(element.elevation, 0);
    });

    it('Has default emphasis', () => {
      assert.equal(element.emphasis, 'low');
    });
  });

  describe('A button with toggles', function() {
    let element;
    beforeEach(async () => {
      element = await togglesFixture();
      element.emphasis = 'high';
    });

    it('activated by click', function(done) {
      MockInteractions.downAndUp(element, function() {
        try {
          assert.equal(element.elevation, 2);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    it('receives focused', async () => {
      MockInteractions.focus(element);
      assert.equal(element.elevation, 1);
    });
  });

  describe('Ripple effect', function() {
    let element;

    it('Riple has noink set', async () => {
      element = await noinkFixture();
      MockInteractions.down(element);
      MockInteractions.up(element);
      const ripple = element.shadowRoot.querySelector('paper-ripple');
      assert.isTrue(ripple.noink);
    });

    it('Resetting noink shows ripple', async () => {
      element = await noinkFixture();
      element.noink = false;
      await aTimeout();
      element.noink = true;
      const ripple = element.shadowRoot.querySelector('paper-ripple');
      assert.isFalse(ripple.noink);
    });

    it('Space bar runs ripple', async () => {
      element = await highEmphasisFixture();
      MockInteractions.pressSpace(element);
      await aTimeout(40);
      const ripple = element.shadowRoot.querySelector('paper-ripple');
      assert.ok(ripple);
    });
  });

  describe('_spaceKeyDownHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _calculateElevation() when changing value', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._spaceKeyDownHandler(new CustomEvent('keydown'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });

    it('Calls uiDownAction() on ripple effect', () => {
      const spy = sinon.spy(element._ripple, 'uiDownAction');
      element._spaceKeyDownHandler(new CustomEvent('keydown'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });

    it('Won\'t call uiDownAction() on ripple when animating', () => {
      element._spaceKeyDownHandler(new CustomEvent('keydown'));
      const spy = sinon.spy(element._ripple, 'uiDownAction');
      element._spaceKeyDownHandler(new CustomEvent('keydown'));
      assert.isFalse(spy.called, 'Function called');
    });
  });

  describe('_spaceKeyUpHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _calculateElevation() when changing value', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._spaceKeyUpHandler(new CustomEvent('keyup'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });

    it('Calls uiUpAction() on ripple effect', () => {
      const spy = sinon.spy(element._ripple, 'uiUpAction');
      element._spaceKeyUpHandler(new CustomEvent('keyup'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });
  });
});
