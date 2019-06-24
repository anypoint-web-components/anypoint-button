import { LitElement, html, css } from 'lit-element';
import {
  ButtonStateMixin,
  ControlStateMixin
} from '@anypoint-web-components/anypoint-control-mixins/anypoint-control-mixins.js';
import '@polymer/paper-ripple/paper-ripple.js';
/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof AnypointComponents
 */
class AnypointButton extends ControlStateMixin(ButtonStateMixin(LitElement)) {
  static get styles() {
    return css`:host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      outline-width: 0;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;
      background-color: var(--anypoint-button-background-color, inherit);
      color: var(--anypoint-button-color, inherit);
      border-width: 1px;
      border-color: var(--anypoint-button-border-color, transparent);
      border-style: solid;
      border-radius: var(--anypoint-button-border-radius, 2px);
    }

    :host([hidden]) {
      display: none !important;
    }

    :host(:focus) {
      outline: none;
    }

    :host(.keyboard-focus) {
      font-weight: bold;
    }

    :host(:not([type])[active]) {
      font-weight: bold;
      background-color:
        var(--anypoint-button-active-background-color, var(--anypoint-button-background-color, initial));
      color: var(--anypoint-button-active-color, var(--anypoint-button-color, initial));
    }

    :host(:not([active]):not([emphasis]):not([type])[focused]) {
      font-weight: bold;
      background-color:
        var(--anypoint-button-focused-background-color, var(--anypoint-button-background-color, initial));
      color: var(--anypoint-button-focused-color, var(--anypoint-button-color, initial));
    }

    :host([disabled]) {
      background: var(--anypoint-button-disabled-background-color, #eaeaea);
      color: var(--anypoint-button-disabled-color, #a8a8a8);
      cursor: auto;
      pointer-events: none;
      border: none;
    }

    :host([type="primary"]),
    :host([type="primary"][focused]) {
      background-color: var(--anypoint-color-primary);
      color: #fff;
    }

    :host([type][focused]) {
      font-weight: bold;
    }

    :host([type="secondary"]),
    :host([type="secondary"][focused]) {
      background-color: var(--anypoint-color-secondary);
      color: #fff;
    }

    :host([type="tertiary"]),
    :host([type="tertiary"][focused]) {
      background-color: var(--anypoint-color-aluminum5);
      color: #fff;
    }

    :host([type="danger"]),
    :host([type="danger"][focused]) {
      background-color: var(--anypoint-color-danger);
      color: #fff;
    }

    :host([active][type="primary"]),
    :host([pressed][type="primary"]) {
      background-color: var(--anypoint-color-coreBlue4);
    }

    :host([active][type="secondary"]),
    :host([pressed][type="secondary"]) {
      background-color: var(--anypoint-color-coreBlue5);
    }

    :host([active][type="tertiary"]),
    :host([pressed][type="tertiary"]) {
      background-color: var(--anypoint-color-steel2);
    }

    :host([active][type="danger"]),
    :host([pressed][type="danger"]) {
      background-color: #8c031a;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }

    :host([animated]) {
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    paper-ripple {
      color: var(--anypoint-button-ink-color, var(--paper-button-ink-color));
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
    }

    /* Material design implementation */
    :host([elevation="1"]) {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12),
                  0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    :host([elevation="2"]) {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12),
                  0 2px 4px -1px rgba(0, 0, 0, 0.4);
    }

    :host([elevation="3"]) {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }

    :host([elevation="4"]) {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12),
                  0 5px 5px -3px rgba(0, 0, 0, 0.4);
    }

    :host([elevation="5"]) {
      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                  0  6px 30px 5px rgba(0, 0, 0, 0.12),
                  0  8px 10px -5px rgba(0, 0, 0, 0.4);
    }

    :host([emphasis="low"]) {
      background-color: none;
      color: var(--anypoint-button-emphasis-low-color, var(--anypoint-button-color, initial));
    }

    :host([emphasis="medium"]) {
      background-color: none;
      border-color: var(--anypoint-button-emphasis-medium-border-color, var(--anypoint-color-primary));
      color: var(--anypoint-button-emphasis-medium-color, var(--anypoint-color-primary));
    }

    :host([emphasis="high"]) {
      background-color: var(--anypoint-button-emphasis-high-background-color, var(--anypoint-color-primary));
      color: var(--anypoint-button-emphasis-high-color, var(--anypoint-color-tertiary));
    }

    :host([emphasis][focused]) {
      font-weight: bold;
    }`;
  }

