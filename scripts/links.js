const baseUrl = "https://mattmann24.github.io/wdd230/";
const linksURL = "https://mattmann24.github.io/wdd230/data/links.json";

async function getLinks() {
  
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.lessons); 
    
 
}

getLinks(); 

function displayLinks(weeks) {
    const ul = document.querySelector("activityLinks");
  
    
    const weeksMap = {};
  
    
    weeks.forEach(week => {
      
      if (!weeksMap[week.lesson]) {
        weeksMap[week.lesson] = [];
      }
      
      weeksMap[week.lesson].push(...week.links);
    });
  
    // Now, create the list items for each week
    for (const [weekNumber, links] of Object.entries(weeksMap)) {
      const weekLi = document.createElement("li");
      const weekTitle = document.createElement("h5");
      weekTitle.textContent = `Week ${weekNumber}`;
      weekLi.appendChild(weekTitle);
  
      // Create a sublist for the lessons in this week
      const lessonUl = document.createElement("ul");
      links.forEach(link => {
        const lessonLi = document.createElement("li");
        const lessonA = document.createElement("a");
        lessonA.href = baseUrl + link.url;
        lessonA.textContent = link.title;
        if (link.target) {
          lessonA.target = link.target;
        }
        lessonLi.appendChild(lessonA);
        lessonUl.appendChild(lessonLi);
      });
  
      weekLi.appendChild(lessonUl);
      ul.appendChild(weekLi);
    }
  }
  