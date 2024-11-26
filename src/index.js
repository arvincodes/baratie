import "./styles.css"
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const xBtn = document.querySelector('.x-btn')

const content = document.getElementById('content')
const homeBtn = document.querySelector('.home-btn')
const menuBtn = document.querySelector('.menu-btn')


const homeSide = document.getElementById('home-side')
const menuSide = document.getElementById('menu-side')

function toggleSidebar() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function displayContent(contentCategory) {
  if (contentCategory === 'home') {
    content.innerHTML = home
  } else if (contentCategory === 'menu') {
    content.innerHTML = menu
  } else if (contentCategory === 'about') {
    content.innerHTML = about
  }
}

// function displayContent() {
//     content.innerHTML = home
// }

hamburgerMenu.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
xBtn.addEventListener('click', toggleSidebar)
homeBtn.addEventListener('click', () => displayContent('home'))
homeSide.addEventListener('click', () => displayContent('home'))
menuBtn.addEventListener('click', () => displayContent('menu'))
menuSide.addEventListener('click', () => displayContent('menu'))
document.addEventListener('DOMContentLoaded', () => {
  displayContent('home');
});