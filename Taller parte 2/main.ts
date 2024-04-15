// main.js
import { series } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const seriesList = series; // Asumiendo que 'series' es el array importado de data.ts
  const tableBody = document.getElementById("series-table");
  const average =
    series.reduce((total, serie) => total + serie.seasons, 0) / series.length;

  if (tableBody) {
    tableBody.innerHTML += `
          <tr>
              <td colspan="4">Average Seasons: ${Math.round(average)}</td>
          </tr>`;
  }

  seriesList.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${serie.id}</td>
            <td class="nombre-serie">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    // Añadir manejador de evento clic a la fila
    row.addEventListener("click", () => {
      displaySerieDetail(serie);
    });
    if (tableBody) {
      tableBody.appendChild(row);
    }
    });

    
  
});

function displaySerieDetail(serie: any) {
  const detailDiv = document.getElementById("serie-detail");

  if (detailDiv) {
    detailDiv.style.display = "block";
    detailDiv.innerHTML = `
            <div class="card">
                <img src="${serie.imageUrl}" class="card-img-top" alt="Image of ${serie.name}">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.link}" class="btn btn-primary">More Info</a>
                </div>
            </div>
        `;
  }
}
