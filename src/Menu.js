/* This the menu DOM controller */
//Imports the mofongo image 
import mofongo_image from "/home/anthoxx2001/repos/restaurant-page-ToP/Mofongo-relleno-de-churrasco.jpg";

export function menu(){
    //document stored in var
    const Parent = document.getElementById('content'); //Get's parent

    //documents that create elements
    var div = document.createElement('div'); 
    var img = document.createElement('img');
    var h = document.createElement('h');
    var p = document.createElement('p');

    //Creates a image inside a div
    var mofongoImage = document.createElement('img');
    mofongoImage.src = mofongo_image;
    mofongoImage.id = "mofongoImage";
    var mofongoImageDiv = document.createElement('div');
    mofongoImageDiv.appendChild(mofongoImage);
    Parent.appendChild(mofongoImageDiv);
    
    //Creates a header for the section Menu
    var menuTabH = document.createElement('h');
    menuTabH.textContent = "Menu";
    menuTabH.className = "menuTabH";
    var menuTab = document.createElement('div');
    menuTab.className = "menuTab";
    menuTab.appendChild(menuTabH);
    Parent.appendChild(menuTab);
    
    //Creates a div for the Menu Content
    var menuContainer = document.createElement("div");
    menuContainer.className = "menuContainer";
    //Creates a div for the MenuLeft Side
    var menuLeft = document.createElement("div");
    menuLeft.className = "menuLeft";

    //Main Dishes
    var mainDishes = document.createElement("div");
    mainDishes.className = "mainDishes";
    //Main Dishes Title
    var mainDishesTitle = document.createElement("div");
    mainDishesTitle.className = "mainDishesTitle";
    var mainDishesH = document.createElement('h');
    mainDishesH.id = "mainDishesTitleH";
    mainDishesH.textContent = "Main Dishes";
    mainDishesTitle.appendChild(mainDishesH);
    mainDishes.appendChild(mainDishesTitle);
    //Main Dishes 1st item
    var mainDishesContent = document.createElement("div");
    mainDishesContent.className = "mainDishesContent";
    var p01 = document.createElement('p');
    p01.id = "mainDish1";
    p01.textContent = "Churrasco";
    mainDishesContent.appendChild(p01);
    //Main Dishes 2nd item
    var p02 = document.createElement('p');
    p02.id = "mainDish2";
    p02.textContent = "Pernil Encebollado";
    mainDishesContent.appendChild(p02);
    //Main Dishes 3rd item
    var p03 = document.createElement('p');
    p03.id = "mainDish3";
    p03.textContent = "Corned Beef";
    mainDishesContent.appendChild(p03);
    //Main Dishes 4th item
    var p04 = document.createElement('p');
    p04.id = "mainDish4";
    p04.textContent = "Pechuga Rellena de Amarillos";
    mainDishesContent.appendChild(p04);
    mainDishes.appendChild(mainDishesContent);
    //Adds the Main Dishes to the MenuLeft Div
    menuLeft.appendChild(mainDishes);

    //Sides
    var Sides = document.createElement("div");
    Sides.className = "Sides";
    //Sides Title
    var SidesTitle = document.createElement("div");
    SidesTitle.className = "SidesTitle";
    var SidesH = document.createElement('h');
    SidesH.id = "SidesTitleH";
    SidesH.textContent = "Sides";
    SidesTitle.appendChild(SidesH);
    Sides.appendChild(SidesTitle);
    //Sides 1st item
    var SidesContent = document.createElement("div");
    SidesContent.className = "SidesContent";
    var p11 = document.createElement('p');
    p11.id = "Sides1";
    p11.textContent = "Arroz con Gandules";
    SidesContent.appendChild(p11);
    //Sides 2nd item
    var p12 = document.createElement('p');
    p12.id = "Sides2";
    p12.textContent = "Yuca Frita";
    SidesContent.appendChild(p12);
    //Sides 3rd item
    var p13 = document.createElement('p');
    p13.id = "Sides3";
    p13.textContent = "Tostones de Platano";
    SidesContent.appendChild(p13);
    //Sides 4th item
    var p14 = document.createElement('p');
    p14.id = "Sides4";
    p14.textContent = "Platano Maduro";
    SidesContent.appendChild(p14);
    Sides.appendChild(SidesContent);

    //Adds the Main Dishes & Sidesto the MenuLeft Div
    menuLeft.appendChild(mainDishes);
    menuLeft.appendChild(Sides);

    //Creates a div for the MenuRight Side
    var menuRight = document.createElement("div");
    menuRight.className = "menuRight";

    //Mofongo
    var Mofongo = document.createElement("div");
    Mofongo.className = "Mofongo";
    //Mofongo Title
    var MofongoTitle = document.createElement("div");
    MofongoTitle.className = "MofongoTitle";
    var MofongoH = document.createElement('h');
    MofongoH.id = "MofongoTitleH";
    MofongoH.textContent = "Mofongo";
    MofongoTitle.appendChild(MofongoH);
    Mofongo.appendChild(MofongoTitle);
    //Mofongo 1st item
    var MofongoContent = document.createElement("div");
    MofongoContent.className = "MofongoContent";
    var p21 = document.createElement('p');
    p21.id = "Mofongo1";
    p21.textContent = "Relleno de Pollo";
    MofongoContent.appendChild(p21);
    //Mofongo 2nd item
    var p22 = document.createElement('p');
    p22.id = "Mofongo2";
    p22.textContent = "Relleno de Churrasco";
    MofongoContent.appendChild(p22);
    //Mofongo 3rd item
    var p23 = document.createElement('p');
    p23.id = "Mofongo3";
    p23.textContent = "Relleno de Mariscos";
    MofongoContent.appendChild(p23);
    //Mofongo 4th item
    var p24 = document.createElement('p');
    p24.id = "Mofongo4";
    p24.textContent = "Relleno de Dorado";
    MofongoContent.appendChild(p24);
    Mofongo.appendChild(MofongoContent);

    //Desserts
    var Desserts = document.createElement("div");
    Desserts.className = "Desserts";
    //Desserts Title
    var DessertsTitle = document.createElement("div");
    DessertsTitle.className = "DessertsTitle";
    var DessertsH = document.createElement('h');
    DessertsH.id = "DessertsTitleH";
    DessertsH.textContent = "Desserts";
    DessertsTitle.appendChild(DessertsH);
    Desserts.appendChild(DessertsTitle);
    //Desserts 1st item
    var DessertsContent = document.createElement("div");
    DessertsContent.className = "DessertsContent";
    var p31 = document.createElement('p');
    p31.id = "Desserts1";
    p31.textContent = "Flan de Queso";
    DessertsContent.appendChild(p31);
    //Desserts 2nd item
    var p32 = document.createElement('p');
    p32.id = "Desserts2";
    p32.textContent = "Tembleque";
    DessertsContent.appendChild(p32);
    //Desserts 3rd item
    var p33 = document.createElement('p');
    p33.id = "Desserts3";
    p33.textContent = "Tres Leches";
    DessertsContent.appendChild(p33);
    //Desserts 4th item
    var p34 = document.createElement('p');
    p34.id = "Desserts4";
    p34.textContent = "Dulce de Guayaba";
    DessertsContent.appendChild(p34);
    Desserts.appendChild(DessertsContent);

    //Adds the Mofongo & Desserts to the MenuRight Div
    menuRight.appendChild(Mofongo);
    menuRight.appendChild(Desserts);

    //Adds menu Left & Right to #divcontent
    menuContainer.appendChild(menuLeft);
    menuContainer.appendChild(menuRight);
    Parent.appendChild(menuContainer);
}