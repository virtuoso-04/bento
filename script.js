// Function to open the resume in a new tab
function openResume() {
    window.open('https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto', '_blank');
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

// Event listener for theme toggle
themeToggle.addEventListener("change", (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
});

// Load theme preference on page load
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.checked = theme === 'dark';
});

// Custom Cursor Effect
document.addEventListener("mousemove", function (e) {
    const cursor = document.querySelector("body::before");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`; // Format the time
}

// Update the clock immediately and then every second
// Update clock function
updateClock();
setInterval(updateClock, 1000);

// Function to fetch weather data
async function fetchWeather() {
    const apiKey = '06632d037bc3a179a7183d62af5f56c8'; // Your OpenWeatherMap API key
    const city = 'Bengaluru'; // Your desired city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Check if the response is successful
        if (data.cod === 200) {
            const weatherElement = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherElement.textContent = `Temperature: ${temperature}°C, Condition: ${description}`; // Fixed template literal
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        const weatherElement = document.getElementById('weather');
        weatherElement.textContent = `Error: ${error.message}`;
    }
}

// Fetch weather on page load
fetchWeather();


// Fetch weather on page load
fetchWeather();


// Function to change the carousel image automatically
function changeCarouselImage() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
setInterval(changeCarouselImage, 3000);

// Show the initial slide
showSlide(currentSlide);


// Set interval to change slides every 3 seconds
setInterval(changeCarouselImage, 1000);

// 3D Tilt Effect for Bento Boxes
VanillaTilt.init(document.querySelectorAll(".bento-box"), {
    max: 25,
    speed: 400
});
