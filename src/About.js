/* This the About DOM controller */
//Imports PR flag image
import PR_flag from "/home/anthoxx2001/repos/restaurant-page-ToP/PR_Flag.jpg";

export function about(){
    //document stored in var
    const Parent = document.getElementById('content'); //Get's parent

    //documents that create elements
    var div = document.createElement('div'); 
    var img = document.createElement('img');
    var aboutTab = document.createElement('h');
    var aboutP = document.createElement('p');

    //Add the section name About
    aboutTab.textContent = "About";
    aboutTab.className = "aboutTab";
    Parent.appendChild(aboutTab);

    //Adds the location text
    aboutP.textContent = "This is the website of a family business of Puerto Rican's entrepeneurs who eagers the need of sharing their gastronomical treasures which are a result of years of history and cultural and races blending through out the beautiful journey called life.";
    Parent.appendChild(aboutP);

    //Adds PR flag
    var PRFlag = document.createElement('img');
    PRFlag.id = "PRFlag";
    PRFlag.src = PR_flag;
    Parent.appendChild(PRFlag);
}