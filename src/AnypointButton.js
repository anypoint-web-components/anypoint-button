import { html } from 'lit-element';
import { AnypointButtonBase } from './AnypointButtonBase.js';
import '@polymer/paper-ripple/paper-ripple.js';
import styles from './Styles.js';
/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @customElement
 * @demo demo/index.html
 * @memberof AnypointUi
 */
export class AnypointButton extends AnypointButtonBase {
  get styles() {
    return styles;
  }

  render() {
    const { noink, compatibility } = this;
    const stopRipple = !!noink || !!compatibility;
    return html`<style>${this.styles}</style><slot></slot><paper-ripple .noink="${stopRipple}"></paper-ripple>`;
  }

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
    if (!this._ripple.animating) {
      this._ripple.uiDownAction();
    }
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._calculateElevation();
    this._ripple.uiUpAction();
  }
}
