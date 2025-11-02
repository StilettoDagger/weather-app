export default async function getWeatherData(location, tempMode) {
	const resp = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=${tempMode}&key=VBMF7J6LWC5KGCX4G55CFAE5H&contentType=json`
	);
	const weatherData = await resp.json();
	return weatherData;
}
