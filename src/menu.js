const drawMenu = () => {
    const content = document.querySelector('div#content');

    const title = document.createElement('h1')
    title.classList.add("title");
    title.textContent = "Menu";
    const sandwiches = document.createElement("h2");
    sandwiches.classList.add("sub-head");
    sandwiches.textContent = "Sandwiches";
    
    const sandwich_div = document.createElement("div");
    sandwich_div.classList.add("sandwiches");
    const sandlist = document.createElement("ul");
    const steak = document.createElement("li");
    steak.textContent = "Steak and onions";
    const blt = document.createElement("li");
    blt.textContent = "BLT";
    const caesar = document.createElement("li");
    caesar.textContent = "Chicken Caesar";
    const tuna = document.createElement("li");
    tuna.textContent = "Tuna Mayonnaise";
    const mozza = document.createElement("li");
    mozza.textContent = "Mozzarella, Tomato and Basil";

    sandlist.appendChild(steak);
    sandlist.appendChild(blt);
    sandlist.appendChild(caesar);
    sandlist.appendChild(tuna);
    sandlist.appendChild(mozza);

    sandwich_div.appendChild(sandlist);
    
    content.appendChild(title);
    content.appendChild(sandwiches);
    content.appendChild(sandwich_div);

}

export { drawMenu };