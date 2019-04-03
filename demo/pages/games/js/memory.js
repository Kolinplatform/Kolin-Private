// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(mcards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.mcardsArray = $.merge(mcards, mcards);
			this.shufflemcards(this.mcardsArray);
			this.setup();
		},

		shufflemcards: function(mcardsArray){
			this.$mcards = $(this.shuffle(this.mcardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memorymcards = $(".mcard");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memorymcards.on("click", this.mcardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		mcardClicked: function(){
			var _ = Memory;
			var $mcard = $(this);
			if(!_.paused && !$mcard.find(".inside").hasClass("matched") && !$mcard.find(".inside").hasClass("picked")){
				$mcard.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".mcard").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shufflemcards(this.mcardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$mcards.each(function(k, v){
				frag += '<div class="mcard" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img class="img-fluid" src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img class="img-fluid" src="https://raw.githubusercontent.com/Kolinplatform/Kolin-Private/master/images/Kolin-private-logo.png"\
				alt="Kolinplatform" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var mcards = [
		{
			name: "dutch",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/netherlands/netherlands_640.png",
			id: 1,
		},
		{
			name: "german",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/germany/germany_640.png",
			id: 2
		},
		{
			name: "portuguese",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/portugal/portugal_640.png",
			id: 3
		},
		{
			name: "french",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/france/france_640.png",
			id: 4
		}, 
		{
			name: "italian",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/italy/italy_640.png",
			id: 5
		},
		{
			name: "indian",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/india/india_640.png",
			id: 6
		},
		{
			name: "japanesse",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/japan/japan_640.png",
			id: 7
		},
		{
			name: "russian",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/russia/russia_640.png",
			id: 8
		},
		{
			name: "korean",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/korea_south/korea_south_640.png",
			id: 9
		},
		{
			name: "english",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/united_kingdom/united_kingdom_640.png",
			id: 10
		},
		{
			name: "spanish",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/spain/spain_640.png",
			id: 11
		},
		{
			name: "chinese",
			img: "http://img.freeflagicons.com/thumb/speech_bubble_icon/china/china_640.png",
			id: 12
		},
	];
    
	Memory.init(mcards);


})();