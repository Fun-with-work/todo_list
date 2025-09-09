import "./styles.css";
import "./header.js";
import "./side-menu.js";
import "./main-content.js";
import "./footer.js";

import {list} from "./greeting.js";

console.log(list);

import theImage from "./images/restaurant-img.jpg";

const img = document.createElement("img");
img.src = theImage;
img.id = "restaurant-image";
document.body.appendChild(img);
