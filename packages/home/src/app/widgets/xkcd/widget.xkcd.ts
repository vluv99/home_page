import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import {until} from 'lit/directives/until.js';

import styles from './widget.xkcd.scss?lit';

@customElement('widget-xkcd')
export class WidgetXkcd extends LitElement {

  
  public get json() {
    return this.fetchComic();
  }
  
  static styles =  styles;

  render() {
    //console.log(this.json)
    

    return html`
      <div class="widget--container">
        <div>XKCD ${until(this.fetchComic().then((d)=>html`${d.num}`), html``)} </div>
        ${until(this.fetchComic().then((d)=>html`<img src=${d.img}>`), html`<span>Loading...</span>`)}
      </div>
      `;
  }

  async fetchComic() {

    const res = await fetch('https://xkcd.now.sh/?comic=latest')
    return res.json();  
  }
}

