
const baseUrl = "https://mattmann24.github.io/wdd230/";
const url='https://mattmann24.github.io/wdd230/chamber/data/members.json';


const cards = document.querySelector('#cardsDirectory');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);

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

    });
}