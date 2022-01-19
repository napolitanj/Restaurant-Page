function renderHome() {

    const createBackground = document.createElement("div");
    createBackground.classList.add("backgroundImage");

    const backgroundImage = document.createElement("img");
    backgroundImage.src = "images/diningroom.jpg";
    backgroundImage.alt = "dining room";

    const shading = document.createElement("div");
    shading.classList.add("shade");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.textContent = "Welcome to Leftovers";

    createBackground.appendChild(backgroundImage);
    createBackground.appendChild(shading);
    createBackground.appendChild(overlay);

    return createBackground;
}

function renderBody() {

    const createBody = document.createElement("div");
    createBody.classList.add("bulk");

    function photoFrame() {

        const frame = document.createElement("div");
        frame.classList.add("bulkImage")

        const featurePhoto = document.createElement("img");
        featurePhoto.src = "images/coverphoto.jpeg";
        featurePhoto.alt="feature photo";

        frame.appendChild(featurePhoto);

        return frame;
    }

    function bodyText() {

        const featureText = document.createElement("div");
        featureText.classList.add("textWindow");

        featureText.appendChild(paragraph(`At Leftovers, we're committed to providing you the evening of a lifetime. 
        Whether you're diving into our exquisitely delicious de-thawed turkey dinner frozen from last Thanksgiving, 
        or our signature "Whats-in-the-Fridge" salad, we promise to delight your palate.`,"bodytext"))
        featureText.appendChild(paragraph('Bon appétit!',"bodytext"))

        featureText.appendChild(button("Reservations","navButton"))

        return featureText;
    }

    createBody.appendChild(bodyText());
    createBody.appendChild(photoFrame());

    return createBody;
}

function paragraph(text,pClass) {

    const e = document.createElement("p");
    e.textContent = text;
    e.classList.add(pClass);
    return e;
}

function button(text,bClass) {
    const e = document.createElement("button");
    e.textContent = text;
    e.classList.add(bClass);
    return e;
}

function homePage() {
    const active = document.getElementById("activePage");
    active.textContent="";
    active.appendChild(renderHome());
    active.appendChild(renderBody());
}

export default homePage;