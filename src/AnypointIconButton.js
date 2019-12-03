import { html } from 'lit-element';
import { AnypointButtonBase } from './AnypointButtonBase.js';
import '@polymer/paper-ripple/paper-ripple.js';
import styles from './IconStyles.js';
/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @customElement
 * @demo demo/index.html
 * @memberof AnypointUi
 */
export class AnypointIconButton extends AnypointButtonBase {
  get styles() {
    return styles;
  }

  render() {
    return html`<style>${this.styles}</style>
      <div class="icon">
        <slot></slot>
        <paper-ripple class="circle" center .noink="${this.noink}"></paper-ripple>
      </div>
    `;
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
    this._enterDownHandler();
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._enterUpHandler();
  }

  _buttonStateChanged() {
    this._calculateElevation();
  }

  _keyDownHandler(e) {
    super._keyDownHandler(e);
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.keyCode === 13) {
      this._enterDownHandler();
    }
  }

  _keyUpHandler(e) {
    super._keyUpHandler(e);
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.keyCode === 13) {
      this._enterUpHandler();
    }
  }

  _enterDownHandler() {
    this._calculateElevation();
    if (!this._ripple.animating) {
      this._ripple.uiDownAction();
    }
  }

  _enterUpHandler() {
    this._calculateElevation();
    this._ripple.uiUpAction();
  }
}
