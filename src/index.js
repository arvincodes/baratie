import "./styles.css"
import { greeting } from "./greeting.js"

console.log(greeting)
console.log("test")

const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const xBtn = document.querySelector('.x-btn')

function toggleSidebar() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

hamburgerMenu.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
xBtn.addEventListener('click', toggleSidebar)
