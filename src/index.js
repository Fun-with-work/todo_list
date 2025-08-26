import "./styles.css";
import {list} from "./greeting.js";

console.log(list);

import theImage from "./images/restaurant-img.jpg";

const img = document.createElement("img");
img.src = theImage;
document.body.appendChild(img);