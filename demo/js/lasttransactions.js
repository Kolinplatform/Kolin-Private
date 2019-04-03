class tableLiveSearch{
	constructor(table, searchable){
		this.table = table;
		this.searchable = searchable;
		this.hide_row_list = new Array();
	}
	
	// update the Table: 
	// 1. generate hide_row_list 
	// 2. show all rows of table
	// 3. hide all rows in hide_row_list
	// @param String search_query
	updateTable(search_query){
		this.hide_row_list = this.searchTable( search_query );
		this.showAllTableRows();
		this.hideTableRows();
	}
	
	// Search a query in each searchable item in the table
	// @param String search_query
	searchTable( search_query ){
		var temporary_list = new Array();
		var $searchable_items = $(this.table + ' ' + this.searchable);
		
		// Filter through all searchables
		$searchable_items.each(function( index, value ) {
			var $this_element = $(this);
			search_query = search_query.toLowerCase();
			var search_content = $this_element.text().toLowerCase();
			
			// If this element text does not contain the search query add element to list
			if (search_content.indexOf(search_query) == -1)
					temporary_list.push( $this_element.parent() );

		});
				
		return temporary_list;
	}
	
	// Show all items in table
	showAllTableRows(){
		$( this.table + ' ' + this.searchable ).each( function( index, value ) {
			$(this).parent().show();
		});
	}

	// Hide all items from list in table
	hideTableRows(){
		$.each( this.hide_row_list, function( index, value ) {
			$(this).hide();
		});
	}
}

var searchtable = new tableLiveSearch('.search-table', '.searchable');
$('#search').keyup(function() {
	// call updateTable() with the input value
  searchtable.updateTable( $(this).val() );
});

// Import Data from Blockchain

  $(document).ready(function(){
    $.getJSON("https://api.wavesplatform.com/v0/transactions/transfer?assetId=FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW&limit=10?t=", function(result){
      $.each(result.data, function(key, value){
		  
        $("tbody").append("<tr>"+ "<td class='searchable'>" + (value.data.timestamp).replace('T',' ').substr(0, 19) + "</td>"  + "</td>" + "<td class='searchable'>" + value.data.type + "</td>"  + "<td class='searchable'>" + value.data.sender + "</td>" + "<td class='searchable'>" + value.data.recipient + "</td>" + "<td>" + (value.data.amount).toLocaleString() + "</td>"+"</tr>");
    });
  });		  
});

//Import total supply
$(document).ready(function(){
  $.getJSON("https://api.wavesplatform.com/v0/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", function(result){
		document.getElementById("totalSupply").innerHTML = "<strong>Total supply:</strong>" + " " + (result.data.quantity/100).toLocaleString();
		
})
})
//Import and calculate circulating supply

  $(document).ready(function(){
  $.getJSON("https://nodes.wavesnodes.com/assets/balance/3PGsboZa7nvTMcAhL8jzPtrXGjsgU8yKWeQ/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", function(result){
 document.getElementById("totalCirc").innerHTML = "<strong>Total circulating:</strong>" + " " +(-((result.balance/100)-2000000000)).toLocaleString();
})
})
//Import locked circulating supply
  $(document).ready(function(){
  $.getJSON("https://nodes.wavesnodes.com/assets/balance/3PMkFepuMLNNXrbpDMBdZ3D6PobngMtm7e7/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", function(result){
  	
document.getElementById("amountLocked").innerHTML = "<strong>Total locked:</strong>" + " " + (result.balance/100).toLocaleString() + "  (locked until 20/06/2020)";
})
})
//Import Coingecko data

  $(document).ready(function(){
    $.getJSON("https://api.coingecko.com/api/v3/coins/kolin?t=", function(result){
        document.getElementById("currPrice").innerHTML = "<strong>Current price:</strong>" + " " + "$" + result.market_data.current_price.usd + "  (powered by Coingecko)";
		
		document.getElementById("dVolume").innerHTML = "<strong>24 Hour Trading Vol:</strong>" + " " + "$" + result.market_data.total_volume.usd + "  (powered by Coingecko)";
		
		document.getElementById("marketCap").innerHTML = "<strong>Market Cap:</strong>" + " " + "$" + (result.market_data.current_price.usd*3000000000).toLocaleString() + "  (powered by Coingecko)";	
  });		  
});
  