const baseUrl = "https://mattmann24.github.io/wdd230/";
const linksURL = "https://mattmann24.github.io/wdd230/data/links.json";

async function getLinks() {
  
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.lessons); 
    
 
}

function displayLinks(weeks) {
    const ul = document.getElementById("activityLinks");
  
    
    const weeksMap = {};
  
    
    weeks.forEach(week => {
      
      if (!weeksMap[week.lesson]) {
        weeksMap[week.lesson] = [];
      }
      
      weeksMap[week.lesson].push(...week.links);
    });
  
    
    for (const [weekNumber, links] of Object.entries(weeksMap)) {
      const weekLi = document.createElement("li");
      const weekTitle = document.createElement("h4");
      weekTitle.textContent = `Week ${weekNumber} | `;
      weekLi.appendChild(weekTitle);
  
      
      const lessonUl = document.createElement("ul");
      links.forEach(link => {
        
        
        const lessonA = document.createElement("a");
        lessonA.href = baseUrl + link.url;
        lessonA.textContent = link.title;
        
        if (link.target) {
          lessonA.target = link.target;
        }
        weekLi.appendChild(lessonA);
        lessonUl.appendChild(weekLi);
      });
  
      
      ul.appendChild(lessonUl);
    }
  }
  document.addEventListener("DOMContentLoaded", getLinks);