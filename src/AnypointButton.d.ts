import { TemplateResult } from 'lit-element';
import { PaperRippleElement } from '@polymer/paper-ripple';
import { AnypointButtonBase } from './AnypointButtonBase.js';

/**
 * Material design and Anypoint styled button.
 */
export declare class AnypointButton extends AnypointButtonBase {
  /**
   * A reference to the PaperRippleElement in the local DOM.
   */
  get _ripple(): PaperRippleElement;
  constructor();
  render(): TemplateResult;
  connectedCallback(): void;
  _spaceKeyDownHandler(e: KeyboardEvent): void;
  _spaceKeyUpHandler(e: KeyboardEvent): void;
}
