const drawContact = () => {
    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.classList.add('add-container');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Contact";
    const address = document.createElement('div');
    address.classList.add('address');
    address.setAttribute('style', 'white-space: pre;')
    address.textContent = '32A Brailsford Rd,\nLondon,\nSW2 2TE';
    
    container.appendChild(title);
    container.appendChild(address);
    content.appendChild(container);
}

export { drawContact };