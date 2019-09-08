import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `getting-started`
 * getting started with polymer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GettingStarted extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'getting-started',
      },
    };
  }
}

window.customElements.define('getting-started', GettingStarted);
