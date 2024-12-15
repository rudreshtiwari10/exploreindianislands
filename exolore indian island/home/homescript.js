// List of pages and their URLs
const pages = [
    { name: "Andaman", url: "/Andaman/andaman.html" },
    { name: "Lakshadweep", url: "/lakshwadeep/lakshwadeep.html" },
    { name: "Munroe", url: "munroe.html" },
];

// References to DOM elements
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const suggestions = document.getElementById('suggestions');
const resultMessage = document.getElementById('resultMessage');

// Event: Show suggestions as user types
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase().trim();
    suggestions.innerHTML = '';

    if (query) {
        // Filter pages based on query
        const matches = pages.filter(page =>
            page.name.toLowerCase().includes(query)
        );

        // Show matching suggestions
        matches.forEach(page => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = page.name;
            suggestionItem.addEventListener('click', () => {
                // Redirect to the selected page
                window.location.href = page.url;
            });
            suggestions.appendChild(suggestionItem);
        });

        // Display suggestions list
        suggestions.style.display = matches.length > 0 ? 'block' : 'none';
    } else {
        // Hide suggestions if no query
        suggestions.style.display = 'none';
    }
});

// Event: Handle search button click
searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase().trim();

    // Check for an exact match
    const match = pages.find(page => page.name.toLowerCase() === query);

    if (match) {
        // Show clickable result
        resultMessage.innerHTML = `<a href="${match.url}" style="color: #6c63ff; text-decoration: none;">Go to ${match.name} page</a>`;
    } else {
        // Show "Page Not Found" message
        resultMessage.textContent = "Page Not Found";
    }

    // Clear suggestions
    suggestions.style.display = 'none';
});
// OpenWeatherMap API details
const apiKey = 'c853dba97b5216c8692ad467f81ee57c';
const city = 'Port Blair';  // Capital city of Andaman & Nicobar
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
//seemore button 
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