//Import orderbook from matcher

  $(document).ready(function(){
  $.getJSON("https://matcher.wavesplatform.com/matcher/orderbook/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS?depth=10&t=", function(result){
      $.each(result.bids, function(k, v){
        $(buykolin).append("<tr><td><a href='' class='text-success'>" + ((v.price)/100000000000000).toFixed(8).replace(/\.?0+$/,"") + "</a></td>"  + "<td><a href='' class='text-black'>" + (v.amount/100) + "</a></td>"  + "<td><a href='' class='text-black'>" + (((v.price)/100000000000000)*(v.amount/100)).toFixed(8).replace(/\.?0+$/,"") + "</a></td></tr>");
		  });
	  
	  $.each(result.asks, function(t, u){
		$(sellkolin).append("<tr><td><a href='' class='text-danger'>" + ((u.price)/100000000000000).toFixed(8).replace(/\.?0+$/,"") + "</a></td>"  + "<td><a href='' class='text-black'>" + (u.amount/100) + "</a></td>"  + "<td><a href='' class='text-black'>" + (((u.price)/100000000000000)*(u.amount/100)).toFixed(8).replace(/\.?0+$/,"") + "</a></td></tr>");
   });
  });		  
});


//Import MarketData from matcher
$(document).ready(function(){
$.getJSON("https://api.wavesplatform.com/v0/pairs/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS?t=", function(result){
$(lastprice).append((result.lastPrice)/100000000000000);
});	  
});

//Get last Matcher transactions
$(document).ready(function(){
    $.getJSON("https://api.wavesplatform.com/v0/transactions/exchange?amountAsset=FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW&priceAsset=8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS&sort=desc&limit=10&t=", function(result){
      $.each(result.data, function(key, value){
		  //if(value.data.orderType === "buy"){"<tr><td class="text-success">";}else{"<tr><td class="text-danger">";}
		  var x = value.data.orderType
		  if(x = "buy"){y = "text-success"}else{y = "text-danger"}
        $(lastTransactions).append(//"<tr><td>" 
			
			"<tr><td class=" + y + ">" + ((value.data.price)).toFixed(8).replace(/\.?0+$/,"")+ "</td><td>" + (value.data.amount).toLocaleString() + "</td><td>" + (((value.data.price))*(value.data.amount)).toFixed(8).replace(/\.?0+$/,"")+"</td></tr>");
		  
    });
  });		  
});
						//replace('T',' ').substr(0, 19) 
						//((v.price)/100000000000000).toFixed(8).replace(/\.?0+$/,"")