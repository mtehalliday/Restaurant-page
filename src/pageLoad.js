const drawHome = () => {    
    const content = document.querySelector("div#content");
    console.log(content);

    const home = document.createElement("div")
    home.classList.add("home");
    const copy = document.createElement("p");
    const headline = document.createElement("h1")
    const sandwich = document.createElement("img")
    sandwich.classList.add("pic");


    headline.textContent = "Matt's gourmet sandwiches";
    copy.textContent = "The most extraordinary sandwich emporium creating the most delectable lunchtime food for the hungry masses of this virtuous nation.";
    sandwich.setAttribute("src", "../img/light-sandwich-small.jpg");

    home.appendChild(sandwich);
    home.appendChild(headline);
    home.appendChild(copy);
    content.appendChild(home);
}


export {drawHome};

