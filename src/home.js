import "./styles.css";
import picture from "./2022-09-22.jpg";

export function homepage() {
    const title = document.createElement('h1');
    const image = document.createElement('img');
    title.className = 'title';
    title.innerText = 'welcome to my restaurant';
    content.appendChild(title);
    title.style.textAlign = 'center';
    image.src = picture;
    image.className = 'image';
    content.append(image);   

    
}