const drawMenu = () => {
    const content = document.querySelector('div#content');
    const menuHolder = document.createElement('div');
    menuHolder.classList.add("menuholder");

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
    const steak_price = document.createElement("span")
    steak_price.textContent = "£8";
    steak.appendChild(steak_price);

    const blt = document.createElement("li");
    blt.textContent = "BLT";
    const blt_price = document.createElement("span")
    blt_price.textContent = "£5";
    blt.appendChild(blt_price);
    
    const caesar = document.createElement("li");
    caesar.textContent = "Chicken Caesar";
    const caesar_price = document.createElement("span")
    caesar_price.textContent = "£6";
    caesar.appendChild(caesar_price);
    
    const tuna = document.createElement("li");
    tuna.textContent = "Tuna Mayonnaise";
    const tuna_price = document.createElement("span")
    tuna_price.textContent = "£4.50";
    tuna.appendChild(tuna_price);
    
    const mozza = document.createElement("li");
    mozza.textContent = "Mozzarella, Tomato and Basil";
    const mozza_price = document.createElement("span")
    mozza_price.textContent = "£4.50";
    mozza.appendChild(mozza_price);

    sandlist.appendChild(steak);
    sandlist.appendChild(blt);
    sandlist.appendChild(caesar);
    sandlist.appendChild(tuna);
    sandlist.appendChild(mozza);

    sandwich_div.appendChild(sandlist);
   
    menuHolder.appendChild(title);
    menuHolder.appendChild(sandwiches);
    menuHolder.appendChild(sandwich_div);

    content.appendChild(menuHolder);

}

export { drawMenu };