
const displayVisits = document.querySelector(".visits");

let visitKey = "dateLastVisit-ls";
let lastVisit = Number(window.localStorage.getItem(visitKey)) || 0;

if (lastVisit !== 0) {
    let today = new Date();
    let last = new Date(lastVisit);
    let elapseTime = (today - last) / (1000 * 60 * 60 * 24);

    if (elapseTime >= 1) {
        displayVisits.textContent = `You last visited ${Math.floor(elapseTime)} days ago.`;
    } else {
        displayVisits.textContent = "Back so soon! Awesome!";
    }
} else {
    displayVisits.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("visitKey", Date.now());