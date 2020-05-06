import { html } from 'lit-element';
import { AnypointButtonBase } from './AnypointButtonBase.js';
import '@polymer/paper-ripple/paper-ripple.js';
import elementStyles from './IconStyles.js';

/** @typedef {import('@polymer/paper-ripple').PaperRippleElement} PaperRippleElement */

/**
 * Checks whether a KeyboardEvent originates from any Enter keys.
 * @param {KeyboardEvent} e
 * @return {Boolean} True if the event was triggered by the Enter key.
 */
const isEnterKey = e => {
  return e.code === 'Enter' || e.code === 'NumpadEnter' || e.keyCode === 13;
};

/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @extends AnypointButtonBase
 */
export class AnypointIconButton extends AnypointButtonBase {
  /* eslint-disable class-methods-use-this */
  get styles() {
    return elementStyles;
  }

  /**
   * @return {PaperRippleElement} A reference to the PaperRippleElement in the local DOM.
   */
  get _ripple() {
    return this.shadowRoot.querySelector('paper-ripple');
  }

  render() {
    return html`<style>
        ${this.styles}
      </style>
      <div class="icon">
        <slot></slot>
        <paper-ripple
          class="circle"
          center
          .noink="${this.noink}"
        ></paper-ripple>
      </div> `;
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'button');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }

  /** @override */
  _spaceKeyDownHandler(e) {
    super._spaceKeyDownHandler(e);
    this._enterDownHandler();
  }

  /** @override */
  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._enterUpHandler();
  }

  _buttonStateChanged() {
    this._calculateElevation();
  }

  /** @override */
  _keyDownHandler(e) {
    super._keyDownHandler(e);
    if (isEnterKey(e)) {
      this._enterDownHandler();
    }
  }

  /** @override */
  _keyUpHandler(e) {
    super._keyUpHandler(e);
    if (isEnterKey(e)) {
      this._enterUpHandler();
    }
  }

  /** @override */
  _enterDownHandler() {
    this._calculateElevation();
    const { _ripple } = this;
    if (!_ripple.animating) {
      _ripple.uiDownAction();
    }
  }

  _enterUpHandler() {
    this._calculateElevation();
    this._ripple.uiUpAction();
  }
}
