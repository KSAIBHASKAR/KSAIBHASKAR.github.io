// Api key = '7609722dfe38a0a1849c09d31e53fb10';

let weather = {
    apiKey: "7609722dfe38a0a1849c09d31e53fb10",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity ,pressure ,temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        const {visibility}=data;
        const {sunrise, sunset} = data.sys;
        console.log(name, icon, description, temp, humidity, speed, pressure, visibility, sunrise, sunset ,temp_min, temp_max)

        document.querySelector(".location span").innerHTML =  name;
        document.querySelector(".logo").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".descp").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp +" &degC";
        document.querySelector(".humidity span").innerHTML = humidity + " %";
        document.querySelector(".wind span").innerHTML = speed + " km/hr";
        document.querySelector(".pressure span").innerHTML = pressure + " mb";
        document.querySelector(".visible span").innerHTML = visibility + " m";
        document.querySelector(".sunrise h5").innerHTML = sunrise;
        document.querySelector(".sunset h5").innerHTML = sunset;
        document.querySelector(".maxtemp h5").innerHTML = temp_max +" &degC";
        document.querySelector(".mintemp h5").innerHTML = temp_min +" &degC";


    },

};







 function cityName(){
     const val=document.querySelector('input').value;
     return val;
 }

 function searchButton(){
     const val=cityName();
     weather.fetchWeather(val);

 }

 document.getElementById("searchbox").addEventListener("keyup" ,function(event){
    if(event.key == "Enter"){
     searchButton();

    }

 });







let newDate = new Date();
let dat = newDate.getDate();
let month = newDate.getMonth();
let day = newDate.getDay();
let yr = newDate.getFullYear();
arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
arr1 = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekDay = arr[day];
let fin = dat + " " + arr1[month] + " " + yr;


document.getElementById("newday").innerHTML = weekDay;
document.getElementById("newdate").innerHTML = fin;





let interval = setInterval(change,1000);
function change(){
    let strTime = "";
let date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
strTime = hours + ':' + minutes + ' ' + ampm;



document.getElementById("newtime").innerHTML = strTime;

}
