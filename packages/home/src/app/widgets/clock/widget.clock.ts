import { LitElement,  html } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './widget.clock.scss?lit';

@customElement('widget-clock')
export class WidgetClock extends LitElement {

  static get styles() {
    return [style];
  }
  
  /*static styles = css`
    .widget--container{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff40;
      border-radius: 3.45rem;
    }
  `;*/

  render() {

    return html`
      <div class="widget--container">
        asd
      </div>
      `;
  }
}

