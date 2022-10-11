import { IconPaths } from "../../../icon/app-icon";

export class WidgetMove extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    this.innerHTML = `
      <div class="widget--container">
        <app-icon fillColor="white" width="40" iconPath="${IconPaths["people-carry-box"]}"></app-icon>   
      </div>
        `;

  }
}

customElements.define('widget-move', WidgetMove);