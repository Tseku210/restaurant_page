function contact(){
    const mainDiv = document.createElement("div");
    mainDiv.id = "main";
    
    let p = document.createElement("p");
    p.innerHTML = "this is my contact";

    mainDiv.appendChild(p);

    return mainDiv;
}

export default contact;