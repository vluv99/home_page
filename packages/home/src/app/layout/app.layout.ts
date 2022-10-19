import { WidgetType } from '../widgets/widget.interface';
import './app.layout.scss';

type WidgetPlacement = { x: number, y: number, w: number, h: number, widgetType: WidgetType }

export class AppLayout extends HTMLElement {
  public static observedAttributes = [];

  //private colNum = 5;
  //private rowNum = 5;
  private gap = 8;
  private cellSize = 60;

  private staticItems: WidgetPlacement[] = [
    /*{ x: this.calcColumnCount(), y: 1, w: 1, h: 1, widgetType: WidgetType.user },
    { x: this.calcColumnCount() - 1, y: 1, w: 1, h: 1, widgetType: WidgetType.settings },
    { x: this.calcColumnCount() - 2, y: 1, w: 1, h: 1, widgetType: WidgetType.move },*/
    { x: this.calcColumnCount()-2, y: 1, w: 3, h: 1, widgetType: WidgetType.staticWidget }
  ];
  private itemPos: WidgetPlacement[] = [...this.staticItems, 
    { x: 0, y: 2, w: 1, h: 1, widgetType: WidgetType.weather }, 
    { x: this.calcColumnCount()-5, y: this.calcRowCount()-6, w: 5, h: 6, widgetType: WidgetType.xkcd }, 
    { x: this.calcColumnCount()-4, y: this.calcRowCount()-9, w: 4, h: 2, widgetType: WidgetType.clock }
  ];

  connectedCallback() {
    const container = document.createElement("div");
    container.setAttribute("id", "layout");
    container.classList.add("layout--container");

    // Set grid container layout
    container.style.gap = `${this.gap}px`
    container.style.gridTemplateColumns = `repeat(auto-fill, ${this.cellSize}px)`;
    container.style.gridTemplateRows = `repeat(auto-fill, ${this.cellSize}px)`;

    for (const element of this.itemPos) {

      const widget: HTMLElement = document.createElement(element.widgetType);

      //set grid item position
      widget.style.gridColumnStart = element.x.toString();
      widget.style.gridColumnEnd = "span " + element.w.toString();
      widget.style.gridRowStart = element.y.toString();
      widget.style.gridRowEnd = "span " + element.h.toString();

      container.appendChild(widget);
    }

    this.appendChild(container);
  }

  calcColumnCount(): number {
    return Math.floor(window.innerWidth / (this.cellSize + this.gap))
  }


  calcRowCount(): number {
    return Math.floor(window.innerHeight / (this.cellSize + this.gap))
  }

  /**
   * Calculates window height, to make the grid view a none scrollable view
   * @returns number (int)
   */
  /*calcGridItemHeight(){
    const bodyMarginHeights = parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('margin-top'))
    const gapHeights = this.rowNum*this.gap
    return (window.innerHeight - bodyMarginHeights*2 - gapHeights) /this.rowNum
  }*/

}
customElements.define('app-layout', AppLayout);