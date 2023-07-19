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

    content.appendChild(title);
    content.appendChild(sandwiches);
    content.appendChild(sandwiches_div);

}

export { drawMenu };