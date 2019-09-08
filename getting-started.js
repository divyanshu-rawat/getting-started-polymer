import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";

/**
 * `getting-started`
 * getting started with polymer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

/*
    The content between backticks (...) is a JavaScript template literal. 
    In Polymer 3.0, however, the template function must return an instance of HTMLTemplateElement. 
    For this reason, we tag the template literal with the html helper function, 
    transforming the return value of the template function into an HTMLTemplateElement instance.
    ref. - https://polymer-library.polymer-project.org/3.0/docs/first-element/step-2
 */
class GettingStarted extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: rgba(0, 0, 0, 0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: rgba(77, 19, 209, 1);
        }
      </style>

      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }

  /*
      Key information:
      * Declare properties for your elements inside a properties getter function.
      * You must declare a property in order to use it in HTML.
      * A simple property declaration like this one just includes the type (in this case, String).
  */

  static get properties() {
    return {
      toggleIcon: {
        type: String
      },

      /*
         Key information:
         * value specifies the property's default value.
         * notify tells Polymer to dispatch property change events when the property's value changes. This lets the change be observed by other nodes.
         * The reflectToAttribute property tells Polymer to update the corresponding attribute when the property changes. This lets you style the element using an attribute selector, like icon-toggle[pressed].
      */
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  /*
    IconToggle overrides the constructor of its superclass, PolymerElement, and defines its own constructor:
  */

  constructor() {
    super();
    /*
    
       Make sure you are aware of the scope of the this value when referencing this from inside a function that gets passed as an argument, like a callback.
       In the code above, we have handled scope by binding the this value (this.toggle.bind(this)), but you could alternately handle it by using ES6 arrow functions.

    */
    this.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.pressed = !this.pressed;
  }
}

window.customElements.define("getting-started", GettingStarted);
// The line of code above tells the web browser that <icon-toggle> is an element, and can be used in markup.
