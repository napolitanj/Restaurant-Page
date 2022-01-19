import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

//Header

function renderHeader() {

    const createHeader = document.createElement("div");
    createHeader.classList.add("header");

    const createLogo = document.createElement("div");
    createLogo.classList.add("logo");
    createLogo.textContent = "Leftovers";

    createHeader.appendChild(createLogo);
    createHeader.appendChild(navigationMenu());

    return createHeader;
}

function navigationMenu() {
    const navigation = document.createElement("div");
    navigation.classList.add("navigationWindow");

    navigation.appendChild(navButton("Home","navigation","home"));
    navigation.appendChild(navButton("Menu","navigation","menu"));
    navigation.appendChild(navButton("Contact","navigation","contact"))

    function navButton(text,pClass,page) {
        const e = document.createElement("button");
        e.textContent = text;
        e.classList.add(pClass);
        e.addEventListener("click", () => {
            if (page === "home") {
                homePage();
            }
           if (page === "menu") {
               menuPage();
           }
           if (page === "contact") {
                contactPage();
            }
        })
        return e;
    }
    return navigation;
}

//Active Page
function activePage() {
    const active = document.createElement("main");
    active.setAttribute("id", "activePage");
    return active;
}

//Footer

function renderFooter() {
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

    return footer;
}

function paragraph(text,pClass) {

    const e = document.createElement("p");
    e.textContent = text;
    e.classList.add(pClass);
    return e;
}

function renderWebsite() {
    const content = document.getElementById("content");

    content.appendChild(renderHeader());
    content.appendChild(activePage());
    content.appendChild(renderFooter());

    homePage();
}

renderWebsite();
