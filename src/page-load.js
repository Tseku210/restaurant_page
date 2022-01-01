import menu from './menu';
import contact from './contact';

function navbar(){
    const navDiv = document.createElement("div");
    // give id of nav
    navDiv.setAttribute("id", "nav");

    const header = document.createElement("div");
    header.setAttribute("id", "header");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Buuz & Huushuur";
    header.appendChild(h1);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");

    a1.setAttribute("href", "#");
    a2.setAttribute("href", "#");
    a3.setAttribute("href", "#");

    a1.innerHTML = "home";
    a2.innerHTML = "menu";
    a3.innerHTML = "contact";

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    li1.classList.add("button-nav", "active");
    li2.classList.add("button-nav");
    li3.classList.add("button-nav");

    li1.id = "homeLi";
    li2.id = "menuLi";
    li3.id = "contactLi";

    ul.appendChild(li1)
    ul.appendChild(li2);
    ul.appendChild(li3);
    nav.appendChild(ul);

    navDiv.appendChild(header);
    navDiv.appendChild(nav);

    return navDiv;
}
function mainSection(){
    const mainDiv = document.createElement("div");
    mainDiv.id = "main";
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";
    
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const img = document.createElement("img");
    const p4 = document.createElement("p");
    const footer = document.createElement("footer");

    p1.innerHTML = "Best Buuz & Huushuur in Mongolia";
    p2.innerHTML = "Order now or Choi (our professional floor sweeper) will get you!";
    p3.innerHTML = "Our Experienced Head Chef Mr.Telmuun";
    img.setAttribute("src", "images/headcheftelmuun.jpg");
    img.setAttribute("alt", "head chef");
    p4.innerHTML = "Choi lickin' good!";
    footer.innerHTML = "made by Tseku";


    homeDiv.appendChild(p1);
    homeDiv.appendChild(p2);
    homeDiv.appendChild(p3);
    homeDiv.appendChild(img);
    homeDiv.appendChild(p4);
    homeDiv.appendChild(footer);

    mainDiv.appendChild(homeDiv);

    return mainDiv;
}
function loadPage(){
    let content = document.querySelector("#content");

    content.appendChild(navbar());
    content.appendChild(mainSection());

    let lis = document.querySelectorAll(".button-nav");
    lis.forEach(li => {
        li.addEventListener("click", () => {
            content.removeChild(content.lastChild);
            let menuLi = document.querySelector("#menuLi");
            let contactLi = document.querySelector("#contactLi");
            let homeLi = document.querySelector("#homeLi")

            if (li.firstChild.innerHTML == "home"){
                homeLi.classList.remove("active");
                homeLi.classList.add("active");
                menuLi.classList.remove("active");
                contactLi.classList.remove("active");
                content.appendChild(mainSection());
            } else if (li.firstChild.innerHTML == "menu"){
                homeLi.classList.remove("active");
                menuLi.classList.add("active");
                contactLi.classList.remove("active");
                content.appendChild(menu());
            } else if (li.firstChild.innerHTML == "contact"){
                homeLi.classList.remove("active");
                menuLi.classList.remove("active");
                contactLi.classList.add("active");
                content.appendChild(contact());
            }
        })
    })
}
export default loadPage;