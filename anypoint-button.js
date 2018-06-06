import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import * as Polymer from '@polymer/polymer/lib/legacy/class.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@anypoint-components/anypoint-styles/typography.js';
import '@anypoint-components/anypoint-styles/colors.js';
/**
 * `anypoint-button`
 * Anypoint styled button.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof AnypointComponents
 */
class AnypointButton extends Polymer.mixinBehaviors([IronButtonState, IronControlState], PolymerElement) {
  static get template() {
    return html`
      <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
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
        @apply --anypoint-font-common-base;
        @apply --anypoint-button;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:focus) {
        outline: none;
      }

      :host(.keyboard-focus) {
        font-weight: bold;
        @apply --anypoint-button-flat-keyboard-focus;
      }

      :host([active]) {
        font-weight: bold;
        @apply --anypoint-button-active;
      }

      :host(:not([active])[focused]) {
        font-weight: bold;
        @apply --anypoint-button-focused;
      }

      :host([disabled]) {
        background: #eaeaea;
        color: #a8a8a8;
        cursor: auto;
        pointer-events: none;
        @apply --anypoint-button-disabled;
      }

      :host([type="primary"]),
      :host([type="primary"][focused]) {
        background-color: var(--anypoint-color-primary);
        color: #fff;
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

      :host([active][type="primary"]) {
        background-color: var(--anypoint-color-coreBlue4);
      }

      :host([active][type="secondary"]) {
        background-color: var(--anypoint-color-coreBlue5);
      }

      :host([active][type="tertiary"]) {
        background-color: var(--anypoint-color-steel2);
      }

      :host([active][type="danger"]) {
        background-color: var(--anypoint-color-yellow3);
      }
      </style>
      <slot></slot>
    `;
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
      type: {
        type: String,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return [
      '_computeKeyboardClass(receivedFocusFromKeyboard)'
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'button');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
  }

  _computeKeyboardClass(receivedFocusFromKeyboard) {
    this.toggleClass('keyboard-focus', receivedFocusFromKeyboard);
  }
}

window.customElements.define('anypoint-button', AnypointButton);
