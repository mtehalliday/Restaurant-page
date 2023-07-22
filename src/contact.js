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
    complaints.classList.add('complaints');
    complaints.textContent = "Any complaints or fan-mail? Hound us, please"

    const map_container = document.createElement('div');
    map_container.classList.add("map_container");
    const map = document.createElement('iframe');
    map.classList.add('map');
    map.setAttribute('src', 'https://www.google.com/webhp?igu=1');
    map.setAttribute('src', 'https://www.google.com/search?q=32a+brailsford+rd&igu=1&source=hp&ei=Ng28ZJnREeqphbIP6-2U4Ao&iflsig=AD69kcEAAAAAZLwbRivtf9FluX1yYbtAv3L7n4t5FFnB&oq=32A&gs_lp=Egdnd3Mtd2l6IgMzMkEqAggAMgQQIxgnMggQABiKBRiRAjIKEC4YigUYsQMYQzIQEAAYgAQYFBiHAhixAxiDATINEAAYgAQYFBiHAhixAzILEAAYgAQYsQMYgwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKocULUIWMgNcAJ4AJABAZgBngGgAa4CqgEDMi4xuAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgIKEAAYigUYsQMYQ8ICCBAAGIAEGLED&sclient=gws-wiz#');

    address.appendChild(mail);
    address.appendChild(address_writing);
 
    container.appendChild(title);
    container.appendChild(address);
    container.appendChild(complaints);
    
    map_container.appendChild(map);
    container.appendChild(map_container);


    content.appendChild(container);
}

export { drawContact };