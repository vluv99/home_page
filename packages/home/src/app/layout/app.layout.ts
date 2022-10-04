import './app.layout.scss';


export class AppGrid extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const container = document.createElement("div");
    container.classList.add("layout--container");

    for (let i = 0; i < 25; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add("empty");
      item.classList.add("noselect");
      item.innerText = (i+1).toString();

      container.appendChild(item);
    }

    this.appendChild(container);

/*
    this.innerHTML = `
    <div class="layout--container">
    <div class="item empty">1</div>
    <div class="item empty">2</div>
    <div class="item empty">3</div>
    <div class="item empty">4</div>
    <div class="item empty">5</div>

    <div class="item empty">6</div>
    <div class="item empty">7</div>
    <div class="item empty">8</div>
    <div class="item empty">9</div>
    <div class="item empty">10</div>

    <div class="item empty">11</div>
    <div class="item empty">12</div>
    <div class="item empty">13</div>
    <div class="item empty">14</div>
    <div class="item empty">15</div>

    <div class="item empty">16</div>
    <div class="item empty">17</div>
    <div class="item empty">18</div>
    <div class="item empty">19</div>
    <div class="item empty">20</div>

    <div class="item empty">21</div>
    <div class="item empty">22</div>
    <div class="item empty">23</div>
    <div class="item empty">24</div>
    <div class="item empty">25</div>
  </div>`;*/

  }

}
customElements.define('app-layout', AppGrid);