// the below is not currently used but would be useful if we choose in the future to use regions
let getMoversByRegion = async function (regionCode) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?region=" + regionCode + "&lang=en",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "c147388137msh5aecc71df92365cp15e140jsn200cde844ea8"
        }
    }

    var dayGainers = [];
    var dayLosers = [];

    $.ajax(settings).done(function (response) {
        response.result.filter(function (item) {
            if (item.title.startsWith("Day Losers")) {
                item.quotes.forEach(stock => {
                    dayLosers.push(stock.symbol);
                });
            }
            if (item.title.startsWith("Day Gainers")) {
                item.quotes.forEach(stock => {
                    dayGainers.push(stock.symbol);
                });
            }
        })
    });

    return [dayLosers, dayGainers];
}



let getStockISINArrayForCountry = async function (countryName) {

    var ISINObject = {};
    var currency = countryToDollarMap[countryName];

    if (countryName === "Australia") {
        stockAustralia.forEach(async (stockSymbol) => {
            console.log("working on stock symbol: " + stockSymbol)
            var finnhubCompanyResponse = await callFinnhubCompanyApi(stockSymbol);
            ISINObject[stockSymbol] = JSON.parse(finnhubCompanyResponse).isin;
            await wait(5000);
        });
    }

    //given the ASX has 2400 stocks this should take about 40 minutes to complete. I've throttled it to one call per second to keep within
    //limits of how much i can call the api on a free license (60 calls per second)
    //after testing it i get a 429 status which is a rate limit error, so adjusted to a call per 10 seconds which seems to work but will take 8 hours to complete
    // will leave the code here as in the real world if this was a paid project we could use paid licenses and could make this work

    // var stockSymbols = await getStockSymbolsByCurrency(currency);

    // for (const symbol in stockSymbols) {
    //   if (stockSymbols.hasOwnProperty(symbol)) {
    //     console.log("working on stock symbol: " + symbol)
    //     var finnhubCompanyResponse = await callFinnhubCompanyApi(symbol);
    //     ISINObject[symbol] = JSON.parse(finnhubCompanyResponse).isin;
    //     await wait(10000);
    //   }
    // }

    localStorage.setItem("ISINObject", JSON.stringify(ISINObject));

    // console.log({finnhubCompanyResponse});
    // console.log(JSON.parse(finnhubCompanyResponse).isin);
}

let wait = async function (ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

let getStockSymbolsFromApi = async function () {
    var queryURL = "https://cloud.iexapis.com/ref-data/sectors"
        + "&token=" + ALTIEXCLOUDKEY;
    return $.ajax({
        url: queryURL,
        method: "GET"
    })
}

let getStockSymbolsByCurrency = async function (currency) {
    var exchangeResponse = await callExchangeApi();
    var finnhubExchangeCode = mapExchangeApiResponseToExchangeCode(exchangeResponse, currency);
    var exchangeSymbolsResponse = await callExchangeSymbolsApi(finnhubExchangeCode);
    var stockSymbols = mapExchangeSymbolsResponseToStockSymbols(exchangeSymbolsResponse);
    // var stockSymbolArray = Object.keys(stockSymbols);
    console.log(stockSymbols[0]);
    return stockSymbols;
}

let callExchangeApi = async function () {
    var queryURL = "https://finnhub.io/api/v1/stock/exchange?token=" + FINNHUBKEY
    return $.ajax({
        url: queryURL,
        method: "GET"
    });
}

let mapExchangeApiResponseToExchangeCode = function (exchangeApiResponse, currency) {
    //filter to get the exchange code 
    var exchange = (exchangeApiResponse.filter(function (item) {
        if (item.currency === currency) {
            return (item);
        }
    }));

    var finnhubExchangeCode = exchange[0].code;
    return finnhubExchangeCode;
}

let callExchangeSymbolsApi = async function (finnhubExchangeCode) {

    var queryURL = "https://finnhub.io/api/v1/stock/symbol?exchange=" + finnhubExchangeCode
        + "&token=" + FINNHUBKEY
    return $.ajax({
        url: queryURL,
        method: "GET"
    });
}

let mapExchangeSymbolsResponseToStockSymbols = function (exchangeSymbolsResponse) {
    stockSymbols = {};
    exchangeSymbolsResponse.forEach(stock => {
        //var symbol = (stock.symbol.split(".")[0]) // this would be to get the locally relevent symbol i.e. BHP
        var symbol = stock.symbol //this gets the finnhub unique code i.e. BHP.AX where .AX means the aus BHP stock
        stockSymbols[symbol] = stock.description
    });
    return stockSymbols;
    //this returns an object with the keys as symbols and company name as values i.e.
    //  stockSymbols {
    //  YAL.AX: 'Yancoal Australia Ltd',
    //  YANK.AX: 'BETAYANK/FD' 
    //  }
}

let callFinnhubCompanyApi = function (finnhubStockSymbol) {
    //only works with finnhub
    var queryURL = "https://finnhub.io/api/v1/stock/profile?symbol=" + finnhubStockSymbol
        + "&token=" + FINNHUBKEY
    return $.ajax({
        url: queryURL,
        method: "GET"
    });
}

let getBatchStockQuotes = async function (stockSymbolArray) {
    //aapl%2Cfb%2Ctsla
    var queryURL = "https://cloud.iexapis.com/stable/stock/market/batch?" +
      "symbols=" + stockSymbolArray.join(",") +
      "&types=chart" +
      "&token=" + ALTIEXCLOUDKEY
  
    return $.ajax({
      url: queryURL,
      method: "GET"
    })
  
  }