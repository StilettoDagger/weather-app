export const unitToggleBtn = document.getElementById("unit-toggle");
let unitMode;
loadUnit();

function toggleUnit() {
	if (unitMode === "c") {
		applyUnit("f");
	} else {
		applyUnit("c");
	}
}

function applyUnit(unit) {
	if (unit === "c") {
		unitToggleBtn.setAttribute("aria-pressed", "false");
		unitToggleBtn.textContent = "°C";
		unitMode = "c";
	} else {
		unitToggleBtn.setAttribute("aria-pressed", "true");
		unitToggleBtn.textContent = "°F";
		unitMode = "f";
	}
}

function loadUnit() {
	const tempPref = localStorage.getItem("UNIT_MODE") || "c";
	applyUnit(tempPref);
}

function saveUnit(unit) {
	localStorage.setItem("UNIT_MODE", unit);
}

unitToggleBtn.addEventListener("click", () => {
	toggleUnit();
	saveUnit(unitMode);
});

export function getUnitMode() {
	return unitMode;
}
