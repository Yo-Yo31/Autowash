function scrollToBlock() {
	$('.js-anchor-link').click(function(){
        var datalink = $(this).data('block');
        $('.js-anchor').each(function(){
            if ($(this).data('block') == datalink) {
                datablock = $(this).offset().top;
            }
        });
        $('html, body').animate({ scrollTop: datablock - 100 }, 1000);
    });
};

function currentLink() {
    var scrollNow = $(document).scrollTop();
    $('.js-anchor').each(function(){
        var sectionTop = $(this).offset().top - $(this).outerHeight()/2;
        var sectionBottom = sectionTop + $(this).outerHeight();
        if (scrollNow > sectionTop && scrollNow < sectionBottom ) {
            var currentData = $(this).data('block');
            $('.js-anchor-link').each(function(){
                $(this).removeClass('_active');
                if ($(this).data('block') == currentData) {
                    $(this).addClass('_active');
                }
            });
        }
    });
}

$(function(){
	$('.banner_button').click(function(){
		$('.overlay').fadeIn();
		$('.popup').fadeIn();
		$('body').addClass('_overflow');
	});

	$('.popup__close, .overlay').click(function(){
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
		$('body').removeClass('_overflow');
	});

	scrollToBlock();
	currentLink();
});


$(document).scroll(function(){
    currentLink();
});