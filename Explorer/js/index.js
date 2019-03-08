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
$(document).ready(function explorer(){
  $(document).ready(function(){
    $.getJSON("https://api.wavesplatform.com/v0/transactions/transfer?assetId=FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW&limit=100?t=", function(result){
      $.each(result.data, function(key, value){
		  
        $("tbody").append("<tr>"+ "<td class='searchable'>" + value.data.timestamp + "</td>" + "<td class='searchable'>" + value.data.height + "</td>" + "<td class='searchable'>" + value.data.type + "<td class='searchable'>" + value.data.sender + "</td>" + "<td class='searchable'>" + value.data.recipient + "</td>" + "<td>" + (value.data.amount).toLocaleString() + "</td>"+"</tr>");
		  
						
     
		
    });
  });		  
});
});
//Import total supply
$(document).ready(function totalsupply() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var totalsupply = (obj.data.quantity/100);
		document.getElementById("totalsupply").innerHTML = "<strong>Total supply:</strong>" + " " + totalsupply.toLocaleString();
		
    }
  };
  xhttp.open("GET", "https://api.wavesplatform.com/v0/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
})
//Import and calculate circulating supply
$(document).ready(function circulating() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var circulating = -((obj.balance/100)-2000000000);
document.getElementById("total").innerHTML = "<strong>Total circulating:</strong>" + " " + circulating.toLocaleString();
		
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3PGsboZa7nvTMcAhL8jzPtrXGjsgU8yKWeQ/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
})

//Import locked circulating supply
$(document).ready(function circulating() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		var locked = ((obj.balance/100));
document.getElementById("amountlocked").innerHTML = "<strong>Total locked:</strong>" + " " + locked.toLocaleString() + "  (locked until 20/06/2020)";
		
    }
  };
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/3PMkFepuMLNNXrbpDMBdZ3D6PobngMtm7e7/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
})