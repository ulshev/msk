$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".scroll_bottom").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 100;
	    $('body,html').animate({scrollTop: top}, 500);
	});

	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// открытие подменю
	if ( window.innerWidth < 1001 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	
	// скрываем меню, при ширине браузера меньше 1000 рх и показываем при больше 1000
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1001) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	// открытие и закрытие меню при нажатии на бургер
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	// анимация на главной
	if ( window.innerWidth>0 ) {
		$('.main_section').toggleClass("hidden");
		$('#index #header').addClass('hidden');
		$('#main_slide').addClass('animated');
		//$('#header').addClass('animated');
	};
	
	setTimeout (function(){
		$('#index #header').addClass('animated');
		
	}, 1000); 
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	$( function() {
	    $( ".accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	
	
	$('.promotions_menu').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.promotions_more',
	    vertical: true
	});
	$('.promotions_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    dots: true,
	    fade: true,
	    asNavFor: '.promotions_menu',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    customPaging: function (slider, i) {
		//FYI just have a look at the object to find aviable information
		//press f12 to access the console
		//you could also debug or look in the source
		console.log(slider);
		return '<strong>0' + (i + 1) + '</strong>/0' + slider.slideCount ;
	    }
	});
	
	$('.projects_menu').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    dots: true,
	    focusOnSelect: true,
	    asNavFor: '.projects_more',
	    vertical: true,
	    centerMode: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    customPaging: function (slider, i) {
		//FYI just have a look at the object to find aviable information
		//press f12 to access the console
		//you could also debug or look in the source
		console.log(slider);
		return '<strong>0' + (i + 1) + '</strong>/0' + slider.slideCount ;
	    }
	});
	$('.projects_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '.projects_menu',
	});
	
	$(window).on('load resize', function(){
		if ( window.innerWidth>1201 && $('#main_slide .activity').hasClass('slick-initialized') ) {
		    $('#main_slide .activity').slick('unslick');
		} else if ( window.innerWidth<=1201 && !$('#main_slide .activity').hasClass('slick-initialized') ) {
		    $('#main_slide .activity').slick({
		        prevArrow: '<span class="slick-prev"></span>',
		        nextArrow: '<span class="slick-next"></span>',
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        responsive: [
			{
			   breakpoint: 801,
			   settings: { 
			      slidesToShow: 1,
			   }
			},
		       ]
		    });
		}
	});
	
	
});

