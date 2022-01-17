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
        createFrame.classList.add("bulkImage")

        const featurePhoto = document.createElement("img");
        featurePhoto.src = "images/coverphoto.jpeg";
        featurePhoto.alt="feature photo";

        frame.appendChild(featurePhoto);
    }

    function bodyText() {

        const featureText = document.createElement("div");
        featureText.classList.add("textWindow");

        featureText.appendChild(paragraph(`At Leftovers, we're committed to providing you the evening of a lifetime. 
        Whether you're diving into our exquisitely delicious de-thawed turkey dinner frozen from last Thanksgiving, 
        or our signature "Whats-in-the-Fridge" salad, we promise to delight your palate.`,"bodytext"))
        featureText.appendChild(paragraph('Bon Appétit!',"bodytext"))

        featureText.appendChild(button("Menu","navButton"))
        featureText.appendChild(button("Reservations","navButton"))
        featureText.appendChild(button("Contact","navButton"))
    }

    createBody.appendChild(photoFrame());
    createBody.appendChild(bodyText());

    return createBody;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    footer.appendChild(paragraph("Restaurant Hours","fHeader"));
    footer.appendChild(paragraph("Sunday: 10 a.m. - 10 p.m.","fText"));
    footer.appendChild(paragraph("Monday: Closed","fText"));
    footer.appendChild(paragraph("Tuesday: 12 a.m. - 10 p.m.","fText"));
    footer.appendChild(paragraph("Wednesday: 12 a.m. - 10 p.m.","fText"));
    footer.appendChild(paragraph("Thursday: 12 a.m. - 10 p.m.","fText"));
    footer.appendChild(paragraph("Friday: 12 a.m. - 11 p.m.","fText"));
    footer.appendChild(paragraph("Saturday: 10 a.m. - 11 p.m.","fText"));
    footer.appendChild(paragraph("Located at:","fHeader"));
    footer.appendChild(paragraph("9000 West Bridge Street, Windhelm, Skyrim 34294","fText"));

    return footer;
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
    
}

export default homePage;