// JavaScript Document
//Import bets in Waves for Bayern
$(document).ready(function getbalancewb() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var comma = obj.balance/100000000;
document.getElementById("wavesbaybalance").innerHTML = comma.toLocaleString();
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3PBP9xCtm3bZ9gmPYGqDwS3hY2SkELSZN1R/Waves?t=", true);
  xhttp.send();
})
//Import bets in Kolin for Bayern
$(document).ready(function getbalancekb() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var comma = obj.balance/100;
document.getElementById("kolinbaybalance").innerHTML = comma.toLocaleString();
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3PBP9xCtm3bZ9gmPYGqDwS3hY2SkELSZN1R/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
})
//Import bets in Waves for Liverpool
$(document).ready(function getbalancewl() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var comma = obj.balance/100000000;
document.getElementById("waveslivbalance").innerHTML = comma.toLocaleString();
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3P2AyVAZrxrft2LNEXinAQCseNepGrj4bdn/Waves?t=", true);
  xhttp.send();
})
//Import bets in Kolin for Liverpool
$(document).ready(function getbalancekl() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var comma = obj.balance/100;
document.getElementById("kolinlivbalance").innerHTML = comma.toLocaleString();
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3P2AyVAZrxrft2LNEXinAQCseNepGrj4bdn/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
})
