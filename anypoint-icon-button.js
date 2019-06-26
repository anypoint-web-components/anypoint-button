import { html, css } from 'lit-element';
import { AnypointButtonBase } from './anypoint-button-base.js';
import '@polymer/paper-ripple/paper-ripple.js';

/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof AnypointUi
 */
class AnypointIconButton extends AnypointButtonBase {
  static get styles() {
    return css`
    :host {
      display: inline-block;
      position: relative;
      width: 40px;
      height: 40px;
    }

    :host(:focus),
    :host(:hover) {

    }

    paper-ripple {
      opacity: 0.6;
      color: currentColor;
    }

    :host > ::slotted(button) {
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      outline: none;
      vertical-align: middle;
      cursor: pointer;
      /* NOTE: Both values are needed, since some phones require the value to be "transparent". */
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      color: var(--anypoint-icon-button-color, var(--anypoint-color-primary));
    }

    :host > ::slotted(button[disabled]),
    :host([disabled]) > ::slotted(button) {
      color: var(--anypoint-icon-button-disabled-color, #a8a8a8) !important;
      pointer-events: none;
      cursor: auto;
    }
    /* Low emhasis styles */
    :host([emphasis="low"]) > ::slotted(button:not(:disabled)) {
      background-color: none;
      border-color: none;
      color: var(--anypoint-icon-button-emphasis-low-color, var(--anypoint-color-primary));
      box-shadow: none !important;
    }

    :host([emphasis="low"]) > ::slotted(button:hover) {
      background-color: var(--anypoint-icon-button-emphasis-low-hover-background-color, rgba(0, 162, 223, .08));
    }

    :host([emphasis="low"]) > ::slotted(button:focus) {
      background-color: var(--anypoint-icon-button-emphasis-low-focus-background-color, rgba(0, 162, 223, .12));
    }

    :host([emphasis="low"]) > ::slotted(button:active),
    :host([emphasis="low"][active]) > ::slotted(button) {
      background-color: var(--anypoint-icon-button-emphasis-low-active-background-color, rgba(0, 162, 223, .16));
      color: var(--anypoint-icon-button-emphasis-low-focus-color, var(--anypoint-color-coreBlue4));
    }
    /* Medium emphasis styles */
    :host([emphasis="medium"]) > ::slotted(button) {
      border-color: var(--anypoint-icon-button-emphasis-medium-focus-border-color, var(--anypoint-color-robustBlue1));
      box-shadow: none !important;
    }

    :host([emphasis="medium"][disabled]) > ::slotted(button),
    :host([emphasis="medium"]) > ::slotted(button[disabled]) {
      color: var(--anypoint-icon-button-disabled-color, #a8a8a8);
      border-color: var(--anypoint-icon-button-disabled-color, var(--anypoint-color-aluminum4));
    }

    :host([emphasis="medium"]) > ::slotted(button:hover) {
      background-color: var(--anypoint-icon-button-emphasis-medium-hover-background-color, rgba(0, 162, 223, .06));
    }

    :host([emphasis="medium"]) > ::slotted(button:focus) {
      background-color: var(--anypoint-icon-button-emphasis-medium-focus-background-color, rgba(0, 162, 223, .08));
      color: var(--anypoint-icon-button-emphasis-low-focus-color, var(--anypoint-color-coreBlue4));
      border-color: var(--anypoint-icon-button-emphasis-medium-focus-border-color, var(--anypoint-color-robustBlue2));
    }

    :host([emphasis="medium"]) > ::slotted(button:active),
    :host([emphasis="medium"][active]) > ::slotted(button) {
      background-color: var(--anypoint-icon-button-emphasis-low-active-background-color, rgba(0, 162, 223, .16));
    }
    /* High emphasis styles */
    :host([emphasis="high"]) > ::slotted(button) {
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: box-shadow;
      background-color: var(--anypoint-icon-button-emphasis-high-background-color, var(--anypoint-color-primary));
      color: var(--anypoint-icon-button-emphasis-high-color, var(--anypoint-color-tertiary));
    }

    :host([emphasis="high"][disabled]) > ::slotted(button),
    :host([emphasis="high"]) > ::slotted(button[disabled]) {
      background: var(--anypoint-icon-button-disabled-background-color, #eaeaea);
      color: var(--anypoint-icon-button-disabled-color, #a8a8a8);
      box-shadow: none;
    }

    :host([emphasis="high"]) > ::slotted(button:hover) {
      background-color: var(--anypoint-icon-button-emphasis-high-hover-background-color, rgba(0, 162, 223, 0.87));
    }

    :host([elevation="1"]) > ::slotted(button) {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12),
                  0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    :host([elevation="2"]) > ::slotted(button),
    :host([elevation][emphasis="high"]) > ::slotted(button:focus) {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12),
                  0 2px 4px -1px rgba(0, 0, 0, 0.4);
    }

    :host([elevation="3"]) > ::slotted(button) {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }
    `;
  }
  render() {
    return html`<slot></slot>`;
  }

  get noink() {
    return this._noink;
  }

  set noink(value) {
    if (this._setChanged('noink', value)) {
      this._noinkChanged(value);
    }
  }

  constructor() {
    super();
    this._rippleDown = this._rippleDown.bind(this);
    this._rippleUp = this._rippleUp.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mousedown', this._rippleDown);
    this.addEventListener('mouseup', this._rippleUp);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mousedown', this._rippleDown);
    this.removeEventListener('mouseup', this._rippleUp);
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes().filter((node) => node.nodeType === 1);
    const button = nodes[0];
    if (!button) {
      return;
    }
    this._rippleContainer = button;
    button.addEventListener('focus', this._rippleDown);
    button.addEventListener('blur', this._rippleUp);
  }

  _ensureRipple(e) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      this._ripple.center = true;
      this._ripple.classList.add('circle');
      const rippleContainer = this._rippleContainer || this.shadowRoot;
      if (rippleContainer) {
        rippleContainer.appendChild(this._ripple);
      }
      if (e) {
        const domContainer = this._rippleContainer || this;
        const target = e.target;
        if (domContainer.contains(/** @type {Node} */ (target))) {
          this._ripple.uiDownAction(e);
        }
      }
    }
  }

  getRipple() {
    this._ensureRipple();
    return this._ripple;
  }

  hasRipple() {
    return Boolean(this._ripple);
  }

  _createRipple() {
    const element = /** @type {!PaperRippleElement} */ (
        document.createElement('paper-ripple'));
    return element;
  }

  _noinkChanged(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }

  _rippleDown() {
    this.getRipple().uiDownAction();
  }

  _rippleUp() {
    this.getRipple().uiUpAction();
  }

  _downHandler(e) {
    super._downHandler(e);
    if (this.pressed) {
      this._ensureRipple(e);
    }
  }

  _upHandler(e) {
    super._upHandler(e);
    if (this.hasRipple()) {
      this._ripple.uiUpAction();
    }
  }

  _spaceKeyDownHandler(e) {
    super._spaceKeyDownHandler(e);
    this._calculateElevation();
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    this._calculateElevation();
    this.click();
  }

  _buttonStateChanged() {
    this._calculateElevation();
  }
}
window.customElements.define('anypoint-icon-button', AnypointIconButton);
