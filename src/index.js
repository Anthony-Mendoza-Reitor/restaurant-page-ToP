//Test that webpack succesfully link html with JS
console.log("HELLO THERE IM UR JS WITH WEBPACK HEHE!");

//Imports the CSS for the home
import "./styles.css";
//Imports the CSS for the menu
import "./menu_styles.css";

//Imports the Home JavaScript file
import {home} from "/home/anthoxx2001/repos/restaurant-page-ToP/src/home.js";
//Imports the Menu JavaScript file
import {menu} from "/home/anthoxx2001/repos/restaurant-page-ToP/src/Menu.js";
//Imports the About JavaScript file
import {about} from "/home/anthoxx2001/repos/restaurant-page-ToP/src/About.js";
//Imports the Location JavaScript file
import {location} from "/home/anthoxx2001/repos/restaurant-page-ToP/src/Location.js";

//document stored in var
const Parent = document.getElementById('content'); //Get's parent

//Event Listener for home
document.getElementById('home').addEventListener("click", function() {
    Parent.innerHTML="";
    home();
  });
//Event Listener for menu
document.getElementById('menu').addEventListener("click", function() {
    Parent.innerHTML="";
    menu();
  }); 
//Event Listener for about
document.getElementById('about').addEventListener("click", function() {
    Parent.innerHTML="";
    about();
  }); 
//Event Listener for location
document.getElementById('location').addEventListener("click", function() {
    Parent.innerHTML="";
    location();
  }); 

//Initial page
home();