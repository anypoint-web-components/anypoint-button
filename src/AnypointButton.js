import { html } from 'lit-element';
import '@anypoint-web-components/material-ripple/material-ripple.js';
import { AnypointButtonBase } from './AnypointButtonBase.js';
import elementStyles from './Styles.js';

/** @typedef {import('@anypoint-web-components/material-ripple').MaterialRippleElement} MaterialRippleElement */

/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @demo demo/index.html
 */
export class AnypointButton extends AnypointButtonBase {
  /* eslint-disable class-methods-use-this */
  get styles() {
    return elementStyles;
  }

  render() {
    const { noink, compatibility, styles } = this;
    const stopRipple = !!noink || !!compatibility;
    return html`<style>${styles}</style><slot></slot><material-ripple .noink="${stopRipple}" @transitionend="${this._transitionEndHandler}"></material-ripple>`;
  }

  /**
   * @return {MaterialRippleElement} A reference to the PaperRippleElement in the local DOM.
   */
  get _ripple() {
    return this.shadowRoot.querySelector('material-ripple');
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

  _spaceKeyDownHandler(e) {
    super._spaceKeyDownHandler(e);
    this._calculateElevation();
    const { _ripple } = this;
    if (!_ripple.animating) {
      _ripple.down();
    }
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._calculateElevation();
    this._ripple.up();
  }
}
