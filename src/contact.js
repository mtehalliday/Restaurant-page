const drawContact = () => {
    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.classList.add('add-container');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Contact";
    const subhead = document.createElement('h2');
    subhead.classList.add('sub-head');
    subhead.textContent = "Address";

    const address = document.createElement('div');
    address.classList.add('address');
    address.setAttribute('style', 'white-space: pre;')
    address.textContent = '32A Brailsford Rd\nLondon\nSW2 2TE';

    const complaints = document.createElement('p')
    complaints.textContent = "Any complaints or fan-mail? Hound us, please"

    
    container.appendChild(title);
    container.appendChild(subhead);
    container.appendChild(address);
    container.appendChild(complaints);
    content.appendChild(container);
}

export { drawContact };