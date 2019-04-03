// JavaScript Document
//Import Kolin Balance
function getbalance() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		
document.getElementById("kolinbalance").innerHTML = (obj.balance/100).toLocaleString();
document.getElementById("percentageholder").innerHTML = ((obj.balance/300000000000)*100).toFixed(1); 
    }
  };
	var WavesAddress = document.getElementById("WavesAddress").value;
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/" + WavesAddress + "/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
}
//Import Date
$(document).ready(function myFunction() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var w = weekday[d.getDay()];
	var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
	var m = month[d.getMonth()];
  document.getElementById("day").innerHTML = w;
	document.getElementById("date").innerHTML = m +" " + + d.getDate().toString()+ ", " + d.getFullYear().toString() +".";
})

/* Through Google Geolocation API I get the coordinates */

function getGeoCoord() {
  
  var googleGeoAPIurl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCSRBIuLz35swx4NPEhJYdT3-HzydCaV74';
    jQuery.post(googleGeoAPIurl, function(success) {
      var crd = success.location;      
      getWeatherData(crd.lat, crd.lng);
    })
    .fail(function(err) {
      alert("API Geolocation error! \n\n" + err);
    });
}

// I pass the getCoord() results to getWeatherData() to get weather data

function getWeatherData(lat, lon) {
  
  var weatherDataURL = 'https://api.apixu.com/v1/current.json?key=9dbb1f3413cb463982f154507191603&q=' + lat + ',' + lon;

  $.ajax({
    
    dataType: "json",
    url: weatherDataURL,
    success: function(data) {
      
      $('.weather-location').html(data.location.country);
      $('.temp-value').html(data.current.temp_c);
      $('.weather-current').html(data.current.condition.text);
	  $('.weather-humidity').html(data.current.humidity);
		$('.weather-icon').html("<img src='https:" + data.current.condition.icon +"'" + " style='-webkit-filter: opacity(8); filter: opacity(8); image-rendering: auto;'</img>");
    },
    
    error: function() {
      console.log("error happened");
    }
    
  });
}

getGeoCoord();
