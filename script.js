//declararing variables
var x=0;
function getInputValue(){
    
    var input_city = document.querySelector("#input_city").value ;
    if(input_city.value != ""){
        var city = input_city;
        console.log("City: "+city);
    }
    

//grabbing json response data
fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&APPID=835dcd4a7669f40985e9fc8db86a9638")
.then(response => response.json())
.then(data =>{
    console.log(data)

    //grabbing individual data holders
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";    
    var weather = data.weather[0].description;
    var temp = data.main.temp;
    

    //setting data into html
    document.getElementById("weather-icon").setAttribute("src", icon);
    document.getElementById("city").innerHTML = city;
    document.getElementById("weather").innerHTML = weather ;
    document.getElementById("temp").innerHTML = temp + "&degc";

    const cloudyWeathers = ['broken clouds', 'overcast clouds','haze','scattered clouds','few clouds'];
    const rainyWeathers = ['rainy','light rain','moderate rain']
    const sunnyWeathers = ['clear sky']

    console.log(weather)
    if(cloudyWeathers.includes(weather)){
        console.log('heloo')
        document.querySelector('body').style.background = "url('img/cloudy.jpg')"
    }
    else if(rainyWeathers.includes(weather)){
        document.querySelector('body').style.background = "url('img/rainy.jpg')"
        document.querySelector('#input_city').style.color = "white"
        document.querySelector('#city').style.color = "white"
    }
    else if(sunnyWeathers.includes(weather)){
        document.querySelector('body').style.background = "url('img/blue-sky.png')"
        document.querySelector('#city').style.color = "black"
        document.querySelector('#weather').style.color = "black"
    }
    document.querySelector('body').style.backgroundSize = "cover";
})

}



