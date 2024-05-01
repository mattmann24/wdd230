function getYear(){
    const yearSpan = document.querySelector('#currentYear');
    const currentYear = new Date();
    yearSpan.innerText = currentYear.getFullYear();
    return currentYear;
}
function getModDate(){
    let oLastModif = new Date(document.lastModified);
    return oLastModif;
}