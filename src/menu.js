function renderMenu() {

    const createBackground = document.createElement("div");
    createBackground.classList.add("menuBackground");

    const backgroundImage = document.createElement("img");
    backgroundImage.src = "images/menubackground.jpeg";
    backgroundImage.alt = "chef";

    //Menu 
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "Our Menu";

    const menuBox = document.createElement("div");
    menu.classList.add("menuBox");

    menuBox.appendChild(addMenuItem("images/DalBhat2.jpg","Last Week's Pot: Dal Bhat", "Guess what this text filled has to say about all this stuff!?"));
    menuBox.appendChild(addMenuItem("images/PBandB.jpg","Peanut Butter and Banana", "Guess what this text filled has to say about all this stuff!?"));
    menuBox.appendChild(addMenuItem("images/chickenofthewoods.jpg","Camping Trip Leftovers: Chicken of the Woods", "Guess what this text filled has to say about all this stuff!?"));
    menuBox.appendChild(addMenuItem("images/Salad.jpg","Whats-Left-in-the-Fridge: Salad", "Guess what this text filled has to say about all this stuff!?"));

    menu.appendChild(menuTitle);
    menu.appendChild(menuBox);

    //Bringing the page together
    createBackground.appendChild(backgroundImage);
    createBackground.appendChild(menu);

    return createBackground;
}

function addMenuItem(picture,title,text) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemPic = document.createElement("img");
    itemPic.src = picture;
    itemPic.alt = "item picture";
    
    const itemTitle = document.createElement("h3");
    itemTitle.classList.add("h2");
    itemTitle.textContent = title;

    const itemText = document.createElement("p")
    itemText.textContent= text;

    menuItem.appendChild(itemPic);
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemText);

    return menuItem;
}


function menuPage() {
    const active = document.getElementById("activePage");
    active.appendChild(renderMenu());
}

export default menuPage;