// main.js
import { series } from "./data.js";
document.addEventListener("DOMContentLoaded", function () {
    var seriesList = series; // Asumiendo que 'series' es el array importado de data.ts
    var tableBody = document.getElementById("series-table");
    var average = series.reduce(function (total, serie) { return total + serie.seasons; }, 0) / series.length;
    if (tableBody) {
        tableBody.innerHTML += "\n          <tr>\n              <td colspan=\"4\">Average Seasons: ".concat(Math.round(average), "</td>\n          </tr>");
    }
    seriesList.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td class=\"nombre-serie\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        // Añadir manejador de evento clic a la fila
        row.addEventListener("click", function () {
            displaySerieDetail(serie);
        });
        if (tableBody) {
            tableBody.appendChild(row);
        }
    });
});
function displaySerieDetail(serie) {
    var detailDiv = document.getElementById("serie-detail");
    if (detailDiv) {
        detailDiv.style.display = "block";
        detailDiv.innerHTML = "\n            <div class=\"card\">\n                <img src=\"".concat(serie.imageUrl, "\" class=\"card-img-top\" alt=\"Image of ").concat(serie.name, "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\">More Info</a>\n                </div>\n            </div>\n        ");
    }
}
