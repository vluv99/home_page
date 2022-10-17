import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './widget.xkcd.scss?lit';

@customElement('widget-xkcd')
export class WidgetXkcd extends LitElement {

  
  public get json() {
    return /*await?*/ this.fetchComic();
  }
  
  static styles =  styles;

  render() {
    //console.log(this.json)
    

    return html`
      <div class="widget--container">
        xkcd
      </div>
      `;
  }

  async fetchComic() {
    // welp this project gt stopped by CORs :/
    await fetch('https://xkcd.com/info.0.json', { mode: 'no-cors' }) //https://xkcd.com/614/info.0.json (comic #614)
      .then((response) => {
        //console.log(response.text())
        return response.text();
      })
      .then((data) => {
        //console.log(data)
        return data;
      });
  }
}

