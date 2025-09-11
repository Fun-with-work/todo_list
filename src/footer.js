import "./footer.css";

const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = `
    <div id="footer-content">
        <p>Footer content goes here</p>
    </div>
`;
document.body.appendChild(footer);