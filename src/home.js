/* This the home DOM controller */
//Importing the image 
import restaurant_image from "/home/anthoxx2001/repos/restaurant-page-ToP/restaurant_image.jpeg";

export function home(){
    //document stored in var
    const Parent = document.getElementById('content'); //Get's parent

    //documents that create elements
    var div = document.createElement('div'); 
    var img = document.createElement('img');
    var h = document.createElement('h');
    var p = document.createElement('p');

    //Add the Rest Image it's Style
    img.src = restaurant_image;
    img.style.height = '500px';
    img.style.width = '500px';
    div.id = 'Image';
    Parent.appendChild(img);

    //Add the Rest name
    h.textContent = "Taina Ardiente";
    img.style.fontSize = '2rem';
    img.style.fontWeight = 'Bold';
    Parent.appendChild(h);

    //Add the Rest quote
    p.textContent = '"You know, you may not be born in Puerto Rico, but Puerto Rican is definitely born in you."';
    Parent.appendChild(p);
}