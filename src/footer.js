import "./footer.css";

const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = `
    <div id="footer-content">
        <p>Created by Fun-with-work</p>
        
        <p id="footer-message">Images: <a href="https://pixabay.com/users/mediamodifier-1567646/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2108029">Mediamodifier</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2108029">Pixabay, </a> <a href="https://pixabay.com/users/tumisu-148124/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1919292">Tumisu</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1919292">Pixabay</a></p>
    </div>
`;
document.body.appendChild(footer);