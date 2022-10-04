import './app.background.scss';
//import * as KUTE from 'kute.js';


export class AppBackground extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const src = './assets/blob-1.svg';
    this.innerHTML = `
    <main>
    <!--<img src="${src}" />-->
    <svg id="visual" viewBox="0 0 900 600"  xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
          <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
          <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
          <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
          <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
        </linearGradient>
      </defs>

      <g transform="translate(900, 0)">
        <path id="left-1"
          d="M0 398C-49.4 415.5 -98.8 433.1 -133.7 411.5C-168.6 389.9 -188.9 329.1 -209.8 288.8C-230.7 248.5 -252.2 228.6 -282.3 205.1C-312.5 181.7 -351.3 154.7 -369 119.9C-386.7 85.1 -383.4 42.6 -380 0L0 0Z"
          fill="#FBAE3C"></path>
      </g>
      <g transform="translate(0, 600)">
        <path id="right-1"
          d="M0 -432.7C37.6 -402.9 75.2 -373.1 115.9 -356.6C156.6 -340.2 200.4 -337.1 227.5 -313.1C254.5 -289.1 264.8 -244.3 291.2 -211.6C317.7 -178.9 360.4 -158.4 385.2 -125.2C410 -91.9 417 -46 424 0L0 0Z"
          fill="#FBAE3C"></path>
      </g>


      <g transform="translate(900, 0)" style="visibility: hidden">
        <path id="left-2"
          d="M0 432.7C-36.7 398.9 -73.4 365.2 -113.1 348.1C-152.8 331 -195.5 330.5 -226.3 311.5C-257.1 292.5 -275.8 255 -307.4 223.4C-339 191.7 -383.4 165.7 -398.5 129.5C-413.6 93.2 -399.3 46.6 -385 0L0 0Z"
          fill="#FBAE3C">
        </path>
      </g>
      <g transform="translate(0, 600)" style="visibility: hidden">
        <path id="right-2"
          d="M0 -376C41.9 -385.1 83.9 -394.3 127.3 -391.8C170.8 -389.4 215.7 -375.4 254.3 -350C292.9 -324.7 325.1 -287.9 338.2 -245.7C351.2 -203.5 345.2 -155.9 350.9 -114C356.7 -72.2 374.4 -36.1 392 0L0 0Z"
          fill="#FBAE3C">
        </path>
      </g>

    </svg>

    <script>
      const moveLeft = KUTE.fromTo(
        '#left-1',
        { path: '#left-1' },
        { path: '#left-2' },
        { repeat: 999, duration: 3000, yoyo: true }
      )

      moveLeft.start();

      const moveRight = KUTE.fromTo(
        '#right-1',
        { path: '#right-1' },
        { path: '#right-2' },
        { repeat: 999, duration: 3000, yoyo: true }
      )

      moveRight.start();
    </script>
  </main>
        `;

  }

  startAnimation() {
    const l1 = <HTMLElement>document.getElementById("left-1")
    const l2 = <HTMLElement>document.getElementById("left-2")



  }
}
customElements.define('app-background', AppBackground);