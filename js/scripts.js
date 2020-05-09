// Вызов меню
$(document).ready(function(){
	$('.menu-btn, .menu-btn-close, .btn-menu-mob').click(function() {
    	$('.menu-mobile').toggleClass('menu-mobile-active');
		$('body').addClass('stop-scroll');
	});

// Закрыть меню
	$('.menu-btn-close, .btn-menu-mob').click(function() {
		$('body').removeClass('stop-scroll');
	});

// Blur-эффект
	var display = 0;
	var changeScroll = 50;
	var speed = 400; 
	
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

// Плавный переход
	$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
                return false;
        });
	});

// Исчезновение блоков
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$('#invis_1, #invis_2').fadeOut(500)
		}else{
			$('#invis_1, #invis_2').fadeIn(900)
		}
	});	
		
// Обработка формы заявки
	$('#form').submit(function() {
		if (document.form.user_name.value === '' || document.form.user_phone.value === '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
		    $('#complete').fadeIn(400);
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});

// Закрыть PopUp
	$('.complete-ok').click(function(){
		$('#complete').fadeOut(400);
	});

// Тач-скрин
	$('body').bind('touchstart', function () {
	});	
})