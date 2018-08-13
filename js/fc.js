var winW, winH;
// var bluroff = false;
var vdSupp = true;
var adfri = true;
$(function(){
	winW = document.documentElement.clientWidth || document.body.clientWidth;
	winH = document.documentElement.clientHeight || document.body.clientHeight;
	document.body.style.width = winW + "px";
	document.body.style.height = winH + "px";
	
	// try{
	// 	var mask = document.getElementById("mask");
	// 	mask.style.width = winW + "px";
	// 	mask.style.height = winH + "px";
	// 	mask.width = winW;
	// 	mask.height = winH;
	// 	var ctx = mask.getContext('2d');
	// }catch(e){  
	//     alert('抱歉，您的设备不支持canvas！');
	//     $("canvas").remove();
	//     return;
	// }

	// var blurlayer = new Image();
	// blurlayer.src = "img/bg09v.jpg";
	// blurlayer.addEventListener("load", function(){
	// 	//ctx.drawImage(blurlayer, 0, 0, mask.width, mask.height);
	// 	ctx.drawImage(blurlayer, 0, 0, blurlayer.width, blurlayer.height, 0, 0, mask.width, parseInt(mask.width*blurlayer.height/blurlayer.width));
	// 	$(".item09").css({"visibility" : "visible"});
	// }, false);

	// mask.addEventListener("touchstart", function(e){
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	startX = endX = parseInt(e.touches[0].pageX);
	// 	startY = endY = parseInt(e.touches[0].pageY);
	// 	canTop = mask.offsetTop;
	// 	cantopScroll = document.body.scrollTop || document.documentElement.scrollTop; 	

	// 	try{
	// 		var oMusic = $(".music").get(0);
	// 		if (oMusic.paused && !!$(document).find(".musicplay").length) {
	// 			oMusic.play();
	// 		}
	// 	}catch(e){}
	// }, false);

	// mask.addEventListener("touchmove", function(e){
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	endX = parseInt(e.touches[0].clientX);
	// 	endY = parseInt(e.touches[0].clientY);
				
	// 	mask.style.display = 'none';
	// 	mask.offsetHeight;
	// 	mask.style.display = 'inherit';

	// 	ctx.beginPath();
	// 	ctx.globalCompositeOperation = "destination-out";
	// 	ctx.lineCap='round';
	// 	ctx.moveTo(startX, startY + cantopScroll - canTop);
	// 	ctx.lineTo(endX, endY + cantopScroll - canTop);
	// 	startX = endX;
	// 	startY = endY;
	// 	ctx.lineWidth = 35;
	// 	ctx.stroke();
	// 	ctx.closePath();
	// }, false);

	// mask.addEventListener("touchend", function(e){
	// 	e.stopPropagation();
	// 	var pixData = ctx.getImageData(0, 0, mask.width, mask.height).data;
	// 	var pixtotal = pixData.length;
	// 	for (var i = 0,j = 0;i < pixtotal; i += 4) {
	// 		if (pixData[i] == 0 && pixData[i + 1] == 0 && pixData[i + 2] == 0 && pixData[i + 3] == 0) {
	// 			j++;
	// 			if (j / (pixtotal/4) >= 0.2) {
	// 				ctx.clearRect(0, 0, mask.width, mask.height);
	// 				mask.style.display = "none";
	// 				// bluroff = true;
	// 				break;
	// 			}
	// 		}
	// 	}
	// }, false);
});


