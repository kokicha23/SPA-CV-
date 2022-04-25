import { page } from './lib.js'
import { decorateView } from './middleware/middleware.js';
import { renderAboutMeView } from './views/about-me-view.js';
import { renderCertificatesView } from './views/certificates-view.js';
import { renderEducationView } from './views/education-view.js';
import { renderKnowledgeView } from './views/knowledge-view.js';

page(decorateView)
page('/', renderAboutMeView);
page('/certificates', renderCertificatesView)
page('/education', renderEducationView)
page('/knowledge',renderKnowledgeView)

page.start();



