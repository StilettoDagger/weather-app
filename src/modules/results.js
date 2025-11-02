const resultsDiv = document.getElementById("results");
const loadingDiv = document.getElementById("loading");

export function showLoading() {
	loadingDiv.classList.remove("hidden");
	loadingDiv.classList.add("flex");
}

export function hideLoading() {
	loadingDiv.classList.add("hidden");
	loadingDiv.classList.remove("flex");
}

export function showResults(data) {
	resultsDiv.classList.remove("hidden");
	console.log(data);
}
