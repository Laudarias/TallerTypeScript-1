import { series } from "./data.js";
const seriesTbody = document.getElementById('series');
const avarageSeasons = document.getElementById('avarage-seasons');
renderSeriesInTable(series);
avarageSeasons.innerHTML = `${getAvarageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${s.id}</th>
                                <td>${s.name}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAvarageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((s) => totalSeasons += s.seasons);
    return "Seasons avarage: " + totalSeasons / series.length;
}
