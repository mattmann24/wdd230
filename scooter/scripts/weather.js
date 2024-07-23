const currentTemp = document.querySelector('#currentTemp');
const currentHumid = document.querySelector('#currentHumid');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const weatherTitle = document.querySelector('weatherTitle');

const tomorrowTemp = document.querySelector('#tomorrowTemp');
const tomorrowHumid = document.querySelector('#tomorrowHumid');
const tomorrowIcon = document.querySelector('#tomorrowIcon');
const tomorrowTitle = document.querySelector('tomorrowTitle');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.44165743237060&lon=-86.9195863139801&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc'
const urlForcast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.441657432370608&lon=-86.9195863139801&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc"

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
            tomorrowForcast(forcastData);
            
        }else {
            throw Error(await responseForcast.text());
        }
    }catch (error) {
        console.log(error);
    }
}

async function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const title = data.weather[0].main;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    const humidity = data.main.humidity;

    currentHumid.textContent = `${humidity}%`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherTitle.textContent = `${desc}`;
    mainTitle.textContent = `${title}`


}
apiFetch();
apiFetchForcast();


async function tomorrowForcast(forcastData){
    forcastround = Math.round(forcastData.list[8].main.temp);
    forcastTemp.innerHTML = `${forcastround}&deg;F`;

    const iconsrc1 = `https://openweathermap.org/img/w/${forcastData.list[1].weather[0].icon}.png`;
    let forcastDesc1 = forcastData.list[8].weather[0].description;
    tomorrowIcon.setAttribute('src', iconsrc1);
    tomorrowIcon.setAttribute('alt', forcastDesc1);

    tomorrowTitle.textContent = `${forcastDesc1}`;
    
    const dateStr1 = forcastData.list[8].dt_txt;
    const day1 = getDayName(dateStr1, "en-US");
    forcastDay1.innerHTML = day1;
    
    }


    
    function getDayName(dateStr, locale) {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'short' });        
    }


