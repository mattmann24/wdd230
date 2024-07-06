
const baseUrl = "https://mattmann24.github.io/wdd230/";
const url='https://mattmann24.github.io/wdd230/chamber/data/members.json';


const cards = document.querySelector('#cardsDirectory');
const list = document.querySelector('#listDirectory');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
    document.querySelector('#listDirectory').style.visibility ="hidden"

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    gridbutton.addEventListener("click", () => {
    document.querySelector('#listDirectory').style.visibility ="hidden"
	document.querySelector('#cardsDirectory').style.visibility ="visible";
    });

    listbutton.addEventListener("click", showList); // example using defined function

    function showList() {
	    document.querySelector('#cardsDirectory').style.visibility = "hidden";
        document.querySelector('#listDirectory').style.visibility = "visible";
	    
    }

    

}

getMembersData();

const displayMembers = (members) => {
    members.forEach((members) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2'); 
        let logo = document.createElement('img');

        let detailCard = document.createElement('section');

        let phone = document.createElement('h5')
        let address = document.createElement('h5')
        let memberlevel = document.createElement('h5')
        let website = document.createElement('h5')

        companyName.textContent = `${members.name}`
        phone.textContent = `${members.phoneNumber}`;
        address.textContent = `${members.address}`;
        memberlevel.textContent = `${members.membershipLevel}`;
        website.textContent = `${members.websiteURL}`;


        logo.setAttribute('src', members.image);
        logo.setAttribute('alt', `Image of ${companyName}'s logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');

        
        card.appendChild(logo);
        card.appendChild(companyName);

        detailCard.appendChild(phone);
        detailCard.appendChild(address);
        detailCard.appendChild(memberlevel);
        detailCard.appendChild(website);
        
        card.appendChild(detailCard);
        cards.appendChild(card);

        /* List */

        let listentry = document.createElement('ul');
        let companyNameList = document.createElement('h5'); 
        let phoneList = document.createElement('p');
        let addressList = document.createElement('p');
        let memberlevelList = document.createElement('p');
        let websiteList = document.createElement('p');

        companyNameList.setAttribute('class', 'directoryListp');
        phoneList.setAttribute('class', 'directoryListp');
        addressList.setAttribute('class', 'directoryListp');
        memberlevelList.setAttribute('class', 'directoryListp');
        websiteList.setAttribute('class', 'directoryListp');

        companyNameList.textContent = `${members.name} `
        phoneList.textContent = `${members.phoneNumber} `;
        addressList.textContent = `${members.address} `;
        memberlevelList.textContent = `${members.membershipLevel} `;
        websiteList.textContent = `${members.websiteURL} `;

        listentry.appendChild(companyNameList);
        listentry.appendChild(phoneList);
        listentry.appendChild(addressList);
        listentry.appendChild(memberlevelList);
        listentry.appendChild(websiteList);

        list.appendChild(listentry);


    });
}


