import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {IronButtonState, IronButtonStateImpl} from '@polymer/iron-behaviors/iron-button-state.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import * as Polymer from '@polymer/polymer/lib/legacy/class.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
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
        font: inherit;
        text-transform: uppercase;
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
      </style>
      <slot></slot>
    `;
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
