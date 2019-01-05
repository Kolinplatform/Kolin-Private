$( document ).ready ( function ()
{
    console.log ( 'ready!' );
    $('[data-toggle="tooltip"]').tooltip();
    var template = $( '#template' ).html ();
    Mustache.parse ( template );
    var rendered = Mustache.render ( template, get_basket () );
    $( '#template' ).html ( rendered );
    if ( $('.basket-body').hasScrollBar () )
    {
        $('.column-titles').addClass('fix-overflow');
        $('.basket-body').niceScroll({autohidemode: false,cursorcolor:"#ffffff",cursorborder:"1px solid #D0D0D0",cursorborderradius: "0",background: "#ffffff"});
    }
    else
    {
        $('.column-titles').removeClass('fix-overflow');
    }
    
    $('.wallet-expiration').datepicker({
    format: "mm/yyyy",
    startView: "months", 
    minViewMode: "months"        
});
});

function get_basket ()
{
    var products =
    [ 
        { name: "Translation 1", additional: "Additional Informations", quantity: 1000, unit: "words", price: 4000, thumbnail: "http://via.placeholder.com/200x200" }, 
        { name: "Translation 2", additional: "Additional Informations", quantity: 1000, unit: "words", price: 4000, thumbnail: "http://via.placeholder.com/200x200" }, 
        { name: "Translation 3", additional: "Additional Informations", quantity: 2000, unit: "words", price: 8000, thumbnail: "http://via.placeholder.com/200x200" },
        { name: "Translation 4", additional: "Additional Informations", quantity: 1000, unit: "words", price: 4000, thumbnail: "http://via.placeholder.com/200x200" },
        { name: "Proofreading 1", additional: "Additional Informations", quantity: 300, unit: "words", price: 1200, thumbnail: "http://via.placeholder.com/200x200" },
        { name: "Proofreading 2", additional: "Additional Informations", quantity: 100, unit: "words", price: 4000, thumbnail: "http://via.placeholder.com/200x200" },
        { name: "Proofreading 3", additional: "Additional Informations", quantity: 5000, unit: "words", price: 20000, thumbnail: "http://via.placeholder.com/200x200" },
        { name: "Proofreading 4", additional: "Additional Informations", quantity: 1000, unit: "words", price: 4000, thumbnail: "http://via.placeholder.com/200x200" }
    ]
    return { "products": products, "order_number": "TxID once confirmed", "subtotal": 68000, "transaction_fee": 200, "platform_processing": 680, "total": 68800, "currency": "" };
}

//https://stackoverflow.com/questions/4814398/how-can-i-check-if-a-scrollbar-is-visible
(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);