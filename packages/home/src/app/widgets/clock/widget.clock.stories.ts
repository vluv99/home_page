import { html } from 'lit-html';

import './widget.clock';

export default {
    title: 'Clock widget',
    decorators: [(story) => html`<div style="height: 120px; width: 120px">${story()}</div>`],
}
export const Primary = () => html`<widget-clock style="height: 120px; width: 120px"></widget-clock>`;
