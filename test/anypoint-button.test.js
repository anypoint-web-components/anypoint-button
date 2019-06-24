import { fixture, assert, aTimeout } from '@open-wc/testing';
import { a11ySuite } from '@advanced-rest-client/a11y-suite/index.js';
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

  async function raisedFixture() {
    return (await fixture(`<anypoint-button raised theme="md">Button</anypoint-button>`));
  }

  async function togglesFixture() {
    return (await fixture(`<anypoint-button toggles raised theme="md">Button</anypoint-button>`));
  }

  async function noinkFixture() {
    return (await fixture(`<anypoint-button noink theme="md">Button</anypoint-button>`));
  }

  async function materialFixture() {
    return (await fixture(`<anypoint-button theme="md">Button</anypoint-button>`));
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

  describe('elevation states', () => {
    let element;
    beforeEach(async () => {
      element = await raisedFixture();
    });

    it('Normal state (no elevation)', async () => {
      element = await basicFixture();
      assert.equal(element.elevation, 0);
    });

    it('Has elevation when rised', () => {
      assert.equal(element.elevation, 1);
    });

    it('No elevation when disabled', () => {
      element.disabled = true;
      assert.equal(element.elevation, 0);
    });

    it('pressed and released', function() {
      MockInteractions.down(element);
      assert.equal(element.elevation, 4);
      MockInteractions.up(element);
      assert.equal(element.elevation, 1);
      assert.ok(element.hasRipple());
    });
  });

  describe('a button with toggles', function() {
    let element;
    beforeEach(async () => {
      element = await togglesFixture();
    });

    it('activated by click', function(done) {
      MockInteractions.downAndUp(element, function() {
        try {
          assert.equal(element.elevation, 4);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    it('receives focused', async () => {
      MockInteractions.focus(element);
      assert.equal(element.elevation, 3);
      assert.ok(element.hasRipple());
    });
  });

  describe('Ripple effect', function() {
    let element;

    it('Riple has noink set', async () => {
      element = await noinkFixture();
      MockInteractions.down(element);
      MockInteractions.up(element);
      const ripple = element.getRipple();
      assert.isTrue(ripple.noink);
    });

    it('Resetting noink shows ripple', async () => {
      element = await noinkFixture();
      element.noink = false;
      MockInteractions.down(element);
      MockInteractions.up(element);
      const ripple = element.getRipple();
      assert.isFalse(ripple.noink);
    });

    it('Space bar runs ripple', async () => {
      element = await materialFixture();
      MockInteractions.pressSpace(element);
      await aTimeout(40);
      const ripple = element.getRipple();
      assert.ok(ripple);
    });
  });
});
