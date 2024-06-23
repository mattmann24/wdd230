const baseURL = "https://mattmann24.github.io/wdd230/";
const linksURL = "https://mattmann24.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();

/*
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let li = document.createElement("li");
        li.textContent = li + "| ";


        lesson.forEach(links => {
            let a = document.createElement("a");
            a.setAttribute("href", lesson.links.url);
            a.setAttribute("target", lesson.title);
            a.textContent = lesson.links.title + " | ";
            li.appendChild(a);
        });
        Activities.appendChild(li);
    });
}-->*/


const displayLinks = (lessons) => {

    const cardElement = document.querySelector(".classCard");

    lessons.lesson.forEach((lesson) => {
        const week = document.createElement("div");
        const label = document.createElement("h3");
        
        lesson.textContent = ` Week ${lesson} `;
        week.appendChild(label);
        
        lesson.links.forEach((link) => {
            let a = document.createElement("a");
            a.href = baseURL + link.url;
            a.textContent = ` | ${link.title} `;
            lesson.appendChild(a)
        });
        
        cardElement.appendChild(card)
    });

}