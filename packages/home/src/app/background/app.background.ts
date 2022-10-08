import './app.background.scss';
//import * as KUTE from 'kute.js';


export class AppBackground extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const fillColor = '#FBAE3C';
    this.innerHTML = `
      <div class="background--container">
      <svg class="image" id="background" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <defs>
          <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
            <stop offset="14.444444444444446%" stop-color="#001220" stop-opacity="1"></stop>
            <stop offset="85.55555555555554%" stop-color="#001220" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
            <stop offset="14.444444444444446%" stop-color="#001220" stop-opacity="1"></stop>
            <stop offset="85.55555555555554%" stop-color="#001220" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(1920, 0)">
          <path id="right"
            d=""
            fill="${fillColor}"></path>
        </g>
        <g transform="translate(0, 1080)">
          <path id="left"
            d=""
            fill="${fillColor}"></path>
        </g>
      </svg>
      <!--<img src="./assets/blob-1.svg" />-->
    </div>
        `;

  }

  startAnimation() {
    const l1 = <HTMLElement>document.getElementById("left-1")
    const l2 = <HTMLElement>document.getElementById("left-2")



  }
}
customElements.define('app-background', AppBackground);