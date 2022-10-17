import { html } from 'lit-html';

import './widget.xkcd';

const gridSize = 80;

export default {
    title: 'XKCD widget',
    decorators: [(story) => html`<div style="height: ${gridSize*3}px; width: ${gridSize*3}px">${story()}</div>`],
}
export const Primary = () => html`<widget-xkcd style="height: 120px; width: 120px"></widget-xkcd>`;