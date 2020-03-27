const ALPHAVANTAGEKEY = "IXMGIC5PG1TECNCZ"
const IEXClOUDKEY = "pk_52d0f60a5213467ba11ea8c961508026"
const ALTIEXCLOUDKEY = "pk_c314d3eadf7b46149d92dde9913bb352";

var countryList = ["Australia","United States of America"]

var countryToDollarMap = {
    Australia: "AUD",
    "United States of America": "USD"
};

let mapApiToVirusObject = function (ajaxResponse) {
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

let getVirusStatsByCountry = function (country) {
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

var createChart = function (totalStats) {
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

//const ALPHAVANTAGEKEY = "IXMGIC5PG1TECNCZ"
// const IEXClOUDKEY = "pk_52d0f60a5213467ba11ea8c961508026"
//const ALTIEXCLOUDKEY = "pk_c314d3eadf7b46149d92dde9913bb352";
// jaybshinsen@gmail.com key
//const IEXClOUDKEY = "pk_6ccbe9aa36734e5fb754442deb8b4b1d"

// // $(document).ready(function () {

// //   // Corona Virus APi
// //   var queryURL = "https://api.covid19api.com/countries";

// //   $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     })

// //     .then(function (response) {
// //       //console.log(queryURL);
// //       //console.log(response);
// //     });




// //   // BUILD GAIN



// //   $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     })
// //     .then(function (response) {
// //       //console.log(queryURL);
// //       //console.log(response);

// //       var gains = [];

// //       for (var i = 0; i <= 3; i++) {
// //         gains.push(response[i].symbol);
      
//         if (gains.length > 3) {
//           gains.length = 3;
//         }
//         localStorage.setItem('gains', JSON.stringify(gains));
//        //var previousInput = JSON.parse(window.localStorage.getItem('gains'));

//       }

//   // Gains1 history     
//       gainURL1 = "https://cloud.iexapis.com/stable/stock/" + gains[0] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d";

// $.ajax({
//     url: gainURL1,
//     method: "GET"
//   })
//   .then(function (response) {
//     //console.log(queryURL);
//     //console.log(response);

//     for (var i = 0; i <= (response).length; i++) {
//       var dataGain1 = JSON.parse(localStorage.getItem('dataGain1')) || [];
//       dataGain1.push(response[i].close);
//       localStorage.setItem('dataGain1', JSON.stringify(dataGain1));
//     }
// });

// //       }

//   var gainURL2 = "https://cloud.iexapis.com/stable/stock/" + gains[1] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d";

// // $.ajax({
// //     url: gainURL1,
// //     method: "GET"
// //   })
// //   .then(function (response) {
// //     //console.log(queryURL);
// //     //console.log(response);

// //     for (var i = 0; i <= (response).length; i++) {
// //       var dataGain1 = JSON.parse(localStorage.getItem('dataGain1')) || [];
// //       dataGain1.push(response[i].close);
// //       localStorage.setItem('dataGain1', JSON.stringify(dataGain1));
// //     }
// // });

// // // Gain2 history

// //   var gainURL2 = "https://cloud.iexapis.com/stable/stock/" + gains[1] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026";


// // $.ajax({
// //     url: gainURL2,
// //     method: "GET"
// //   })
// //   .then(function (response) {
// //     //console.log(queryURL);
// //     //console.log(response);

// //     var dataGain2 = [];

//   var gainURL3 = "https://cloud.iexapis.com/stable/stock/" + gains[2] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d";

//       localStorage.setItem('dataGain2', JSON.stringify(dataGain2));
//     }
// });


// // Gain3 history

//   var gainURL3 = "https://cloud.iexapis.com/stable/stock/" + gains[2] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026";


// $.ajax({
//     url: gainURL3,
//     method: "GET"
//   })
//   .then(function (response) {
//     //console.log(queryURL);
//     //console.log(response);

//     var dataGain3 = [];

//     for (var i = 0; i <= (response).length; i++) {
//       dataGain3.push(response[i].close);

//       localStorage.setItem('dataGain3', JSON.stringify(dataGain3));
//     }
// });

//     var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/losers?";
//     queryParams.token = "pk_6ccbe9aa36734e5fb754442deb8b4b1d";
//     queryParams.displayPercent = "true";
//     return queryURL + $.param(queryParams)
//   }
//   var queryURL = buildLose();


// // // BUILD LOSES

// //   function buildLose() {
// //     var queryParams = {};

// //     var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/losers?";
// //     queryParams.token = "pk_52d0f60a5213467ba11ea8c961508026";
// //     queryParams.displayPercent = "true";
// //     return queryURL + $.param(queryParams)
// //   }
// //   var queryURL = buildLose();

// // Lose1 History

// var losesURL1 = "https://cloud.iexapis.com/stable/stock/" + loses[0] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d"

// //         if (loses.length > 3) {
// //           loses.length = 3;
// //         }
// //         localStorage.setItem('loses', JSON.stringify(loses));
// //         //var previousInput = JSON.parse(window.localStorage.getItem('loses'));
// //       }
// //       //console.log(previousInput);


// // // Lose1 History
// // var losesURL1 = "https://cloud.iexapis.com/stable/stock/" + loses[0] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026"

// // $.ajax({
// //     url: losesURL1,
// //     method: "GET"
// //   })
// //   .then(function (response) {
// //     //console.log(queryURL);
// //     //console.log(response);

// //     var dataLose1 = [];

// //     for (var i = 0; i <= (response).length; i++) {
// //       dataLose1.push(response[i].close);

//   var losesURL2 = "https://cloud.iexapis.com/stable/stock/" + loses[1] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d"


// // // Lose2 History

// //   var losesURL2 = "https://cloud.iexapis.com/stable/stock/" + loses[1] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026"

// // $.ajax({
// //     url: losesURL2,
// //     method: "GET"
// //   })
// //   .then(function (response) {
// //     //console.log(queryURL);
// //     //console.log(response);

// //     var dataLose2 = [];

// //     for (var i = 0; i <= (response).length; i++) {
// //       dataLose2.push(response[i].close);

// var losesURL3 = "https://cloud.iexapis.com/stable/stock/" + loses[2] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d"


// // // Lose3 History

// // var losesURL3 = "https://cloud.iexapis.com/stable/stock/" + loses[2] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026"

//       localStorage.setItem('dataLose3', JSON.stringify(dataLose3));
//     }
// });

  
// // });

// });

let mapStockChartToChartObject = function(stockChartAjaxResponse) {

    console.log({stockChartAjaxResponse});
    
    //define a local object to store the dates and prices
    var stockChartObject= {};

    stockChartAjaxResponse.forEach(day => {
        stockChartObject[day.date] = day.close;
    });

    //now you have a stockChartObject that you can use to load the chart. the console log below shows the format of it
    console.log({stockChartObject});
    
}

let getStockChart = function(stockSymbol) {
    var queryURL = "https://cloud.iexapis.com/stable/stock/" + stockSymbol + "/chart?"
    + "&token=" + ALTIEXCLOUDKEY;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(mapStockChartToChartObject);
}

let mapGainersAjaxResponseToStockGainArray = function(gainersAjaxResponse){
    
    var stockGainArray = [];

    for (var index = 0; index < 3; index++) {
        var symbol = gainersAjaxResponse[index].symbol
        stockGainArray.push(symbol);
    }
    console.log({stockGainArray});

    stockGainArray.forEach(stock => {
        getStockChart(stock);
    });
}

let openTab = function(event) {

    if ($(this).attr("id") === "stock-market-tab") {
        $("#currency-data-div" ).hide();
        $("#currency-tab").removeClass("is-active");
        $("#financial-data-div" ).show();
    } else if ($(this).attr("id") === "currency-tab") {
        $("#financial-data-div" ).hide();
        $("#stock-market-tab").removeClass("is-active");
        $("#currency-data-div" ).show();
    }
    
    //do a remove then an add so it doesnt get doubled up
    $(this).removeClass("is-active").addClass("is-active")
    
}

let callCurrencyApi = function(fromCurrencySymbol,toCurrencySymbol){
    //use alpha vantage for this to reduce the load on iex cloud so we dont run out of calls
    var queryURL = "https://www.alphavantage.co/query?function=FX_DAILY" + 
    "&from_symbol=" + fromCurrencySymbol +
    "&to_symbol=" + toCurrencySymbol +
    "&apikey=" + ALPHAVANTAGEKEY +
    "&datatype=json" //it's json by default but just to be safe

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(mapCurrencyAjaxResponseToCurrencyObject,null);

}

let mapCurrencyAjaxResponseToCurrencyObject = function(currencyAjaxResponse){
    //map the ajax response to an object that has the two basic properties we want for the chart
    var currencyMonthObject = {};
    var ajaxMonthObject = (currencyAjaxResponse["Time Series FX (Daily)"]);
    var label = currencyAjaxResponse["Meta Data"]["2. From Symbol"] + " to " + currencyAjaxResponse["Meta Data"]["3. To Symbol"]

    //we want the for loop to countdown from 30 to 0 so it's ordered oldest first to newest last
    for (let index = 29; index > -1; index--) {
        var day = Object.keys(ajaxMonthObject)[index];
        var closePriceForToday = ajaxMonthObject[day]["4. close"]
        currencyMonthObject[day] = closePriceForToday;
    }

    renderCurrencyMonthToChart(currencyMonthObject,label);
}

let renderCurrencyMonthToChart = function(currencyMonthObject,label){
    var ctx = document.getElementById('currency-graph').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Object.keys(currencyMonthObject),
        datasets: [{
            label: label,
            data: Object.values(currencyMonthObject),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
            }]
        },
    });
}

