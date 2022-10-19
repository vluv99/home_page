import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { until } from 'lit/directives/until.js';
import { IconPaths } from '../../icon/app-icon';

import styles from './widget.xkcd.scss?lit';

@customElement('widget-xkcd')
export class WidgetXkcd extends LitElement {


  public get json() {
    return this.fetchComic();
  }

  static styles = styles;

  render() {

    return html`
      <div class="widget--container">
        ${until(this.fetchComic().then((d) =>
        html`
            <h3>XKCD ${d.num} <app-icon fillColor="white" width="25" iconPath="${IconPaths.help}"></app-icon></h3>
            <!--<div >${d.alt}</div>-->
            
            <a target="_blank" href="${d.img}" >
              <img src=${d.img} alt="${d.title}">
            </a>
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

