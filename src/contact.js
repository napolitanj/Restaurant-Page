function renderContact() {
    const createBody = document.createElement("div");
    createBody.classList.add("contactBody");

    const contactImage = document.createElement("img");
    contactImage.classList.add("contactImage")
    contactImage.src = "images/windhelm.png";
    contactImage.alt = "windhelm";

    const textWindow = document.createElement("div");
    textWindow.classList.add("textWindow");
    textWindow.appendChild(header("Location","contactHeader"))
    textWindow.appendChild(paragraph("9000 West Bridge Street, Windhelm, Skyrim 34294","contactText"))
    textWindow.appendChild(paragraph(`We are located just beyond the main gates, if you've made it to the courtyard of
    the Jarl's palace, you've gone too far.`,"contactText"))
    textWindow.appendChild(header("Phone","contactHeader"))
    textWindow.appendChild(paragraph("782-234-2341","contactText"));

    createBody.appendChild(contactImage);
    createBody.appendChild(textWindow);

    return createBody;
}

function contactPage() {
    const active = document.getElementById("activePage");
    active.textContent="";
    active.appendChild(renderContact());
}

function paragraph(text,pClass) {

    const e = document.createElement("p");
    e.textContent = text;
    e.classList.add(pClass);
    return e;
}

function header(text,hClass) {

    const e = document.createElement("h3");
    e.textContent = text;
    e.classList.add(hClass);
    return e;
}

export default contactPage;