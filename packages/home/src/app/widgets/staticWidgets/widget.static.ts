import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
//import '../widget.scss';

import './widget.static.scss';

//import style from './widget.static.scss?lit';


@customElement('widget-static')
export class WidgetStatic extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  //static styles = style;

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="widget--container">
        <widget-move></widget-move>
        <widget-settings></widget-settings>
        <widget-user></widget-user>
      </div>
      `;
  }

}
