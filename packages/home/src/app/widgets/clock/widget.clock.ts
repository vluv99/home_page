import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './widget.clock.scss'; // WTF??? everything loses the generic widget style if I take this out???
import styles from './widget.clock.scss?lit';


@customElement('widget-clock')
export class WidgetClock extends LitElement {
  static styles = styles;

  get date(){
    return new Date().toLocaleDateString(navigator.languages[0] /*"hu-HU"*/, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  }
  get time(){
    return new Date().toLocaleTimeString(navigator.languages[0] /*"hu-HU"*/, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  location: string = this.getLocation();
  private _timerInterval: NodeJS.Timer;


  render() {
    return html`
      <div class="widget--container">
        ${this.date}
        <div class="clock">
          ${this.time}
        </div>
        ${this.location}
      </div>
        `;
  }

  connectedCallback() {
    super.connectedCallback();
    
    this._timerInterval = setInterval(() => this.requestUpdate(
      this.date , 
      this.date 
    ), 1000*60); //1 min

    // when the second is visible, setting the frequency shorter for more accurate times
    this._timerInterval = setInterval(() => this.requestUpdate(
      this.time , //new value
      this.time // old value??
    ), 200);

    this._timerInterval = setInterval(() => this.requestUpdate(
      this.location = this.getLocation() , 
      this.location 
    ), 1000*60*30); //30 mins
  }
 

  // TODO: fix this!
  //https://codepen.io/BigDataCloudAPI/pen/KKwQZjb
  getLocation(): string {
    if (navigator.geolocation) {
      let result = "Failed to get the location :("
      let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";

      navigator.geolocation.getCurrentPosition(
        (position) => {
          bdcApi = bdcApi
            + "?latitude=" + position.coords.latitude
            + "&longitude=" + position.coords.longitude
            + "&localityLanguage=" + navigator.languages[0];
          result = getApi(bdcApi, result);

        },
        (err) => { getApi(bdcApi, result); },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });

      // eslint-disable-next-line no-inner-declarations
      function getApi(bdcApi, result) {
        const Http = new XMLHttpRequest();
        Http.open("GET", bdcApi);
        Http.send();
        Http.onreadystatechange = function () {
          // TODO: if fails here?? the GET isnt giving back anything, so either should just change to google maps api ... or fix this
          if (this.readyState == 4 && this.status == 200) { 
            result = JSON.parse(this.responseText).city;
          }
        };

        return result;
      }

      return result;
    } else {
      return "N/A - update your browser pls :)";
    }

  }

}

