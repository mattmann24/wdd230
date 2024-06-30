

var now  = new Date(); 

const weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[now.getDay()];

if (day == weekday[4] || day == weekday[5] || day == weekday[6] ||day == weekday[0]){
    document.querySelector(".banner").style.display = "none";
}
    else{

        document.querySelector(".bannerClose").addEventListener("click", function () {
            this.closest(".banner").style.display = "none";
        });
}
