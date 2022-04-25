import { render } from "../lib.js";

let root = document.getElementById('main-content');

export function decorateView(ctx, next) {
    ctx.render = (content) => render(content, root)
    next();
}
