let mapApiToVirusObject = function(ajaxResponse){
    var totalInfected = 0;
    var totalRecovered = 0;
    var totalDeaths = 0;
        ajaxResponse.data.covid19Stats.forEach(location => {
            totalInfected += location.confirmed;
            totalRecovered += location.recovered;
            totalDeaths += location.deaths;
        });

        var totalStats = {
            infected: totalInfected,
            recovered: totalRecovered,
            deaths: totalDeaths
        }

        createChart(totalStats);
};



let getVirusStatsByCountry = function(country){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=" + country,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "c147388137msh5aecc71df92365cp15e140jsn200cde844ea8"
        }
    }
    $.ajax(settings).done(mapApiToVirusObject);
}


//console.log(response);



var createChart = function(totalStats) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: Object.keys(totalStats),
        datasets: [{
            label: 'Covid 19 Stats',
            data: Object.values(totalStats),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
});
}