import fetchGif from "./fetchGif";
import { getUnitMode } from "./tempUnit";

export async function renderCurrentWeather(currentWeatherDiv, data) {
	const conditions = data.conditions;
	const gifURL = await fetchGif(`${conditions} weather`);
	const conditionsIconURL = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${data.icon}.svg`;
	currentWeatherDiv.innerHTML = `
    <img class="h-24" src="${conditionsIconURL}" alt="${data.icon}" />
    <p class="text-center text-2xl">${data.conditions}</p>
    <p class="text-center text-2xl">${data.temp}°${getUnitMode().toUpperCase()}</p>
    <img class="h-96 object-contain" src="${gifURL}" alt="GIF image showcasing ${conditions} weather" />
    `;
}