  render() {
    return html`<slot></slot>`;
  }

  static get properties() {
    return {
      /**
       * A type of the button. Can be one of:
       * - `primary`
       * - `secondary`
       * - `tertiary`
       * - `danger`
       *
       * You can set own type but the style has to be applied within the
       * light DOM or you have to create own CSS variabnle and place it with
       * every occurence of the button.
       *
       * ```html
       * <style>
       * anypoint-button[type="my-type"] {
       *  background-color: var(--anypopint-button-my-type, red);
       * }
       * </style>
       * <anypoint-button type="myu-type">Click me</anypoint-button>
       * ```
       *
       * @type {String}
       */
      type: { type: String, reflect: true },
      /**
       * If true, the button should be styled with a shadow according to Material Design.
       * This has no effect when theme is not set to `md`;
       */
      raised: { type: Boolean, reflect: true },
      /**
       * The z-depth of this element, from 0-5. Setting to 0 will remove the
       * shadow, and each increasing number greater than 0 will be "deeper"
       * than the last.
       * This is for MD implementation.
       */
      elevation: { type: Number, reflect: true },
      /**
       * If true, the element will not produce a ripple effect when interacted
       * with via the pointer.
       */
      noink: { type: Boolean, reflect: true },
      /**
       * To be used to styles the button according to Material Design
       * principles. This enables ripple effect, adds border radius, and
       * enables `raised`property.
       * By default it renders Anypoint theme. Set to `md` to enable material design.
       */
      theme: { type: String },
      /**
       * Button emphasis in the UI.
       *
       * Possible values:
       * - `low` - Text buttons are typically used for less important actions.
       * - `medium` - Outlined buttons are used for more emphasis than text buttons due to the stroke.
       * - `high` - Contained buttons have more emphasis, as they use use a color fill and shadow.
       *
       * Emphasis related CSS variables override default ones.
       */
      emphasis: { type: String, reflect: true }
    };
  }

  get raised() {
    return this._raised;
  }

  set raised(value) {
    this._setChanged('raised', value);
    this._calculateElevation(value);
  }

  get noink() {
    return this._noink;
  }

  set noink(value) {
    this._setChanged('noink', value);
    this._noinkChanged(value);
  }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    this._setChanged('theme', value);
    this._themeChanged(value);
  }

  get _receivedFocusFromKeyboard() {
    return this.__receivedFocusFromKeyboard || false;
  }

  set _receivedFocusFromKeyboard(value) {
    this._setChanged('_receivedFocusFromKeyboard', value);
    this._computeKeyboardClass(value);
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'button');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
    super.connectedCallback();
  }

  _buttonStateChanged() {
    this._calculateElevation();
    if (this.focused) {
      this._ensureRipple();
    }
  }

  _controlStateChanged() {
    super._controlStateChanged();
    this._calculateElevation();
  }

  _calculateElevation() {
    if (!this.raised) {
      this.elevation = 0;
      return;
    }
    let e = 1;
    if (this.disabled) {
      e = 0;
    } else if (this.active || this.pressed) {
      e = 4;
    } else if (this.receivedFocusFromKeyboard) {
      e = 3;
    }
    this.elevation = e;
  }

  _computeKeyboardClass(focus) {
    if (focus) {
      this.classList.add('keyboard-focus');
    } else {
      this.classList.remove('keyboard-focus');
    }
  }

  _spaceKeyDownHandler(e) {
    super._spaceKeyDownHandler(e);
    if (this.hasRipple()) {
      this._ripple.uiDownAction();
    }
  }

  _spaceKeyUpHandler(e) {
    super._spaceKeyUpHandler(e);
    if (this.hasRipple()) {
      this._ripple.uiUpAction();
    }
  }

  _downHandler(e) {
    super._downHandler(e);
    if (this.canRipple && this.pressed) {
      this._ensureRipple(e);
    }
  }

  _upHandler(e) {
    super._upHandler(e);
    if (this.hasRipple()) {
      this._ripple.uiUpAction();
    }
  }

  _ensureRipple(e) {
    if (this.canRipple && !this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
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

  get canRipple() {
    return this.theme === 'md';
  }

  _themeChanged(theme) {
    if (theme === 'md') {
      const radius = getComputedStyle(this).getPropertyValue('--anypoint-button-border-radius').trim();
      if (!radius) {
        this.style.setProperty('--anypoint-button-border-radius', '4px');
      }
    }
  }
}

window.customElements.define('anypoint-button', AnypointButton);
