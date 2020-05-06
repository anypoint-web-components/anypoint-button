import { html } from 'lit-element';
import '@polymer/paper-ripple/paper-ripple.js';
import { AnypointButtonBase } from './AnypointButtonBase.js';
import elementStyles from './Styles.js';

/** @typedef {import('@polymer/paper-ripple').PaperRippleElement} PaperRippleElement */

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
    return html`<style>
        ${styles}</style
      ><slot></slot><paper-ripple .noink="${stopRipple}"></paper-ripple>`;
  }

  /**
   * @return {PaperRippleElement} A reference to the PaperRippleElement in the local DOM.
   */
  get _ripple() {
    return this.shadowRoot.querySelector('paper-ripple');
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
      _ripple.uiDownAction();
    }
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._calculateElevation();
    this._ripple.uiUpAction();
  }
}
