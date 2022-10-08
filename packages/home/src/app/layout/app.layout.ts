import './app.layout.scss';

export class AppLayout extends HTMLElement {
  public static observedAttributes = [];

  private colNum = 5;
  private rowNum = 5;
  private gap = 8;
  private itemPos = [{x:0, y:2, w:2, h:1, widgetType:0}, {x:3, y:4, w:1, h:2, widgetType:0}, {x:4, y:3, w:2, h:2, widgetType:0}];

  connectedCallback() {
    const container = document.createElement("div");
    container.classList.add("layout--container");

    //set grid container layout
    container.style.gap = `${this.gap}px`
    container.style.gridTemplateColumns = `repeat(${this.colNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${this.rowNum}, ${this.calcGridItemHeight()}px)`;

    for (let i = 0; i < this.itemPos.length; i++) {
      /*const item = document.createElement("div");
      item.id = `gridItem_${i}`;
      item.classList.add("item");
      item.classList.add("empty");
      item.classList.add("noselect");
      item.innerText = (i+1).toString();
*/
      let widget;
      switch (this.itemPos[i].widgetType) {
        case 0:
          widget = <HTMLElement>document.createElement("widget-weather")

          break;
      }

      widget.setAttribute('x', this.itemPos[i].x);
      widget.setAttribute('y', this.itemPos[i].y);
      widget.setAttribute('width', this.itemPos[i].w);
      widget.setAttribute('height', this.itemPos[i].h);
      widget.setAttribute('widgetType', this.itemPos[i].widgetType);      

      container.appendChild(widget);
    }

    this.appendChild(container);
  }

  /**
   * Calculates window height, to make the grid view a none scrollable view
   * @returns number (int)
   */
  calcGridItemHeight(){
    const bodyMarginHeights = parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('margin-top'))
    const gapHeights = this.rowNum*this.gap
    return (window.innerHeight - bodyMarginHeights*2 - gapHeights) /this.rowNum
  }

}
customElements.define('app-layout', AppLayout);