$(function(){
	var curCount = 0,
		startY = 0,
		endY = 0,
		dTime = 500,
		norZidx = "10",
		curZidx = "20",
		totZidx = "30",
		isMove = false,
		isUp = false,
		isDown = false;
	var illi = $(".itemlist li");
	var totCount = illi.length;

	$(document).bind("touchstart", function(e){
		// if (!bluroff) {
		// 	return;
		// }
		e.stopPropagation();
		//e.preventDefault();
		startY = endY = parseInt(e.touches[0].clientY);
		illi.css({"z-index" : norZidx, "visibility" : "hidden"});
		$(illi.get(curCount)).css({"z-index" : curZidx,"visibility" : "visible"});
		if (curCount == 0) {
			$(illi.get(curCount + 1)).css({
				"z-index" : totZidx,
				"visibility" : "visible",
				"-webkit-transition-duration" : "0ms",
				"-webkit-transform" : "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration" : "0ms",
				"-moz-transform" : "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration" : "0ms",
				"-ms-transform" : "translate3d(0," + winH + "px,0)",
				"-o-transition-duration" : "0ms",
				"-o-transform" : "translate3d(0," + winH + "px,0)",
				"transition-duration" : "0ms",
				"transform" : "translate3d(0," + winH + "px,0)"
			});
		} else if (curCount == totCount - 1) {
			$(illi.get(curCount - 1)).css({
				"z-index" : totZidx,
				"visibility" : "visible",
				"-webkit-transition-duration" : "0ms",
				"-webkit-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration" : "0ms",
				"-moz-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration" : "0ms",
				"-ms-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration" : "0ms",
				"-o-transform" : "translate3d(0," + (-winH) + "px,0)",
				"transition-duration" : "0ms",
				"transform" : "translate3d(0," + (-winH) + "px,0)"
			});
		} else if (curCount > 0 && curCount < totCount - 1) {
			$(illi.get(curCount + 1)).css({
				"z-index" : totZidx,
				"visibility" : "visible",
				"-webkit-transition-duration" : "0ms",
				"-webkit-transform" : "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration" : "0ms",
				"-moz-transform" : "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration" : "0ms",
				"-ms-transform" : "translate3d(0," + winH + "px,0)",
				"-o-transition-duration" : "0ms",
				"-o-transform" : "translate3d(0," + winH + "px,0)",
				"transition-duration" : "0ms",
				"transform" : "translate3d(0," + winH + "px,0)"
			});
			$(illi.get(curCount - 1)).css({
				"z-index" : totZidx,
				"visibility" : "visible",
				"-webkit-transition-duration" : "0ms",
				"-webkit-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration" : "0ms",
				"-moz-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration" : "0ms",
				"-ms-transform" : "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration" : "0ms",
				"-o-transform" : "translate3d(0," + (-winH) + "px,0)",
				"transition-duration" : "0ms",
				"transform" : "translate3d(0," + (-winH) + "px,0)"
			});
		}
	});

	$(document).bind("touchmove", function(e){
		// if (!bluroff) {
		// 	return;
		// }
		e.stopPropagation();
		e.preventDefault();
		endY = parseInt(e.touches[0].clientY);
		var diffY = parseInt(endY - startY);
		if (curCount == 0) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					$(illi.get(curCount + 1)).css({
						"-webkit-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"transform" : "translate3d(0," + (winH + diffY) + "px,0)"
		 			});
				}
			}
		} else if (curCount == totCount - 1) {
			if (diffY > 10) {
 				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform" : "translate3d(0," + (-winH + diffY) + "px,0)"
		 			});
		 		}
		 	}
		} else if (curCount > 0 && curCount < totCount - 1) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					if (winH + diffY == 0) {return;}
					$(illi.get(curCount + 1)).css({
						"-webkit-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform" : "translate3d(0," + (winH + diffY) + "px,0)",
						"transform" : "translate3d(0," + (winH + diffY) + "px,0)"
		 			});	
				}
			} else if (diffY > 10) {
				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform" : "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform" : "translate3d(0," + (-winH + diffY) + "px,0)"
		 			});
		 		}
			}
		}
	});

	$(document).bind("touchend", function(e){
		// if (!bluroff) {
		// 	return;
		// }
		e.stopPropagation();
		var translateY = 0;
		if (isUp) {
			var next = $(illi.get(curCount + 1));
			translateY = parseInt(next.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
			if (Math.abs(translateY / winH) < 0.9) {
				next.css({
					"-webkit-transition-duration" : dTime + "ms",
					"-webkit-transform" : "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration" : dTime + "ms",
					"-moz-transform" : "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration" : dTime + "ms",
					"-ms-transform" : "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration" : dTime + "ms",
					"-o-transform" : "translate3d(0," + 0 + "px,0)",
					"transition-duration" : dTime + "ms",
					"transform" : "translate3d(0," + 0 + "px,0)"
	 			});
	 			curCount++;
 			} else {
 				next.css({
					"-webkit-transition-duration" : dTime + "ms",
					"-webkit-transform" : "translate3d(0," + winH + "px,0)",
					"-moz-transition-duration" : dTime + "ms",
					"-moz-transform" : "translate3d(0," + winH + "px,0)",
					"-ms-transition-duration" : dTime + "ms",
					"-ms-transform" : "translate3d(0," + winH + "px,0)",
					"-o-transition-duration" : dTime + "ms",
					"-o-transform" : "translate3d(0," + winH + "px,0)",
					"transition-duration" : dTime + "ms",
					"transform" : "translate3d(0," + winH + "px,0)"
	 			});
 			}
 			isUp = false;
	 		isDown = false;
		}
		if (isDown) {
			var prev = $(illi.get(curCount - 1));
			translateY = parseInt(prev.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
 			if (Math.abs(translateY / winH) < 0.9) {
				prev.css({
					"-webkit-transition-duration" : dTime + "ms",
					"-webkit-transform" : "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration" : dTime + "ms",
					"-moz-transform" : "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration" : dTime + "ms",
					"-ms-transform" : "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration" : dTime + "ms",
					"-o-transform" : "translate3d(0," + 0 + "px,0)",
					"transition-duration" : dTime + "ms",
					"transform" : "translate3d(0," + 0 + "px,0)"
	 			});
	 			curCount--;
 			} else {
 				prev.css({
					"-webkit-transition-duration" : dTime + "ms",
					"-webkit-transform" : "translate3d(0," + (-winH) + "px,0)",
					"-moz-transition-duration" : dTime + "ms",
					"-moz-transform" : "translate3d(0," + (-winH) + "px,0)",
					"-ms-transition-duration" : dTime + "ms",
					"-ms-transform" : "translate3d(0," + (-winH) + "px,0)",
					"-o-transition-duration" : dTime + "ms",
					"-o-transform" : "translate3d(0," + (-winH) + "px,0)",
					"transition-duration" : dTime + "ms",
					"transform" : "translate3d(0," + (-winH) + "px,0)"
	 			});
 			}
 			isUp = false;
 			isDown = false;
		}
		// if (curCount == 0) {
		// 	$(".pageup").show();
		// 	$(".pagedown").hide();
		// } else if (curCount == totCount - 1) {
		// 	$(".pageup").hide();
		// 	$(".pagedown").show();
		// } else if (curCount > 0 && curCount < totCount - 1) {
		// 	$(".pageup").show();
		// 	$(".pagedown").show();
		// }
	});

	$(".musicplay").bind("touchstart", function(e){
		e.stopPropagation();
		var _this = $(this);
		try{
			var oMusic = $(".music").get(0);
		}catch(e){  
		    alert('抱歉，您的设备不支持audio！');
		    return;
		}
		if (oMusic.paused) {
			if (_this.hasClass("musicplay")) {
				_this.removeClass("musicplay").addClass("musicpause");
			} else {
				oMusic.play();
				_this.removeClass("musicpause").addClass("musicplay");
			}
		} else {
			oMusic.pause();
			_this.removeClass("musicplay").addClass("musicpause");
		}
	});

	try{
		var vdb = $(".videobox");
		var vd = $(".video");
		var oVideo = vd.get(0);
	}catch(e){  
	    vdSupp = false;
	}

	$(".videobox").bind("touchend", function(e){
		if (!vdSupp) {
			alert('抱歉，您的设备不支持video！');
		    return;
		}
		if (isMove) {
			isMove = false;
			return;
		}
		if (oVideo.paused) {
			vdb.css({"background-color" : "#000"});
			vd.css({"display" : "block"});
			oVideo.play();
		} else {
			oVideo.pause();
			vd.css({"display" : "none"});
			vdb.css({"background-color" : "transparent"});
		}
	});

	$(".editbox, .itemlist .clip, .itemlist .pop, .pop .close").bind("touchstart touchmove touchend", function(e){
		e.stopPropagation();
	});

	var transend ="webkitTransitionEnd MSTransitionEnd oTransitionEnd TransitionEnd";

	//$(".item01,.item02,.item03,.item04,.item05,.item06,.item08,.item09,.item10,.item11").bind(transend, function(){
	$(".item01,.item02,.item03,.item04,.item06,.item07,.item08").bind(transend, function(){
		if (!vdSupp) {
		    return;
		}
		if (oVideo.ended || oVideo.paused) {
			vd.css({"display" : "none"});
			vdb.css({"background-color" : "transparent"});
			return;
		}
		oVideo.pause();
		vd.css({"display" : "none"});
		vdb.css({"background-color" : "transparent"});
	});

	$(".item01").find(".logo").addClass("tran01");
	$(".item01").find(".tit02").addClass("tran02");
	$(".item01").find(".tit03").addClass("tran03");
	$(".item01").bind(transend, function(e){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("logo");
			setTimeout(function(){
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran03");
			},0);
		}
	});
	$(".item01").bind("touchstart", function(){
		try{
			var oMusic = $(".music").get(0);
			if (adfri && oMusic.paused && !!$(document).find(".musicplay").length) {
				oMusic.play();
			}
			adfri = false;
		}catch(e){}

		var itn = $(".item02");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran04");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06");
		itn.find(".tit07").removeClass("tran07");
		itn.find(".tit08").removeClass("tran08");
		itn.find(".tit09").removeClass("tran09");
		itn.find(".pop").removeClass("ptran").hide();
	});

	$(".item02").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran03");
			_this.find(".tit04").addClass("tran04");
			_this.find(".tit05").addClass("tran05");
			_this.find(".tit06").addClass("tran06");
			_this.find(".tit07").addClass("tran07");
			_this.find(".tit08").addClass("tran08");
			_this.find(".tit09").addClass("tran09");
		}
	});
	$(".item02").bind("touchstart", function(){
		var itp = $(".item01");
		itp.find(".tit01").removeClass("tran01").removeClass("logo");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");

		var itn = $(".item03");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran04");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06");
	});

	$(".item03").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran03");
			_this.find(".tit04").addClass("tran04");
			_this.find(".tit05").addClass("tran05");
			_this.find(".tit06").addClass("tran06");
		}
	});
	$(".item03").bind("touchstart", function(){
		var itp = $(".item02");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");
		itp.find(".tit04").removeClass("tran04");
		itp.find(".tit05").removeClass("tran05");
		itp.find(".tit06").removeClass("tran06");
		itp.find(".tit07").removeClass("tran07");
		itp.find(".tit08").removeClass("tran08");
		itp.find(".tit09").removeClass("tran09");
		itp.find(".pop").removeClass("ptran").hide();

		var itn = $(".item04");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran04");
	});

	$(".item04").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran03");
			_this.find(".tit04").addClass("tran04");
		}
	});
	$(".item04").bind("touchstart", function(){
		var itp = $(".item03");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");
		itp.find(".tit04").removeClass("tran04");
		itp.find(".tit05").removeClass("tran05");
		itp.find(".tit06").removeClass("tran06");
	});

	$(".item05").bind("touchmove", function(){
		var translateYp = parseInt($(".item04").css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
		var translateYn = parseInt($(".item06").css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
		if (Math.abs(translateYp / winH) < 0.9 || Math.abs(translateYn / winH) < 0.9) {
			isMove = true;
			oVideo.pause();
			vd.css({"display" : "none"});
			vdb.css({"background-color" : "transparent"});
		}
	});
	$(".item05").bind("touchstart", function(){
		var itp = $(".item04");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");
		itp.find(".tit04").removeClass("tran04");

		var itn = $(".item06");
		itn.find(".tit01").removeClass("tran01");
	});

	$(".item06").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
		}
	});
	$(".item06").bind("touchstart", function(){
		var itn = $(".item07");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
	});

	$(".item07").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran03");
		}
	});
	$(".item07").bind("touchstart", function(){
		var itp = $(".item06");
		itp.find(".tit01").removeClass("tran01");

		var itn = $(".item08");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
	});

	$(".item08").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
		}
	});
	$(".item08").bind("touchstart", function(){
		var itp = $(".item07");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");

		var itn = $(".item09");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit01").removeClass("");
	});

	$(".item09").bind(transend, function(){
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit01").addClass("");
		}
	});
	$(".item09").bind("touchstart", function(){
		var itp = $(".item08");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
	});

	$(".t1").bind("touchend", function(){
		var num = $(this).text().replace(/\D/g, "");
		location.href = "tel:" + num;
	});

	$(".item06 .close").bind("touchend", function(){
		$(this).parent().removeClass("tran01");
	});

	$(".item02 .clip").each(function(i){
		var _this = $(this);
		_this.bind("touchend", function(){
			var allPop = _this.parent().find(".pop");
			var curPop = $(allPop.get(i));
			//allPop.removeClass("ptran").hide();
			//curPop.show();
			curPop.show().siblings(".pop").removeClass("ptran").hide();
			curPop.css({"left" : ((winW - curPop.get(0).clientWidth) / 2) + "px"});
			setTimeout(function(){
				curPop.addClass("ptran");
			}, 0);
		});
	});

	$(".item02 .close").bind("touchend", function(){
		$(this).parent().removeClass("ptran").hide();
	});

	$(".item03 .clip").each(function(i){
		var _this = $(this);
		_this.bind("touchend", function(){
			var allPop = _this.parent().find(".pop");
			var curPop = $(allPop.get(i));
			curPop.show().siblings(".pop").hide();
			allPop.find(".pcon").removeClass("ptran");
			setTimeout(function(){
				curPop.find(".pcon").addClass("ptran");
			}, 0);
		});
	});

	$(".item04 .clip").each(function(i){
		var _this = $(this);
		_this.bind("touchend", function(){
			var allPop = _this.parent().find(".pop");
			var curPop = $(allPop.get(i));
			curPop.show().siblings(".pop").hide();
			allPop.find(".pcon").removeClass("ptran");
			setTimeout(function(){
				curPop.find(".pcon").addClass("ptran");
			}, 0);
		});
	});

	$(".item03 .close, .item04 .close").bind("touchend", function(){
		$(this).parent().removeClass("ptran");
		$(this).parent().parent().hide();
	});
});


