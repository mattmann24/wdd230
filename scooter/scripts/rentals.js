const baseUrl = "https://mattmann24.github.io/wdd230/scooter";
const url ="https://mattmann24.github.io/wdd230/scooter/data/rental.json";

const cards = document.querySelector('#rentalCards');
const table = document.querySelector('#rentalInfo');

async function getRentalsData() {
    const response = await fetch(url);
    const data = await response.json();

    displayRentals(data.rentals);
    console.table(data.members);

    displayTable(data.rentals);

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
        rentalImg.setAttribute('alt', `Image of ${type} and/with ${size} logo`);
        rentalImg.setAttribute('loading', 'lazy');
        rentalImg.setAttribute('width', '300');
        rentalImg.setAttribute('height', 'auto');

        card.setAttribute('class', 'rentalCard');
        detailCard.setAttribute('class', 'detailCard');

        card.appendChild(type);
        card.appendChild(rentalImg);
        
        detailCard.appendChild(model);
        detailCard.appendChild(size);
        detailCard.appendChild(limit);
        
        
        card.appendChild(detailCard);
        cards.appendChild(card);

    });
}
const displayTable = (rentals) => {
    rentals.forEach((rentals) => {
        let tr = document.createElement('tr');
        let th1body1 = document.createElement('th');
        th1body1.setAttribute('id', 'row');
        th1body1.setAttribute('scope', 'row');
        let td1body2 = document.createElement('td');
        let td1body3 = document.createElement('td');
        let td1body4 = document.createElement('td');
        let td1body5 = document.createElement('td');
        let td1body6 = document.createElement('td');

        th1body1.textContent= `${rentals.model}`
        td1body2.textContent= `${rentals.limit}`
        td1body3.textContent= `$${rentals.resHalfDay}`
        td1body4.textContent= `$${rentals.resFullDay}`
        td1body5.textContent= `$${rentals.halfDay}`
        td1body6.textContent= `$${rentals.fullDay}`

        tr.appendChild(th1body1);
        tr.appendChild(td1body2);
        tr.appendChild(td1body3);
        tr.appendChild(td1body4);
        tr.appendChild(td1body5);
        tr.appendChild(td1body6);

        table.appendChild(tr);

    });
}

