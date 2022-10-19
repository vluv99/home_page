import { html } from 'lit-html';

import './widget.clock';

const gridSize = 64;

export default {
    title: 'Clock widget',
    decorators: [(story) => html`<div style="height: ${gridSize*2}px; width: ${gridSize*4}px">${story()}</div>`],
}
export const Primary = () => html`<widget-clock ></widget-clock>`;
