import { Serie } from './Serie.js';
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        var series = data.map(function (item) { return new Serie(item.id, item.name, item.channel, item.seasons); });
        var tableBody = document.getElementById('series-table');
        var totalSeasons = 0;
        series.forEach(function (serie) {
            totalSeasons += serie.seasons;
            var row = "<tr>\n                            <td>".concat(serie.id, "</td>\n                            <td class=\"nombre-serie\">").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>\n                        </tr>");
            if (tableBody) {
                tableBody.innerHTML += row;
            }
        });
        var average = totalSeasons / series.length;
        if (tableBody) {
            tableBody.innerHTML += "<tr>\n                                    <td colspan=\"4\">Average Seasons: ".concat(average.toFixed(0), "</td>\n                                </tr>");
        }
    });
});
