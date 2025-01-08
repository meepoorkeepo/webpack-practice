import "./styles.css";
import { homepage } from "./home";
import { menu } from "./menu";
import { about } from "./about";
const content = document.getElementById('content');
const homebtn = document.getElementById('Home');
const menubtn = document.getElementById('Menu');
const Aboutbtn = document.getElementById('About');

homebtn.addEventListener('click',e =>{
    document.getElementById('content').innerHTML = '';
    homepage()
});
menubtn.addEventListener('click',e =>{
    document.getElementById('content').innerHTML = '';
    menu()
});
Aboutbtn.addEventListener('click',e=>{
    document.getElementById('content').innerHTML = '';
    about();
});
homepage();

