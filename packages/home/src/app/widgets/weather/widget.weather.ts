import './widget.weather.scss';
import { IWidget, WidgetType } from '../widget.interface';


export class WidgetWeather extends HTMLElement implements IWidget {
  x: number;
  y: number;
  width: number;
  height: number;
  widgetType = WidgetType.weather;

  public static observedAttributes = [];

  private weatherData = {
    weather: "Sunny",
    temp: 18,
    tempType: tempetureType.celsius
  }

  connectedCallback() {
    this.innerHTML = `
        `;

  }
}
customElements.define('widget-weather', WidgetWeather);

enum tempetureType {
  "celsius" = 1,
  "farenheit" = 2
}