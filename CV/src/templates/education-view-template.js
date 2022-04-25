import { html } from "../lib.js"


export const educationViewTemplate = () => html`
<div class="education">
    <div id="info-box">
        <h4>Finalized education in: </h4>
        <h3 id="study">High School: <a href="http://pmgsz.org/" target="_blank"> PPMG - Stara Zagora </a></h3>

        <h4>Currently studying at:</h4>

        <h3 id="study">University: <a href="https://www.unibit.bg/" target="_blank">UniBit - Sofiq</a></h3>

        <h4 id="study"> While following SoftUni's <a href="https://softuni.bg/curriculum" target="_blank">JavaScript path</a></h4>

        <h4 id="study"> What exactly is my knowledge? <a href="/knowledge">Details</a></h4>

    </div>
</div>
`
