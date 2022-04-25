import { aboutMeViewTemplate } from "../templates/about-me-view-template.js";


export function renderAboutMeView(ctx){
  ctx.render(aboutMeViewTemplate())
}