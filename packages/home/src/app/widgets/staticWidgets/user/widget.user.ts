import { IconPaths } from "../../../icon/app-icon";

export class WidgetUser extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    this.innerHTML = `
      <div class="widget--container">
        <app-icon fillColor="white" width="40" iconPath="${IconPaths.user}"></app-icon>   
      </div>
        `;

  }
}

customElements.define('widget-user', WidgetUser);