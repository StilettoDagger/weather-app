const resultsDiv = document.getElementById("results");
const currentWeatherDiv = document.getElementById("current-weather");
const weatherDaysDiv = document.getElementById("weather-days");
const loadingDiv = document.getElementById("loading");
let currentWeatherData = null;

const weatherDays = [];

import WeatherDay from "./weatherDay";
import { renderCurrentWeather } from "./currentWeather";

export function showLoading() {
	loadingDiv.classList.remove("hidden");
	loadingDiv.classList.add("flex");
}

export function hideLoading() {
	loadingDiv.classList.add("hidden");
	loadingDiv.classList.remove("flex");
}

export function getResults(data) {
	const days = data.days;
	days.forEach((day) => {
		weatherDays.push(new WeatherDay(day, weatherDaysDiv));
	});
	currentWeatherData = data.currentConditions;
	console.log(currentWeatherData);
	console.log(data);
}

export function showResults() {
	resultsDiv.classList.remove("hidden");
	resultsDiv.classList.add("flex");
	weatherDays.forEach((day) => {
		day.render();
	});
	renderCurrentWeather(currentWeatherDiv, currentWeatherData);
}

export function clearResults() {
	resultsDiv.classList.add("hidden");
	resultsDiv.classList.remove("flex");
	currentWeatherDiv.innerHTML = "";
	weatherDaysDiv.innerHTML = "";
	currentWeatherData = null;

	weatherDays.length = 0;
}

export function getCurrentWeatherData() {
	return currentWeatherData;
}
