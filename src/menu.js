function renderMenu() {

    const createBackground = document.createElement("div");
    createBackground.classList.add("menuBackground");

    const backgroundImage = document.createElement("img");
    backgroundImage.src = "images/menubackground.jpg";
    backgroundImage.alt = "chef";

    //Menu
    function createMenu() { 
        const menu = document.createElement("div");
        menu.classList.add("menu");
    
        const menuTitle = document.createElement("h2");
        menuTitle.classList.add("menuTitle");
        menuTitle.textContent = "Our Menu";

        const menuBox = document.createElement("div");
        menuBox.classList.add("menuBox");

        menuBox.appendChild(addMenuItem("images/DalBhat2.jpg","Last Week's Pot: Dal Bhat", "We made this soup a week ago but the rice is fresh! Authentic Nnepalese cuisine right in your neighborhood!"));
        menuBox.appendChild(addMenuItem("images/PBandB.jpg","Peanut Butter and Banana", "Our chef's signature mouth-watering combination of peanut butter and banana. A delight to the senses!"));
        menuBox.appendChild(addMenuItem("images/chickenofthewoods.jpg","Camping Trip Leftovers: Chicken of the Woods", "Extra wild mushrooms we found on our camping trip last weekend, seasoned with salt."));
        menuBox.appendChild(addMenuItem("images/Salad.jpg","Whats-Left-in-the-Fridge: Salad", "An exquisite medley from our vegetable drawer. We're out of dressing, so olive oil and balsamic vinegar it is!"));
        menuBox.appendChild(addMenuItem("images/squish.jpeg","Squish", "Something that an old roommate left in the fridge after they moved. We don't really know what it is, but you can find out!"));
        menuBox.appendChild(addMenuItem("images/pizza.jpeg","College-Party 'Za", "We are just as shocked as you to discover that several slices from last night's party remain. We'd be honored to have you finish them!"));

        menu.appendChild(menuTitle);
        menu.appendChild(menuBox);

        return menu;
    }

    //Bringing the page together
    createBackground.appendChild(backgroundImage);
    createBackground.appendChild(createMenu());

    return createBackground;
}

function addMenuItem(picture,title,text) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemPic = document.createElement("img");
    itemPic.classList.add("menuPic");
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
    active.textContent="";
    active.appendChild(renderMenu());
}

export default menuPage;