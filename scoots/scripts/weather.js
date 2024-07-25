const currentTemp = document.querySelector('#currentTemp');
const currentHumid = document.querySelector('#currentHumid');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const weatherTitle = document.querySelector('#weatherTitle');
const mainTitle = document.querySelector('#mainTitle');
const maxTemp = document.querySelector('#maxTemp');

const tomorrowTemp = document.querySelector('#tomorrowTemp');
const tomorrowHumid = document.querySelector('#tomorrowHumid');
const tomorrowIcon = document.querySelector('#tomorrowIcon');
const tomorrowTitle = document.querySelector('#tomorrowTitle');
const tomorrowMainTitle = document.querySelector('#tomorrowMainTitle');


/*const urlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.441657432370608&lon=-86.9195863139801&cnt=2&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc'*/
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.44165743237060&lon=-86.9195863139801&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc';
const urlForcast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.441657432370608&lon=-86.9195863139801&units=imperial&appid=54df2e2c323acaf99ee1cee513fc00bc";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
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
            
            tomorrowForcast(forcastData);
            
        }else {
            throw Error(await responseForcast.text());
        }
    }catch (error) {
        console.log(error);
    }
    
}

async function displayResult(data) {
    const currentTempdata = data.main.temp;
    const title = data.weather[0].main;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const maxTempdata = data.main.temp_max;

    maxTempRound = Math.round(maxTempdata);

    weatherRound = Math.round(currentTempdata);
    

    currentHumid.textContent = `Humidity ${humidity}%`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherTitle.textContent = `${desc}`;
    currentTemp.innerHTML = `Temperature ${weatherRound}&deg;F `;
    mainTitle.textContent = `${title}`
    maxTemp.innerHTML = `${maxTempRound}&deg;F `;


}
apiFetch();

apiFetchForcast();



async function tomorrowForcast(forcastData){
    

    try{
        let dateobj = new Date();
        let monthobj = new Date();
        let yearobj = new Date();
        let date = dateobj.getDate();
        let month = monthobj.getMonth();
        let year = yearobj.getFullYear();
        month = month + 1 ; /*Correcting the array starting from 0*/
        if(month < 10 ){
            month = `0${month}`
        }
        

        let tomorrow = date + 1;
        if (month == 1 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 3 && tomorrow > 31){
        tomorrow = 1;
        }
        else if (month == 6 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 7 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 8 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 10 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 12 && tomorrow > 31){
            tomorrow = 1;
        }
        else if (month == 2 && tomorrow > 28){
            tomorrow = 1;
        }
        else if ( month == 4 && tomorrow>30){
            tomorrow = 1;
        }
        else if (month == 6 && tomorrow > 30){
            tomorrow = 1;
        }
        else if (month == 9 && tomorrow > 30){
            tomorrow = 1;
        }
        else if (month == 11 && tomorrow > 30){
            tomorrow = 1;
        }
        
        
    
        let dateTime = `${year}-${month}-${tomorrow} 15:00:00`;
        
        let  i = 0;

        let forcastDate = forcastData.list[i].dt_txt;
        
        do {
            if (forcastDate == dateTime){


            }
            else {
                i++;
              
                forcastDate = forcastData.list[i].dt_txt;
            

            };
        }
        while (forcastDate != dateTime);
        
        forcastTemperature = forcastData.list[i].main.temp;
        forcastRound = Math.round(forcastTemperature);
        
        
        forcastHumid = forcastData.list[i].main.humidity;
        const iconsrc1 = `https://openweathermap.org/img/w/${forcastData.list[i].weather[0].icon}.png`;
        let forcastDesc1 = forcastData.list[i].weather[0].description;
        tomorrowIcon.setAttribute('src', iconsrc1);
        tomorrowIcon.setAttribute('alt', forcastDesc1);
        tomorrowMainTitleData = forcastData.list[i].weather[0].main;
        
        tomorrowTitle.textContent = `${forcastDesc1}`;
        tomorrowTemp.innerHTML = `Temperature: ${forcastRound}&deg;F `;
        tomorrowHumid.textContent = `Humidity: ${forcastHumid}%`;
        tomorrowMainTitle.textContent = `${tomorrowMainTitleData}`;
        
    }catch (error){
        console.log(error);
    }

    
}


function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });        
}