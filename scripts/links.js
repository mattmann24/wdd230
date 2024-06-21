const baseURL = "https://mattmann24.github.io/wdd230/";
const linksURL = "https://mattmann24.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks()