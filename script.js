$(document).ready(function(){
	var tab = $('.tab');
	tab.click(function() {
		console.log('Клик по табу');
		var target = $(this).attr('data-target');
		$('.tab-content').hide();
		$('.' + target).show();
	});
});

$(document).ready(function(){
	var btn = $('.btn');
	btn.click(function() {
		var userName = $('#input-name').val(),
			userPhone = $('#input-phone').val(),
			userEmail = $('#input-email').val(),
			form = $('#form');
		if (userName !== '' & userPhone !== '' & userEmail !== '') {
			form.submit();
		} else {
			alert("Введите данные!");
		}
	});
});