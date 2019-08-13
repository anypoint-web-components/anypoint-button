import { fixture, assert } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../anypoint-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import * as MockInteractions from '@polymer/iron-test-helpers/mock-interactions.js';

describe('<anypoint-icon-button>', function() {
  async function basicFixture() {
    return (await fixture(`<anypoint-icon-button>
        <iron-icon icon="alarm-add"></iron-icon>
    </anypoint-icon-button>`));
  }

  async function noinkFixture() {
    return (await fixture(`<anypoint-icon-button noink>
        <iron-icon icon="alarm-add"></iron-icon>
    </anypoint-icon-button>`));
  }

  describe('Basics', () => {
    it('returns _ripple', async () => {
      const element = await basicFixture();
      assert.equal(element._ripple.localName, 'paper-ripple');
    });

    it('noink property is passed to the ripple', async () => {
      const element = await noinkFixture();
      assert.isTrue(element._ripple.noink);
    });
  });

  describe('_spaceKeyDownHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _enterDownHandler() when changing value', () => {
      const spy = sinon.spy(element, '_enterDownHandler');
      element._spaceKeyDownHandler(new CustomEvent('keydown'));
      assert.isTrue(spy.calledOnce, 'Function called');
    });
  });

  describe('_spaceKeyUpHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _enterUpHandler() ', () => {
      const spy = sinon.spy(element, '_enterUpHandler');
      element._spaceKeyUpHandler(new CustomEvent('keyup'));
      assert.isTrue(spy.called, 'Function called');
    });
  });

  describe('_buttonStateChanged()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Calls _calculateElevation() ', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._buttonStateChanged();
      assert.isTrue(spy.called, 'Function called');
    });
  });

  describe('_enterDownHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('calls _calculateElevation() ', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._enterDownHandler();
      assert.isTrue(spy.called, 'Function called');
    });

    it('calls uiDownAction() on the ripple', () => {
      const spy = sinon.spy(element._ripple, 'uiDownAction');
      element._ripple.animating = true;
      element._enterDownHandler();
      assert.isTrue(spy.called, 'Function called');
    });

    it('is called from enter down event', () => {
      const spy = sinon.spy(element, '_enterDownHandler');
      MockInteractions.keyDownOn(element, 13, [], 'Enter');
      assert.isTrue(spy.called, 'Function called');
    });

    it('is called from numenter down event', () => {
      const spy = sinon.spy(element, '_enterDownHandler');
      MockInteractions.keyDownOn(element, 13, [], 'NumpadEnter');
      assert.isTrue(spy.called, 'Function called');
    });

    it('is not called from other down event', () => {
      const spy = sinon.spy(element, '_enterDownHandler');
      MockInteractions.keyDownOn(element, 40, [], 'ArrowDown');
      assert.isFalse(spy.called, 'Function not called');
    });
  });

  describe('_enterUpHandler()', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('calls _calculateElevation() ', () => {
      const spy = sinon.spy(element, '_calculateElevation');
      element._enterUpHandler();
      assert.isTrue(spy.called, 'Function called');
    });

    it('calls uiUpAction() on the ripple', () => {
      const spy = sinon.spy(element._ripple, 'uiUpAction');
      element._enterUpHandler();
      assert.isTrue(spy.called, 'Function called');
    });

    it('is called from enter up event', () => {
      const spy = sinon.spy(element, '_enterUpHandler');
      MockInteractions.keyUpOn(element, 13, [], 'Enter');
      assert.isTrue(spy.called, 'Function called');
    });

    it('is called from numenter down event', () => {
      const spy = sinon.spy(element, '_enterUpHandler');
      MockInteractions.keyUpOn(element, 13, [], 'NumpadEnter');
      assert.isTrue(spy.called, 'Function called');
    });

    it('is not called from other up event', () => {
      const spy = sinon.spy(element, '_enterUpHandler');
      MockInteractions.keyUpOn(element, 40, [], 'ArrowDown');
      assert.isFalse(spy.called, 'Function not called');
    });
  });

  describe('a11y', () => {
    it('has role set', async () => {
      const element = await basicFixture();
      assert.equal(element.getAttribute('role'), 'button');
    });

    it('respects existing role', async () => {
      const element = await fixture(`<anypoint-icon-button role="test"></anypoint-icon-button>`);
      assert.equal(element.getAttribute('role'), 'test');
    });

    it('has tabindex set', async () => {
      const element = await basicFixture();
      assert.equal(element.getAttribute('tabindex'), '0');
    });

    it('respects existing tabindex', async () => {
      const element = await fixture(`<anypoint-icon-button tabindex="1"></anypoint-icon-button>`);
      assert.equal(element.getAttribute('tabindex'), '1');
    });

    it('is accessible in normal state', async () => {
      const element = await fixture(`<anypoint-icon-button aria-label="Click me">
        <iron-icon icon="alarm-add"></iron-icon>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });

    it('is accessible in disabled state', async () => {
      const element = await fixture(`<anypoint-icon-button disabled  aria-label="Click me">
        <iron-icon icon="alarm-add"></iron-icon>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });

    it('is accessible in active state', async () => {
      const element = await fixture(`<anypoint-icon-button toggles active  aria-label="Click me">
        <iron-icon icon="alarm-add"></iron-icon>
      </anypoint-icon-button>`);
      await assert.isAccessible(element);
    });
  });
});
