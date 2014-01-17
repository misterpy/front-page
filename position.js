//set the .main-places in the middle of the page

	$(document).ready(function(){
		var h = ($('.main-places').height())/2;
		var w = ($(window).height())/2;
		var m = w - h;
    	$('.main-places').css({'margin-top': m-30 + 'px'});
		var divw1 = $(window).width();
		var divw2 = $('.main-places').width();
		var divw = divw1/2 - divw2/2;
    	$('.main-places').css({'margin-left' : divw + 'px'});
	});

//set the .main-<country> around the .main-places and the hover function

/*	
$('.main-places').hover(function(){
		var h1 = ($(window).height())/2;
		var h2 = ($('.main-places').height())/2;
		var m = h1-h2;
		var w = (($(window).width())/2) - (($('.main-places').width())/2)

		//setting up the position of each country link
		$('.main-malaysia').css({'margin-top': m-120 + 'px','margin-left': w+76 + 'px'});
		$('.main-china').css({'margin-top': m-70 + 'px','margin-left': w-180 + 'px'});
		$('.main-korea').css({'margin-top': m-70 + 'px','margin-left': w+400 + 'px'});
		$('.main-japan').css({'margin-top': m+70 + 'px','margin-left': w+400 + 'px'});
		$('.main-india').css({'margin-top': m+70 + 'px','margin-left': w-174 + 'px'});
		$('.main-thailand').css({'margin-top': m+120 + 'px','margin-left': w+76 + 'px'});
		$('.main-indonesia').css({'margin-top': m + 'px','margin-left': w+430 + 'px'});
		$('.main-singapore').css({'margin-top': m + 'px','margin-left': w-300 + 'px'});

		//setting the appear effect using opacity and css3 animation
		$('[name="malaysia"]').addClass("main-malaysia");
		$('[name="china"]').addClass("main-china");
		$('[name="korea"]').addClass("main-korea");
		$('[name="japan"]').addClass("main-japan");
		$('[name="india"]').addClass("main-india");
		$('[name="thailand"]').addClass("main-thailand");
		$('[name="indonesia"]').addClass("main-indonesia");
		$('[name="singapore"]').addClass("main-singapore");
	});
*/

	function appearlink(){
		var h1 = ($(window).height())/2;
		var h2 = ($('.main-places').height())/2;
		var m = h1-h2;
		var w = (($(window).width())/2) - (($('.main-places').width())/2)

				//setting the appear effect using opacity and css3 animation
		$('[name="malaysia"]').addClass("main-malaysia");
		$('[name="china"]').addClass("main-china");
		$('[name="korea"]').addClass("main-korea");
		$('[name="japan"]').addClass("main-japan");
		$('[name="india"]').addClass("main-india");
		$('[name="thailand"]').addClass("main-thailand");
		$('[name="indonesia"]').addClass("main-indonesia");
		$('[name="singapore"]').addClass("main-singapore");
		//setting up the position of each country link
		$('.main-malaysia').css({'margin-top': m-120 + 'px','margin-left': w+76 + 'px'});
		$('.main-china').css({'margin-top': m-70 + 'px','margin-left': w-180 + 'px'});
		$('.main-korea').css({'margin-top': m-70 + 'px','margin-left': w+400 + 'px'});
		$('.main-japan').css({'margin-top': m+70 + 'px','margin-left': w+400 + 'px'});
		$('.main-india').css({'margin-top': m+70 + 'px','margin-left': w-174 + 'px'});
		$('.main-thailand').css({'margin-top': m+120 + 'px','margin-left': w+76 + 'px'});
		$('.main-indonesia').css({'margin-top': m + 'px','margin-left': w+430 + 'px'});
		$('.main-singapore').css({'margin-top': m + 'px','margin-left': w-300 + 'px'});
	}