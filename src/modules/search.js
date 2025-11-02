import getWeatherData from "./weatherData";

const searchQuery = document.getElementById("search-query");
const searchError = document.getElementById("search-error");
const searchForm = document.getElementById("search-form");

searchQuery.value = "";

export default async function addSearchAndValidate() {
	searchQuery.addEventListener("input", () => {
		searchQuery.value = searchQuery.value.trimStart();
		if (searchQuery.checkValidity()) {
			hideSearchError();
		}
	});

	searchForm.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (!checkSearchValidity(searchQuery)) {
			displaySearchError();
			return;
		}

		const query = searchQuery.value;
		console.log(query);
		try {
			const data = await getWeatherData(query, "metric");
			console.log(data);
		} catch (error) {
			console.error(error);
			displaySearchError();
			searchQuery.setCustomValidity("Invalid query!");
		} finally {
			searchQuery.setCustomValidity("");
		}
	});
}

function displaySearchError() {
	searchError.classList.remove("hidden");
	searchError.innerText = "Please enter a valid location!";
}

function hideSearchError() {
	searchError.classList.add("hidden");
	searchError.innerText = "";
}

function checkSearchValidity(searchEl) {
	searchEl.value = searchEl.value.trim();
	if (searchEl.checkValidity() && searchEl.value !== "") {
		hideSearchError();
		return true;
	} else {
		displaySearchError();
		return false;
	}
}
