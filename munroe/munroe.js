const slides = document.querySelectorAll(".slide");
counter=0;
slides.forEach((slide,index) => {
    slide.style.left = `${index *100}%`
})

const goPrev = () => {
    if(counter!=0){
    counter--
    slideImage()
    }
}


const goNext = () => {
    if(counter < slides.length-1){
    counter++
    slideImage()
}
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        })
}




// let modeSwitch = document.querySelector("#switch");
// let currMode = "Light";
// let body = document.querySelector("body");
// modeSwitch.addEventListener("click", () => {
//     if(currMode === "Light"){
//         currMode ="dark";
//         body.style.backgroundColor = "Black";   
//     }
//     else{
//         currMode="rgba(224, 245, 220, 0.811)";
//         body.style.backgroundColor = "rgba(224, 245, 220, 0.811)";
//     }

   
//})

 // OpenWeatherMap API details
 const apiKey = 'c853dba97b5216c8692ad467f81ee57c';
 const city = 'Thiruvananthapuram';  
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 // Fetch weather data
 fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
         const weatherElement = document.getElementById('weather');
         weatherElement.innerHTML = `
             <h2>Weather in ${data.name}</h2>
             <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
             <p><strong>Weather:</strong> ${data.weather[0].description}</p>
             <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
             <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
         `;
     })
     .catch(error => {
         document.getElementById('weather').innerHTML = '<h2>Error fetching weather data.</h2>';
         console.error('Error fetching weather data:', error);
     });


      function toggleContent() {
         var moreText = document.querySelector(".more-content");
         var dots = document.querySelector(".dots");
         var btnText = document.querySelector(".see-more-btn");
          if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            btnText.innerHTML = "See Less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            btnText.innerHTML = "See More";
        }
    }
            