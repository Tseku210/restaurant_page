function menu(){
    const mainDiv = document.createElement("div");
    mainDiv.id = "main";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    const items = ["buuz", "huushuur", "tsuivan", "banshtai tsai"];

    for (let i = 0; i < items.length; i++){
        const item = document.createElement("div");
        item.classList.add("dish");
        item.innerHTML = items[i].toUpperCase();
        menuDiv.appendChild(item);
    }
    mainDiv.appendChild(menuDiv);

    return mainDiv;
}

export default menu;