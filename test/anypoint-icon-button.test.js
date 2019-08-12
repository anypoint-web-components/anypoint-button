import { fixture, assert, aTimeout } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../anypoint-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import '@polymer/iron-test-helpers/mock-interactions.js';

/* global MockInteractions  */

describe('<anypoint-icon-button>', function() {
  async function basicFixture() {
    return (await fixture(`<anypoint-icon-button>
      <button>
        <iron-icon icon="alarm-add"></iron-icon>
      </button>
    </anypoint-icon-button>`));
  }

  async function noinkFixture() {
    return (await fixture(`<anypoint-icon-button noink>
      <button>
        <iron-icon icon="alarm-add"></iron-icon>
      </button>
    </anypoint-icon-button>`));
  }

  async function nobuttonFixture() {
    return (await fixture(`<anypoint-icon-button noink>
    </anypoint-icon-button>`));
  }

  describe('Basics', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Sets _rippleContainer to the button', () => {
      assert.equal(element._rippleContainer.nodeName, 'BUTTON');
    });

    it('Creates ripple inside the button', async () => {
      MockInteractions.down(element);
      await aTimeout(40);
      const node = element._rippleContainer.querySelector('paper-ripple');
      assert.ok(node);
    });

    it('noink property is passed to the ripple', () => {
      element.noink = true;
      element._ensureRipple();
      const node = element._rippleContainer.querySelector('paper-ripple');
      assert.isTrue(node.noink);
    });
  });

  describe('No button in the DOM', () => {
    it('_roppleContainer is not set', async () => {
      const element = await nobuttonFixture();
      element._ensureRipple();
      assert.isUndefined(element._rippleContainer);
    });
  });

  describe('No ink', () => {
    let element;
    beforeEach(async () => {
      element = await noinkFixture();
    });

    it('Sets value', () => {
      element.noink = false;
      assert.isFalse(element._noink);
    });

    it('Calls _noinkChanged() when changing value', () => {
      const spy = sinon.spy(element, '_noinkChanged');
      element.noink = false;
      assert.isTrue(spy.calledOnce, 'Function called');
    });

    it('Ignores _noinkChanged() when not changing value', () => {
      const spy = sinon.spy(element, '_noinkChanged');
      element.noink = true;
      assert.isFalse(spy.called);
    });

    it('Passes noinnk to the ripple', () => {
      element._ensureRipple();
      assert.isTrue(element._ripple.noink);
    });

    it('Changes noink back', () => {
      element._ensureRipple();
      element.noink = false;
      assert.isFalse(element._ripple.noink);
    });
  });

  describe('_rippleUp()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls uiUpAction() on ripple effect', () => {
      element._ensureRipple();
      const spy = sinon.spy(element._ripple, 'uiUpAction');
      element._rippleUp(new CustomEvent('keyup'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });
  });

  describe('_downHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _ensureRipple() when pressed', () => {
      element._pressed = true;
      const spy = sinon.spy(element, '_ensureRipple');
      element._downHandler(new CustomEvent('keydown'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });
  });

  describe('_upHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls uiUpAction() no ripple', () => {
      element._ensureRipple();
      const spy = sinon.spy(element._ripple, 'uiUpAction');
      element._upHandler(new CustomEvent('keyup'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });

    it('No ripple', () => {
      element._upHandler(new CustomEvent('keyup'));
      // no error
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
  });

  describe('_spaceKeyUpHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _calculateElevation() ', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._spaceKeyUpHandler(new CustomEvent('keyup'));
      assert.isTrue(spy.called, 'Function called');
    });
  });

  describe('a11y', () => {
    it('Has role set', async () => {
      const element = await basicFixture();
      assert.equal(element.getAttribute('role'), 'button');
    });

    it('is accessible in normal state', async () => {
      const element = await fixture(`<anypoint-icon-button>
        <button aria-label="Click me">
          <iron-icon icon="alarm-add"></iron-icon>
        </button>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });

    it('is accessible in disabled state', async () => {
      const element = await fixture(`<anypoint-icon-button disabled>
        <button aria-label="Click me">
          <iron-icon icon="alarm-add"></iron-icon>
        </button>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });

    it('is accessible in active state', async () => {
      const element = await fixture(`<anypoint-icon-button toggles active>
        <button aria-label="Click me">
          <iron-icon icon="alarm-add"></iron-icon>
        </button>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });
  });
});
