import { certificatesViewTemplate } from "../templates/certificates-view-template.js";


export function renderCertificatesView(ctx){
ctx.render(certificatesViewTemplate())
}