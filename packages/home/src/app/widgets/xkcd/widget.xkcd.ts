import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { until } from 'lit/directives/until.js';

import styles from './widget.xkcd.scss?lit';

@customElement('widget-xkcd')
export class WidgetXkcd extends LitElement {


  public get json() {
    return this.fetchComic();
  }

  static styles = styles;

  render() {
    //console.log(this.json)


    return html`
      <div class="widget--container">
        ${until(this.fetchComic().then((d) =>
        html`
            <div class="tooltip">XKCD ${d.num}</div>
            <a target="_blank" href=${d.img} >
              <img src=${d.img} alt="${d.title}">
            </a>
            <span class="tooltip-text">${d.alt}</span>
            `),
        html`
          <span>Loading...</span>
        `)}
      </div>
      `;
  }

  async fetchComic() {

    const res = await fetch('https://xkcd.now.sh/?comic=latest')
    return res.json();
  }
}

