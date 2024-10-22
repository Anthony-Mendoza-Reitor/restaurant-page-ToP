/* This the About DOM controller */
//Imports PR flag image
import Carribean_map from "/home/anthoxx2001/repos/restaurant-page-ToP/Carribean_map.png";

export function location(){
    //document stored in var
    const Parent = document.getElementById('content'); //Get's parent

    //documents that create elements
    var div = document.createElement('div'); 
    var img = document.createElement('img');
    var locationTab = document.createElement('h');
    var locationP = document.createElement('p');

    //Add the section name Location
    locationTab.textContent = "Location";
    locationTab.className = "locationTab";
    Parent.appendChild(locationTab);

    //Adds the location text
    locationP.textContent = "We are located in the Carribean sea!";
    Parent.appendChild(locationP);

    //Adds Carribean map
    var caribMap = document.createElement('img');
    caribMap.id = "caribMap";
    caribMap.src = Carribean_map;
    Parent.appendChild(caribMap);
}