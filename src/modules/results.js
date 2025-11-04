const resultsDiv = document.getElementById("results");
const loadingDiv = document.getElementById("loading");
const weatherDays = [];

import WeatherDay from "./weatherDay";

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
		weatherDays.push(new WeatherDay(day, resultsDiv));
	});
	console.log(data);
}

export function showResults() {
	resultsDiv.classList.remove("hidden");
	resultsDiv.classList.add("grid");
	weatherDays.forEach((day) => {
		day.render();
	});
}

export function clearResults() {
	resultsDiv.classList.add("hidden");
	resultsDiv.classList.remove("grid");
	resultsDiv.innerHTML = "";
	weatherDays.length = 0;
}
