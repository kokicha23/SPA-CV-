import { educationViewTemplate } from "../templates/education-view-template.js";



export function renderEducationView (ctx){
    ctx.render(educationViewTemplate())
}