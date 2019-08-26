$(document).ready(function(){
	var tab = $('.tab');
	tab.click(function() {
		console.log('Клик по табу');
		var target = $(this).attr('data-target');
		$('.tab-content').hide();
		$('.' + target).show();
	});
});