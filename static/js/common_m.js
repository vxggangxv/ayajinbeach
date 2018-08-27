$(function() {
	
	headFunc();
	scrollFunc();
	
});

function headFunc () {
	var navTab	= $(".nav-tab"),
		gnb		= $(".gnb"),
		bgDrop	= $(".bg-drop");
	navTab.click(function() {
		gnb.addClass("on");
	});
	gnb.find(".bg-drop, .i-x").click(function() {
		gnb.removeClass("on");
	});
}

function scrollFunc () {
	var btnTop	= $(".btn-top"),
//		top		= $(".main .slide").height();
		top		= 320,
		hd = $(".header"),
		hdHt = $(".header").height();
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		if ( scr > hdHt ) {
			hd.addClass("active");
		} else {
			hd.removeClass("active");
		}
		if ( scr > top ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	});
	btnTop.on("click", function() {
		$("html, body").stop().animate({
			scrollTop: 0
		}, 500);
		return false;
	});
}