let populateCountryDropDown = function(){
    countryList.forEach(country => {
        console.log({country});
        $("#select-country").append($("<option>").text(country).attr("id",country))
    });
}

let populateCurrencyData = function(country){
    var fromCurrencySymbol = countryToDollarMap[country];
    //hardcoded for now
    var toCurrencySymbol = "USD"
    callCurrencyApi(fromCurrencySymbol,toCurrencySymbol);
}

let searchCountryStats = function(){
    var selectedCountry = $("#select-country").children("option:selected").text();
    if (selectedCountry === "Select a Country") {
        //if they havent selected a country do nothing
        return;
    }

    //populate the currency data
    populateCurrencyData(selectedCountry);
    //populate the corona virus data

    //populate the stock data

}

let OnInit = function(){
    $("#currency-data-div" ).hide();
    populateCountryDropDown();
}

$("#select-country").on("change",function(){
    
    $(this).children().removeAttr("selected")
    $(this).children("#" + this.value).attr("selected", true)

});

$("#stock-market-tab").on("click",openTab)
$("#currency-tab").on("click",openTab)  
$("#search-location-button").on('click',searchCountryStats)

OnInit();

let buildGainURL = function() {
    var queryParams = {};
    var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/gainers?";
    // queryParams.token = "pk_52d0f60a5213467ba11ea8c961508026";
    queryParams.token = ALTIEXCLOUDKEY;
    queryParams.displayPercent = "true";
    return queryURL + $.param(queryParams)
}

var url = buildGainURL();

let getTopGainersFromAjax = function() {
    $.ajax({
        url: url,
        method: "GET"
      }).then(mapGainersAjaxResponseToStockGainArray);
}
