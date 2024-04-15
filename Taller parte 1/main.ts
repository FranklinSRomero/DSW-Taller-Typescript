
import { Serie } from './Serie.js';

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json')
    .then(response => {
        
        return response.json();
    })
    .then(data => {
        const series: Serie[] = data.map((item: any) => new Serie(item.id, item.name, item.channel, item.seasons));
        const tableBody = document.getElementById('series-table');
        let totalSeasons = 0;
        
        series.forEach(serie => {
            totalSeasons += serie.seasons; 
            const row = `<tr>
                            <td>${serie.id}</td>
                            <td class="nombre-serie">${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>
                        </tr>`;
            if (tableBody) {
                tableBody.innerHTML += row;
            }
        });

        const average = totalSeasons / series.length;
        if (tableBody) {
            tableBody.innerHTML += `<tr>
                                    <td colspan="4">Average Seasons: ${average.toFixed(0)}</td>
                                </tr>`;
        }
    })
    
});
