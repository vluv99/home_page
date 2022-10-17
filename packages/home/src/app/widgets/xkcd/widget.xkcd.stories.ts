import { html } from 'lit-html';

import './widget.xkcd';

export default {
    title: 'XKCD widget',
    decorators: [(story) => html`<div style="height: 120px; width: 120px">${story()}</div>`],
}
export const Primary = () => html`<widget-xkcd style="height: 120px; width: 120px"></widget-xkcd>`;
export const Secondary = () => html`<widget-xkcd .background="#ff0" .label="😄👍😍💯"></widget-xkcd>`;
export const Tertiary = () => html`<widget-xkcd .background="#ff0" .label="📚📕📈🤓"></widget-xkcd>`;