$(function(){
	$(".datebox select").each(function(){
		var _this = $(this);
		var selectDom = _this.get(0);
		var selectId = selectDom.id;
		var _day = $("#day");
		var _month = $("#month");
		var _year = $("#year");
		selectDom.onchange = function(){
			var sedIndex = selectDom.selectedIndex;
			var sedValue = selectDom.options[sedIndex].value;
			var showBox = _this.siblings("p");
			if (selectId == "year") {
				showBox.text(sedValue + "年");

				if (_this.siblings("p").text() == "年") {
					// _day.get(0).options[0].selected = true;
					// _month.get(0).options[0].selected = true;
					// _day.siblings("p").text("日");
					// _month.siblings("p").text("月");
					_this.get(0).options[0].selected = true;
					sedValue = "";
					return;
				}	
			} else if (selectId == "month") {
				if (_year.siblings("p").text() == "年") {
					_this.get(0).options[0].selected = true;
					sedValue = "";
					alert("请先选择年份");
					return;
				}

				showBox.text(sedValue + "月");

				if (_this.siblings("p").text() == "月") {
					_day.get(0).options[0].selected = true;
					_day.siblings("p").text("日");
					sedValue = "";
					return;
				}

				var dayhtml = "";
				for (var i = 0; i <= 28; i++) {
					var tmpval = 0;
					if (i == 0) {
						var tmpval = "";
					} else {
						var tmpval = i;
					}
					dayhtml += "<option value=\"" + tmpval + "\">" + tmpval + "日</option>";
				} 
				if (sedValue) {
					var appopt = "<option value=\"29\">29日</option><option value=\"30\">30日</option>";
					var curday = parseInt(_day.siblings("p").text());
					if (sedValue == "2") {
						if (curday > 29) {
							_day.siblings("p").text("日");
						}
					} else if (sedValue == "4" || sedValue == "6" || sedValue == "9" || sedValue == "11") {
						dayhtml += appopt;
						if (curday > 30) {
							_day.siblings("p").text("日");
						}
					} else {
						appopt += "<option value=\"31\">31日</option>";
						dayhtml += appopt;
					}
				} else {
					_day.siblings("p").text("日");
				}
				_day.html(dayhtml);
				if (curday > 0 && curday < _day.find("option").length) {
					_day.get(0).options[curday].selected = true;
				} else {
					_day.get(0).options[0].selected = true;
				}
			} else if (selectId == "day") {
				if (_year.siblings("p").text() == "年" || _month.siblings("p").text() == "月") {
					_this.get(0).options[0].selected = true;
					sedValue = "";
					alert("请先选择年、月份");
					return;
				}
				showBox.text(sedValue + "日");
			}
	    }
	});
});