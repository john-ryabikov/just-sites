// открыть окно
$('.btn-main, .block_5_btn').click(function() {
	$('.overlay').fadeIn(600);
	$('.modal').css('display', 'block').animate({opacity: 1, top: '50%'}, 400);
	$('html').css('overflow-y', 'hidden');
	$('.menu').css('padding-right', '34px');
	$('.block_4, .block_5').css('padding-right', '15px');
});


// закрыть окно
$('.close').click(function() {
	$('.modal').animate({opacity: 0, top: '45%'}, 600,
		function () {
			$(this).css('display', 'none');
			$('.overlay').fadeOut(400);
			$('html').css('overflow-y','auto');
			$('.menu').css('padding-right', '0');
			$('.block_4, .block_5').css('padding-right', '0');
	});
});


// обработка формы
$(document).ready(function() {
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
			$('.web_form').animate({height: '300px'}, 400);
		    $('.web_form_window').fadeOut(150);
		    $('#complete').fadeIn(400);
			$('#ok').addClass('animated');
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
 });

// закрыть окно по кнопке "ОК"
$('.btn-complete').click(function() {
	$('#ok').removeClass('animated');
	$('.modal').animate({opacity: 0, top: '45%'}, 600).css('display', 'none');
	$('#complete').fadeOut(200);
	$('.web_form_window').fadeIn().css('display', 'flex');
	$('.overlay').fadeOut(400);
	$('html').css('overflow-y','auto');
	$('.menu').css('padding-right', '0');
	if ($(window).width() < 500) { 
		$('.web_form').animate({height: '430px'}, 400);
	}
		else {
		$('.web_form').animate({height: '550px'}, 400);				   
	}
});