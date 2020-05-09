$(document).ready(function(){
//Обновление страницы  
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
// Исчезновение блоков
	$(window).scroll(function(){
		if($(window).scrollTop()>2){
			$('.main-cont-scroll').fadeOut(150)
		}else{
			$('.main-cont-scroll').fadeIn(400)
		}
    });
// Плавный переход
	$(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;
        });
	});
// Тач-скрин
	$('body').bind('touchstart', function () {
    });
//Blur-эффект    
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
//Новый слайдер    
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        initialSlide: 1,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 20,
          stretch: 10,
          depth: 1000,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
// Всплывающее окно
  $('.main-cont-btn, .block-4-btn, .block-6-btn, .project-btn').click(function() {
    $('.overlay').fadeIn(600);
    $('.modal-window').css('display', 'block').animate({opacity: 1, top: '50%'}, 400);
  });
// Закрыть окно
  $('.form-window-close').click(function() {
    $('.modal-window').animate({opacity: 0, top: '45%'}, 600,
      function () {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      });
  });
// Всплывающее окно брифа
  $('.main-cont-btn-brif-1, .block-6-btn-brif').click(function() {
    $('.overlay-brif').fadeIn(600);
    $('body, html').css('overflow','hidden');
    $('body').addClass('stop-scroll');
    $('.main-cont, .block-6-cont, .block-5-cont, .block-7-cont, footer').css('margin-right', '16px');
    $('.nav-menu, .nav-phone').css('margin-right', '17px');
    $('.main-cont-scroll').css('right', '97px');
  });
// Закрыть окно брифа
  $('.brif-window-close').click(function() {
      $('.overlay-brif').fadeOut(400);
      $('body, html').css('overflow','auto');
      $('body').removeClass('stop-scroll');
      $('.main-cont, .block-6-cont, .block-5-cont, .block-7-cont, footer').css('margin-right', '0');
      $('.nav-menu, .nav-phone').css('margin-right', '0');
      $('.main-cont-scroll').css('right', '80px');
    });      
});