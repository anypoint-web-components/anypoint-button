import { TemplateResult } from 'lit-element';
import { MaterialRippleElement } from '@anypoint-web-components/material-ripple';
import { AnypointButtonBase } from './AnypointButtonBase.js';

/**
 * Material design and Anypoint styled button.
 */
export declare class AnypointButton extends AnypointButtonBase {
  /**
   * A reference to the MaterialRippleElement in the local DOM.
   */
  get _ripple(): MaterialRippleElement;
  constructor();
  render(): TemplateResult;
  connectedCallback(): void;
  _spaceKeyDownHandler(e: KeyboardEvent): void;
  _spaceKeyUpHandler(e: KeyboardEvent): void;
}
