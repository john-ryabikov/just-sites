$(document).ready(function(){
	var display = 0;
	var changeScroll = 50; // количество пикселей до срабатывания эффекта
	var speed = 400; // скорость смены эффекта
	
	function blur() {
		var curentScroll = $(window).scrollTop();
		if(curentScroll <= changeScroll){
			if(display == 1){
				$("div#blur").fadeOut(speed);
				display = 0;
			}
		}else{
			if(display == 0){
				$("div#blur").fadeIn(speed);
				display = 1;
			}
		}
	}
	$(window).scroll(blur);
	blur();

})