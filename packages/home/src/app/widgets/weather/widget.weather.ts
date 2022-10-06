import './widget.weather.scss';
import '../widget.scss';
import { IWidget, WidgetType } from '../widget.interface';
export class WidgetWeather extends HTMLElement implements IWidget {
  public static observedAttributes = [];

  get x(){
    return this.getAttribute("x");
  }

  get y(){
    return this.getAttribute("y");
  }

  get width(){
    return this.getAttribute("width");
  }

  get height(){
    return this.getAttribute("height");
  }

  get widgetType(){
    return this.getAttribute("widgetType");
  }

  /*private weatherData = {
    weather: "Sunny",
    temp: 18,
    tempType: TempetureType.celsius
  }*/

  connectedCallback() {
    this.innerHTML = `
      <div class="widget--container" style="grid-column-start: ${this.x}; grid-column-end: ${this.width}; grid-row-start: ${this.y}; grid-row-end: ${this.height};">
      hello
      </div>
        `;

  }
}
customElements.define('widget-weather', WidgetWeather);

enum TempetureType {
  celsius = 1,
  farenheit = 2
}