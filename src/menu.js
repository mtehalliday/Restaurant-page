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

    const drinkHolder = document.createElement('div');
    drinkHolder.classList.add('drinkholder');
    const drinklist = document.createElement('ul');

    const espresso = document.createElement('li');
    espresso.textContent = "Espresso";
    const espresso_price = document.createElement('span');
    espresso_price.textContent = "£1.50";
    espresso.appendChild(espresso_price);

    const americano = document.createElement('li');
    americano.textContent = "Americano";
    const americano_price = document.createElement('span');
    americano_price.textContent = "£1.50";
    americano.appendChild(americano_price);  

    const coke = document.createElement('li');
    coke.textContent = "Coca-cola";
    const coke_price = document.createElement('span');
    coke_price.textContent = "£1";
    coke.appendChild(coke_price); 
   
    drinklist.appendChild(espresso);
    drinklist.appendChild(americano);
    drinklist.appendChild(coke);

    drinkHolder.appendChild(drinklist);

    const drinks = document.createElement('h2');
    drinks.classList.add("sub-head");
    drinks.textContent = "Drinks";
    menuHolder.appendChild(drinks);


    menuHolder.appendChild(drinkHolder);
    content.appendChild(menuHolder);
    //content.appendChild(drinkHolder);

}

export { drawMenu };