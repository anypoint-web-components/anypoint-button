import { TemplateResult } from 'lit-element';
import {PaperRippleElement} from '@polymer/paper-ripple';
import {AnypointButtonBase} from './AnypointButtonBase.js';
export {AnypointButton};

/**
 * Material design and Anypoint styled button.
 */
declare class AnypointButton extends AnypointButtonBase {
  /**
   * A reference to the PaperRippleElement in the local DOM.
   */
  readonly _ripple: PaperRippleElement;
  constructor();
  render(): TemplateResult;
  connectedCallback(): void;
  _spaceKeyDownHandler(e: any): void;
  _spaceKeyUpHandler(e: any): void;
}
