import getWeatherData from "./weatherData";
import {
	showLoading,
	getResults,
	hideLoading,
	showResults,
	clearResults,
	getCurrentWeatherData,
} from "./results";
import { unitToggleBtn, getUnitMode } from "./tempUnit";

const searchQuery = document.getElementById("search-query");
const searchError = document.getElementById("search-error");
const searchForm = document.getElementById("search-form");

searchQuery.value = "";

let searched = "";

export default async function addSearchAndValidate() {
	searchQuery.addEventListener("input", () => {
		searchQuery.value = searchQuery.value.trimStart();
		if (searchQuery.checkValidity()) {
			hideSearchError();
		}
	});

	searchForm.addEventListener("submit", handleSearching);

	unitToggleBtn.addEventListener("click", (e) => {
		if (
			!searchQuery.value.trim() ||
			searchQuery.value !== searched ||
			!getCurrentWeatherData()
		) {
			return;
		}
		handleSearching(e);
	});
}

async function handleSearching(e) {
	e.preventDefault();

	clearResults();

	if (!checkSearchValidity(searchQuery)) {
		displaySearchError();
		return;
	}

	const query = searchQuery.value;
	showLoading();
	try {
		const tempMode = getUnitMode() === "c" ? "metric" : "us";
		console.log(tempMode);
		const data = await getWeatherData(query, tempMode);
		getResults(data);
		showResults();
		searched = query;
	} catch (error) {
		console.error(error);
		displaySearchError();
		searchQuery.setCustomValidity("Invalid query!");
	} finally {
		searchQuery.setCustomValidity("");
		hideLoading();
	}
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
