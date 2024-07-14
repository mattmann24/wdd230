const baseUrl = "https://mattmann24.github.io/wdd230/";
const url='https://mattmann24.github.io/wdd230/scooter/data/rentals.json';


const cards = document.querySelector('#cardsDirectory');

async function getRentalsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.rentals);
    displayMembers(data.rentals);

}

getRentalsData();

const displayRentals = (rentals) => {
    rentals.forEach((rentals) => {
        let card = document.createElement('section');
        let type = document.createElement('h2'); 
        let rentalImg = document.createElement('img');

        let detailCard = document.createElement('section');

        let model = document.createElement('h5')
        let size = document.createElement('h5')
        let limit = document.createElement('h5')
        let climatecontrol = document.createElement('h5')

        type.textContent = `${rentals.type}`
        model.textContent = `${rentals.model}`;
        size.textContent = `${rentals.size}`;
        limit.textContent = `${rentals.limit}`;
        climatecontrol.textContent = `${rentals.climatecontorl}`;


        rentalImg.setAttribute('src', rentals.image);
        rentalImg.setAttribute('alt', `Image of ${type} and/with ${size} ${climatecontrol} logo`);
        rentalImg.setAttribute('loading', 'lazy');
        rentalImg.setAttribute('width', '300');
        rentalImg.setAttribute('height', 'auto');

        
        card.appendChild(rentalImg);
        card.appendChild(type);

        detailCard.appendChild(model);
        detailCard.appendChild(size);
        detailCard.appendChild(limit);
        detailCard.appendChild(climatecontrol);
        
        card.appendChild(detailCard);
        cards.appendChild(card);

    });
}