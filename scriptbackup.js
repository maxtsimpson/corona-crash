// Gain loop
var gains = JSON.parse(window.localStorage.getItem('gains'));

for (var i = 0; gains.length; i++) {
  var gainURL = "https://cloud.iexapis.com/stable/stock/" + gains[i] + "/chart?&token=pk_52d0f60a5213467ba11ea8c961508026"

  $.ajax({
      url: gainURL,
      method: "GET"
    })
    .then(function (response) {
      //console.log(queryURL);
      //console.log(response);

      var dataGain = [];

      for (var j = 0; j <= (response).length; j++) {
        dataGain[j] = [];
        dataGain[j].push(response[i].close);
        localStorage.setItem('dataGain', JSON.stringify(dataGain[i]));
      }
    });
}


// lose loop
var loses = JSON.parse(window.localStorage.getItem('loses'));

for (var i = 0; loses.length; i++) {
  var loseURL = "https://cloud.iexapis.com/stable/stock/" + loses[i] + "/chart?&token=pk_6ccbe9aa36734e5fb754442deb8b4b1d"

  $.ajax({
      url: loseURL,
      method: "GET"
    })
    .then(function (response) {
      //console.log(queryURL);
      //console.log(response);

      var dataLoses = [];

      for (var j = 0; j <= (response).length; j++) {
        dataLoses[j] = [];
        dataLoses[j].push(response[i].close);
        localStorage.setItem('dataLoses', JSON.stringify(dataLoses[i]));
      }
    });
}
