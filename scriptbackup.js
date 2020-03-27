//enable JQUERY
$(document).ready(function () {


    // Corona Virus APi
    var queryURL = "https://api.covid19api.com/countries";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
      .then(function(response) {
        //console.log(queryURL);
        console.log(response);
      });
    
      var queryParams = {};
    
    
     // BUILD GAIN AJAX
    
      function buildGain() {
         
          var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/gainers?";
          queryParams.token = "pk_5db4c42244024da5be36585c0beb7a59";
          queryParams.displayPercent = "true"; 
          return queryURL + $.param(queryParams)
      }
      var queryURL = buildGain();
      
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        //console.log(queryURL);
        console.log(response);
    
        var gains = [];
    
        for (var i = 0; i <= 3; i++) {
          $("#gain"+i).text(response[i].symbol);
            gains.push(response[i].symbol);
            //console.log(loses);
            if (gains.length > 3) {
              gains.length = 3;
            }
            localStorage.setItem('gains', JSON.stringify(gains));
            var previousInput = JSON.parse(window.localStorage.getItem('gains'));
            
        }
        console.log(previousInput);
      });
    
      // BUILD GAIN LOSES
    
      function buildLose() {
         
        var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/losers?";
        queryParams.token = "pk_5db4c42244024da5be36585c0beb7a59";
        queryParams.displayPercent = "true"; 
        return queryURL + $.param(queryParams)
    }
    var queryURL = buildLose();
    
    
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
      //console.log(queryURL);
      console.log(response);
    
      var loses = [];
    
      for (var i = 0; i <= 3; i++) {
        $("#lose"+i).text(response[i].symbol);
          loses.push(response[i].symbol);
          //console.log(loses);
          if (loses.length > 3) {
            loses.length = 3;
          }
          localStorage.setItem('loses', JSON.stringify(gains));
          var previousInput = JSON.parse(window.localStorage.getItem('loses')); 
      }
      console.log(previousInput);
    });
    
    var gains = JSON.parse(window.localStorage.getItem('gains'));
    console.log(gains[0]);
    
    
    });
    
    // GainOne History
    
    function buildGainOne() {
    
      var gains = JSON.parse(window.localStorage.getItem('gains'));
      var gainOneEl = gains[0];
    
      var queryURL = "https://cloud.iexapis.com/stable/stock/" + gainOneEl + "/chart?token=pk_5db4c42244024da5be36585c0beb7a59";
      return queryURL 
    }
    var queryURL = buildGainOne();
    
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
    console.log(queryURL);
    console.log(response);
    
    var gainOneHistory = [];
    
    for (var i = 0; i <= 3; i++) {
      
        loses.push(response[i].symbol);
        //console.log(loses);
       
       
    }
    console.log(previousInput);
    });
    
    

 // BUILD LOSES

 function buildLose() {
  var queryParams = {};
  var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/losers?";
  queryParams.token = "pk_2705dde5f4b340f183d586476f237222";
  queryParams.displayPercent = "true";
  return queryURL + $.param(queryParams)
}
var queryURL = buildLose();

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response) {
   //console.log(queryURL);
    //console.log(response);

    var loses = [];

    for (var i = 0; i <= 3; i++) {
      loses.push(response[i].symbol);

      if (loses.length > 3) {
        loses.length = 3;
      }
      localStorage.setItem('loses', JSON.stringify(loses));
      //var previousInput = JSON.parse(window.localStorage.getItem('loses'));
    }
    //console.log(previousInput);
  });



// Lose1 History

function loseData1() {
var queryParams = {};
var loses = JSON.parse(window.localStorage.getItem('loses'));
var loseEl = loses[0];

var queryURL = "https://cloud.iexapis.com/stable/stock/" + loseEl + "/chart?" ;
queryParams.token="pk_2705dde5f4b340f183d586476f237222";
return queryURL + $.param(queryParams);
}

var queryURL = loseData1();

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function (response) {
  //console.log(queryURL);
  //console.log(response);

  var dataLose1 = [];

  for (var i = 0; i <= (response).length; i++) {
    dataLose1.push(response[i].close);

    localStorage.setItem('dataLose1', JSON.stringify(dataLose1));
  }
});




// Lose2 History

function gainLose2() {
var queryParams = {};
var loses = JSON.parse(window.localStorage.getItem('loses'));
var loseEl = loses[1];

var queryURL = "https://cloud.iexapis.com/stable/stock/" + loseEl + "/chart?" ;
queryParams.token="pk_2705dde5f4b340f183d586476f237222";
return queryURL + $.param(queryParams);
}

var queryURL = gainLose2();

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function (response) {
  //console.log(queryURL);
  //console.log(response);

  var dataLose2 = [];

  for (var i = 0; i <= (response).length; i++) {
    dataLose2.push(response[i].close);

    localStorage.setItem('dataLose2', JSON.stringify(dataLose2));
  }
});


// Lose3 History

function gainLose3() {
var queryParams = {};
var loses = JSON.parse(window.localStorage.getItem('loses'));
var loseEl = loses[2];

var queryURL = "https://cloud.iexapis.com/stable/stock/" + loseEl + "/chart?" ;
queryParams.token="pk_2705dde5f4b340f183d586476f237222";
return queryURL + $.param(queryParams);
}

var queryURL = gainLose3();

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function (response) {
  //console.log(queryURL);
  //console.log(response);

  var dataLose3 = [];

  for (var i = 0; i <= (response).length; i++) {
    dataLose3.push(response[i].close);

    localStorage.setItem('dataLose3', JSON.stringify(dataLose3));
  }


});


  