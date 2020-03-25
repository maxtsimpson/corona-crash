const ALPHAVANTAGEKEY = "IXMGIC5PG1TECNCZ"
const IEXClOUDKEY = "pk_52d0f60a5213467ba11ea8c961508026"

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// let getVirusStatsByCountry = async function(country){
    
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=" + country,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
//             "x-rapidapi-key": "c147388137msh5aecc71df92365cp15e140jsn200cde844ea8"
//         }
//     }

//     $.ajax(settings).done(function (response) {
//         var totalInfected = 0;
//         response.data.covid19Stats.forEach(location => {
//             totalInfected += location.confirmed;
//         });
        
        
//         console.log(response);
//     });

//     // api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={your api key}
//     //the only issue is the daily forecast needs a paid subscription, so we get a 3 hourly

//     $.ajax({
//     url: queryURL,
//     method: "GET"
//     })
//     .then(renderWeatherFromAjax,null);
//     //then just wants the name of the call back functions for args, not an actual call itself - no ()
// }

function openTab(event) {
    
    console.log($(this).attr("id"));
    console.log($(this).attr("id") === "stock-market-tab");
    // console.log(event.target.text === "Stock Market");

    // if (event.target.text === "Stock Market") {
        
    // } else if ((event.target.text === "Stock Market"))



    if ($(this).attr("id") === "stock-market-tab") {
        console.log("clicked stock market");
        $("#currency-data-div" ).hide();
        $("#currency-tab").removeClass("is-active");
        $("#financial-data-div" ).show();
    } else if ($(this).attr("id") === "currency-tab") {
        console.log("clicked currency");
        $("#financial-data-div" ).hide();
        $("#stock-market-tab").removeClass("is-active");
        $("#currency-data-div" ).show();
    }
    
    //do a remove then an add so it doesnt get doubled up
    $(this).removeClass("is-active").addClass("is-active")



    //set the clicked tab to is-active
    // $(event.target).addClass("is-active")
    //show the correct div
    // $( "#tabName" ).show()

    // var i, x, tablinks;
    // x = document.getElementsByClassName("content-tab");
    // for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tab");
    // for (i = 0; i < x.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    // }
    // document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " is-active";
  }

  $("#stock-market-tab").on("click",openTab)
  $("#currency-tab").on("click",openTab)
  
//   $("#stock-market-tab").on("click",openTab(event,'financial-data-div'))
//   $("#stock-market-tab").on("click",openTab(event,'currency-data-div'))