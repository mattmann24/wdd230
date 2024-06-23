const baseURL = "https://mattmann24.github.io/wdd230/";
const linksURL = "https://mattmann24.github.io/wdd230/data/links.json";


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok){
            const data = await response.json();
            displayLinks(data);
            console.log(data);
        }
        else {
            throw Error(await response.text);
        }
    } 
    catch (error) {
            console.log(error);
        }
        
    }

getLinks();


const displayLinks = (lessons) => {

    const assignmentList = document.querySelector(".activityLinks");
    if (!assignmentList){
        console.error("no .activityLinks found" );
    }

    lessons.forEach((lesson) => {
        const week = document.createElement("li");
        const label = document.createTextnode(`${lesson.week}:`);
        listItem.appendChild(label);
    
        lesson.links.forEach((link, index) => {
            const article = document.createElement('a');
            article.setAttribute('href', link.url);
            article.setAttribute('target, "_blank');
            article.textContent = link.title;

            week.appendChild(article);

            if (index < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }

        });
        
        assignmetList.appendChild(listItem);

    });
};


document.addEventListener("DOMContentLoaded", getLinks);