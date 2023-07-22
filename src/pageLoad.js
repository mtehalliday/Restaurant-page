const drawHome = () => {    
    const content = document.querySelector("div#content");

    const home = document.createElement("div")
    home.classList.add("home");
    const copy = document.createElement("p");
    const headback = document.createElement("div");
    headback.classList.add('headback');
    const sandwich = document.createElement("img");
    sandwich.classList.add("pic");


    headback.textContent = "Matt's gourmet sandwiches";
    copy.textContent = "The most extraordinary sandwich emporium creating the most delectable lunchtime food for the hungry masses of this virtuous nation.";
    sandwich.setAttribute("src", "../img/sandwich-svgrepo-com.svg");

    home.appendChild(sandwich);
    home.appendChild(headback);
    home.appendChild(copy);
    content.appendChild(home);
}


export {drawHome};

