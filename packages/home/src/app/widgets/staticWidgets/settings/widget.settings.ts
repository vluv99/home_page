import { IconPaths } from "../../../icon/app-icon";

export class WidgetSettings extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    this.innerHTML = `
      <div class="widget--container">
        <app-icon fillColor="white" width="40" iconPath="${IconPaths['gear']}"></app-icon>   
      </div>
        `;

  }
}

customElements.define('widget-settings', WidgetSettings);