const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forcastDay1 = document.querySelector('#forcastDay1');
const forcastDay2 = document.querySelector('#forcastDay2');
const forcastDay3 = document.querySelector('#forcastDay3');

const forcastTemp1 = document.querySelector('#forcastTemp1');
const forcastTemp2 = document.querySelector('#forcastTemp2');
const forcastTemp3 = document.querySelector('#forcastTemp3');

const forcastCaption1 = document.querySelector('.forcastIcon1');
const forcastCaption2 = document.querySelector('.forcastIcon2');
const forcastCaption3 = document.querySelector('.forcastIcon3');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.297&lon=-111.695&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc'
const urlForcast = "https://api.openweathermap.org/data/2.5/forecast?lat=40.297&lon=-111.695&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
            
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
async function apiFetchForcast() {
    try {
        const responseForcast = await fetch(urlForcast);
        if (responseForcast.ok) {
            const forcastData = await responseForcast.json();
            console.log(forcastData);
            displayThreeDayForcast(forcastData);
            
        }else {
            throw Error(await responseForcast.text());
        }
    }catch (error) {
        console.log(error);
    }
}

async function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
apiFetch();
apiFetchForcast();



async function displayThreeDayForcast(forcastData){
    forcastround1 = Math.round(forcastData.list[1].main.temp);
    forcastTemp1.innerHTML = `${forcastround1}&deg;F`;
    /*
    forcastTemp1.innerHTML = `${forcastData.list[0].main.temp}`;*/
    const iconsrc1 = `https://openweathermap.org/img/w/${forcastData.list[1].weather[0].icon}.png`;
    let forcastDesc1 = forcastData.list[1].weather[0].description;
    forcastIcon1.setAttribute('src', iconsrc1);
    forcastIcon1.setAttribute('alt', forcastDesc1);
    
    const dateStr1 = forcastData.list[1].dt_txt;
    const day1 = getDayName(dateStr1, "en-US");
    forcastDay1.innerHTML = day1;


    forcastround2 = Math.round(forcastData.list[9].main.temp);
    forcastTemp2.innerHTML = `${forcastround2}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/w/${forcastData.list[9].weather[0].icon}.png`;
    let forcastDesc2 = forcastData.list[9].weather[0].description;
    forcastIcon2.setAttribute('src', iconsrc2);
    forcastIcon2.setAttribute('alt', forcastDesc2);

    const dateStr2 = forcastData.list[9].dt_txt;
    const day2 = getDayName(dateStr2, "en-US");
    forcastDay2.innerHTML = day2;

    forcastround3 = Math.round(forcastData.list[17].main.temp);
    forcastTemp3.innerHTML = `${forcastround3}&deg;F`;
    const iconsrc3 = `https://openweathermap.org/img/w/${forcastData.list[17].weather[0].icon}.png`;
    let forcastDesc3 = forcastData.list[17].weather[0].description;
    forcastIcon3.setAttribute('src', iconsrc3);
    forcastIcon3.setAttribute('alt', forcastDesc3);

    const dateStr3 = forcastData.list[17].dt_txt;
    const day3 = getDayName(dateStr3, "en-US");
    forcastDay3.innerHTML = day3;
    
    }

    function getDayName(dateStr, locale) {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'short' });        
    }


