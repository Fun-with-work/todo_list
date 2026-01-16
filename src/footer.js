import "./footer.css";

const content = document.getElementById("content");

export function createFooter() {

const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = `
    <div id="footer-content">
        <p>Created by Fun-with-work</p>
        
        <p id="footer-message">Images: <a href="https://pixabay.com/users/mediamodifier-1567646/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2108029">Mediamodifier</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2108029">Pixabay, </a><a href="https://www.freepik.com/free-vector/multiple-different-check-marks_35514630.htm#fromView=keyword&page=1&position=0&uuid=71366b0f-54c5-4370-9de4-8cda4e8db9b9&query=Check+marks">Image by juicy_fish on Freepik, </a> <a href="https://heropatterns.com/">Hero Patterns</a></p>
        
    </div>
`;
content.appendChild(footer);
}
