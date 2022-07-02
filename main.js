const api = {
    key: "1feabfbcb2ab90ed1f4d570897833b5d",
    base: "https://api.openweathermap.org/data/2.5/"
}

var searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
        console.log('Success');
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let icn = document.querySelector('.icon');
    icn.innerHTML = `<img src="Pictures/${weather.weather[0].icon}.png"/>`;

    // let icon = document.querySelector('.icon-1');
    // icon.innerHTML = `<img src="${weather.weather[0].icon}.png"/>`;

    let wind = document.querySelector('.attributes .wind-speed');
    wind.innerText = `${weather.wind.speed}`;

    let humidity = document.querySelector('.humid .humidity-value');
    humidity.innerHTML = `${weather.main.humidity}`;

    


    if (document.body) {
        console.log(weather.weather[0].main);
        if (weather.weather[0].main == "") {
            document.body.style.background = "url('Pictures/main.jpg') no-repeat bottom center ";
            document.body.style.backgroundSize = "cover";
        }
        else {
            if (weather.weather[0].main == "Haze") {
                document.body.style.background = "url('https://static01.nyt.com/images/2012/06/24/world/MALAYSIA/MALAYSIA-superJumbo.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Fog") {
                document.body.style.background = "url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/fog-on-a-country-road.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Smoke") {
                document.body.style.background = "url('https://th.bing.com/th/id/OIP.tQvz3SQ0ccQFS4UIpYiV-QHaEK?pid=ImgDet&rs=1') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Clouds") {
                document.body.style.background = "url('https://www.mlive.com/resizer/5ng_jX_bODTZeqF_dt_FoIy8jyI=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/kzgazette_impact/photo/sunny-partly-cloudyjpg-bbb908f7f94cd181.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Mist") {
                document.body.style.background = "url('https://images.unsplash.com/photo-1578390986741-4e08df07e94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9nZ3klMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Clear") {
                document.body.style.background = "url('https://www.gannett-cdn.com/-mm-/6ceafe67699e9fd6ca0749f5be24fd8b3c343fcb/c=0-26-507-311/local/-/media/FortMyers/2014/12/08/B9315415807Z.1_20141208164230_000_GI99BRCAH.1-0.jpg?width=3200&height=1680&fit=crop') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Snow") {
                document.body.style.background = "url('https://th.bing.com/th/id/R.71ba19502be51516af81dab27ce9f0c7?rik=qsuc1S0PX79xvQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f942615%2fthumbs%2fo-UK-WEATHER-SNOW-570.jpg%3f6&ehk=bce%2bUcUUOU5qkvkEgcHxaocYJaQo6Q66bqICtGJpt8U%3d&risl=&pid=ImgRaw&r=0') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";document.body.style.backgroundColor = "black";
            }
            if (weather.weather[0].main == "Rain") {
                document.body.style.background = "url('https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";document.body.style.backgroundColor = "black";
            }
        }
    }
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
