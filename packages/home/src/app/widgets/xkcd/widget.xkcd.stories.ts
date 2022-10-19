import { html } from 'lit-html';

import './widget.xkcd';

const gridSize = 64;

export default {
    title: 'XKCD widget',
    decorators: [(story) => html`<div style="height: ${gridSize*6}px; width: ${gridSize*7}px">${story()}</div>`],
}
export const Primary = () => html`<widget-xkcd ></widget-xkcd>`;