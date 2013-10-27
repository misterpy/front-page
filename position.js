//set the .main-places in the middle of the page
	$(document).ready(function(){
		$('.main-places').css({'text-align':'center'});
		var h = ($('.main-places').height())/2;
		var w = ($(window).height())/2;
		var m = w - h;
    	$('.main-places').css({'margin-top': m - 30 + 'px'});
    	var divw1 = $(window).width();
    	var divw2 = $('.main-places').width();
    	var divw = divw1/2 - divw2/2 - 30;
    	$('.main-places').css({'margin-left' : divw + 'px'});
	});

//set the .main-<country> around the .main-places
