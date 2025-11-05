import { format, formatISO } from "date-fns";

export default class WeatherDay {
	constructor(data, resultsDiv) {
		this.conditions = data.conditions;
		this.temp = data.temp;
		this.tempMax = data.tempmax;
		this.tempMin = data.tempmin;
		this.date = new Date(data.datetime);
		this.resultsDiv = resultsDiv;
		this.icon = data.icon;
		this.bg = this.getBackgroundColor(this.conditions);
		this.imgURL = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${this.icon}.svg`;
	}

	getBackgroundColor(conditions) {
		if (conditions.includes("Clear")) {
			return "bg-radial from-orange-50 from-50% to-orange-200";
		} else if (conditions.includes("Rain")) {
			return "bg-radial from-cyan-100 from-50% to-blue-200";
		} else if (conditions.includes("Partially cloudy")) {
			return "bg-radial from-gray-50 from-50% to-gray-300";
		} else if (conditions.includes("Cloudy")) {
			return "bg-radial from-gray-100 from-50% to-gray-400";
		} else {
			return "bg-cyan-50";
		}
	}

	render() {
		const weatherCard = document.createElement("article");
		weatherCard.className = `flex flex-col gap-2 content-center p-4 ${this.bg} border rounded-xl shadow-lg`;
		weatherCard.setAttribute("role", "listitem");
		const dateText = format(this.date, "E, MMM d");
		const dateAttr = formatISO(this.date, { representation: "date" });
		const headingId = `date-${dateAttr}`;

		weatherCard.innerHTML = `
        <h3 id="${headingId}">
            <time datetime="${dateAttr}">${dateText}</time>
        </h3>
        <img class="h-16" src="${this.imgURL}" alt="${this.icon} icon" />
        <p class="text-center">
            <span class="sr-only">Conditions: </span>
            ${this.conditions}
        </p>
        <p class="text-center align-middle">
            <span class="sr-only">Current temperature: </span>
            <span class="icon-[material-symbols--thermometer] text-2xl align-middle" style="color: #00d000;"></span>
         ${this.temp}
        </p>
        <p class="text-center align-middle">
            <span class="sr-only">Maximum temperature: </span>
            <span class="icon-[material-symbols--thermostat-arrow-up] text-2xl align-middle" style="color: #d00;"></span> ${this.tempMax}
        </p>
        <p class="text-center align-middle">
            <span class="sr-only">Minimum temperature: </span>
            <span class="icon-[material-symbols--thermostat-arrow-down] text-2xl align-middle" style="color: #0000d0;"></span> ${this.tempMin}
        </p>
        `;
		weatherCard.setAttribute("aria-labelledby", headingId);
		this.resultsDiv.appendChild(weatherCard);
	}
}
