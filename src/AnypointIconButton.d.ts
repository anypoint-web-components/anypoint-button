import { TemplateResult } from 'lit-element';
import {PaperRippleElement} from '@polymer/paper-ripple';
import {AnypointButtonBase} from './AnypointButtonBase.js';

export {AnypointIconButton};

/**
 * Material design and Anypoint styled icon button
 */
declare class AnypointIconButton extends AnypointButtonBase {
  /**
   * A reference to the PaperRippleElement in the local DOM.
   */
  get _ripple(): PaperRippleElement;
  constructor();
  render(): TemplateResult;
  connectedCallback(): void;
  _spaceKeyDownHandler(e: KeyboardEvent): void;
  _spaceKeyUpHandler(e: KeyboardEvent): void;
  _buttonStateChanged(): void;
  _keyDownHandler(e: KeyboardEvent): void;
  _keyUpHandler(e: KeyboardEvent): void;
  _enterDownHandler(): void;
  _enterUpHandler(): void;
}
