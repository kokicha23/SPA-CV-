import { html } from "../lib.js";


export const knowledgeViewTemplate = () => html`
<section class="knowledge">
    <div id="info-box">
        <div class="formatter">
            <h3>JavaScript</h3>
            <div class="bar-wrapper">
                <div class="js-bar"></div>
            </div>
            <p>Good understanding of the programing fundamentals with JavaScript.</p>
            <p>Good understanding of DOM manipulations.</p>
            <p>Little OOP knowledge.</p>
            <p>Good understanding of asynchronous programming.</p>

        </div>

        <div class="formatter">
            <h3>HTML and CSS</h3>
            <div class="bar-wrapper">
                <div class="html-css-bar"></div>
            </div>
            <p>Little understanding of HTML and CSS.</p>
        </div>

        <div class="formatter">
            <h3>English</h3>
            <div class="bar-wrapper">
                <div class="english-bar"> </div>
            </div>
            <p>Currently studying english in Uchilishte Evropa
                at level B2.
            </p>
        </div>
    </div>

    </div>
</section>
`