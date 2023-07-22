const drawContact = () => {
    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.classList.add('add-container');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Contact";

    const address = document.createElement('div');
    const mail = document.createElement('img');
    mail.setAttribute("src", "../img/mail_FILL0_wght400_GRAD0_opsz48.svg");
    address.classList.add('address');
    const address_writing = document.createElement('p');
    address_writing.setAttribute('style', 'white-space: pre;')
    address_writing.textContent = '32A Brailsford Rd\nLondon\nSW2 2TE';


    const complaints = document.createElement('p')
    complaints.textContent = "Any complaints or fan-mail? Hound us, please"

    address.appendChild(mail);
    address.appendChild(address_writing);
 
    container.appendChild(title);
    container.appendChild(address);
    container.appendChild(complaints);
    content.appendChild(container);
}

export { drawContact };