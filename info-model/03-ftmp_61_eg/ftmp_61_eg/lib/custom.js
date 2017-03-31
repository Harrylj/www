$(function() {
/* VARIABLE
============================== */
	var animationFlag = false;
	var timer;
	
	
	
/* LOADER
============================== */
	// Hide content before loading
	$('#content').hide();
	$('#footer').hide();;
	$('#header').css("top",-100);
	
	// Calling jPreLoader function with properties
	$('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			$('#jSplash').children('section').not('.selected').hide();
			$('#jSplash').hide().fadeIn(800);
			
			timer = setInterval(function() {
				splashRotator();
			}, 3000);
		}
	}, function() {	//jPreLoader callback function
		clearInterval(timer);
		$('#preloader-container').delay(1000).fadeOut(500,function(){
			initializeMenu();
			$('#preloader-title').remove();
			$('#footer').fadeIn(500);
			$('#header').animate({"top":0}, 800, function() {
				$('#content').fadeIn(1000);
				initializeAll();
			});
		});
	});
	
	function initializeMenu() {
	/* MENU TRANSITION
	============================== */
		// Hide menu hover
		$(".menu-hover").fadeOut(0);
		
		// Menu hover function
		$(".menu-list").hover(
			function(){
				$(this).children(".menu-icon").fadeOut(150);
				$(this).children(".menu-hover").fadeIn(150);
			},
			function(){
				$(this).children(".menu-icon").fadeIn(150);
				$(this).children(".menu-hover").fadeOut(150);
			}
		);
		
		// Menu click function
		$(".menu-list").click(function(e){
			if (!animationFlag){
				// Set the animation flag to true
				animationFlag = true;
				
				// Check clicked index
				var index = $(".menu-list").index(this);
				
				// Show active title
				showTitle(index);
				
				// Show active content
				showContent(index);
				
				// Move slider pointer to active menu position
				$("#menu-slider-pointer").animate({
					left: (index*33.3)+"%"
				}, 300 );
				
				// Move slider bar to active menu position
				$("#menu-slider-bar").animate({
					width: (index*33.3)+"%"
				}, 300 );
				
				// Delete all active mode
				$(".menu-list").each(function() {
					if($(this).children(".menu-icon").hasClass("menu-active")){
						$(this).children(".menu-icon").removeClass("menu-active");
						$(this).addClass("menu-click");
					}
				});
				
				// Change clicked menu to active mode
				$(this).children(".menu-icon").addClass("menu-active");
				$(this).removeClass("menu-click");
			}
			
			e.preventDefault();
		});
	}


	
	function initializeAll() {
	/* INITIALIZE
	============================== */
		$("h1").each(function() {
			if(!$(this).hasClass("title-active")){
				$(this).fadeOut(0);
			}
		});
		$(".content-list").each(function() {
			if(!$(this).hasClass("content-list-active")){
				$(this).slideUp(0);
			}
		});
		
		
		
	/* FLEXSLIDER
	============================== */
		$('.flexslider').flexslider({
			animation: "fade",
			start: function(slider){
				$('body').removeClass('loading');
			}
		});
		
		
		
	/* PORTFOLIO SORT 
	============================== */
		var $container          = $('#portfolio-list');
		var $filter             = $('#portfolio-filter');
		
		// Initialize isotope 
		$container.isotope({
			filter              : '*',
			layoutMode          : 'masonry',
			animationOptions    : {
				duration            : 750,
				easing              : 'linear'
			}
		}); 
		
		// Filter items when filter link is clicked
		$filter.find('a').click(function() {
			var selector = $(this).attr('data-filter');
			$filter.find('a').removeClass('current');
			$(this).addClass('current');
			$container.isotope({ 
				filter             : selector,
				animationOptions   : {
				animationDuration  : 750,
				easing             : 'linear',
				queue              : false,
				}
			});
			return false;
		});
		
		
		
	/* GOOGLE MAP
	============================== */
		var latlng = new google.maps.LatLng(-6.142736,106.819162);
		var settings = {
			zoom: 16,
			center: latlng,
			scrollwheel: false,
			mapTypeControl: true,
			mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			navigationControl: true,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		$tabContact         = ('content-contact');
		
		$("#content").bind("map-trigger", function(tab) {
			if (tab) {
				var $map = new google.maps.Map(document.getElementById("gmap"), settings);
				var marker = new google.maps.Marker({
					position: latlng,
					map: $map, 
					title: ""
				});
			}
		});
		
		
		
	/* VALIDATION
	============================== */
		$.validator.setDefaults({
			submitHandler: function() { 
				/* get some values from elements on the page: */
				var $form = $( "#contact-form" ),
					name = $form.find( 'input[name="name"]' ).val(),
					email = $form.find( 'input[name="email"]' ).val(),
					message = $form.find( 'textarea[name="message"]' ).val(),
					url = $form.attr( 'action' );

				/* Send the data using post and put the results in a div */
				$.post( url, { name: name, email: email, message: message
				}, function( data ) {
					  //var content = $( data ).find( '#content' );
					  //$( "#result" ).empty().append( content );
				}).success(function() { 
					// success
					// reset form values
					$form.find( 'input[name="name"]' ).val('');
					$form.find( 'input[name="email"]' ).val('');
					$form.find( 'textarea[name="message"]' ).val('');
				}).error(function() {
					// handle error
				})
				.complete(function() { 
					$("#contact-form").prepend(
						$("<div class=\"success\">Message successfully sent</div>").hide().fadeIn('slow')
					);
				});
		}});
		$("#contact-form").validate({
			rules: {
				name: "required",
				message: {
					required: true,
					maxlength: 500
				},
				email: {
					required: true,
					email: true
				}
			}
		});
	}
	
	
	
/* TITLE SHIFT ANIMATION 
============================== */
	function showTitle (index){
		$("h1").each(function() {
            if($(this).hasClass("title-active")){
				$(this).removeClass("title-active").fadeOut(300, function(){
					$("h1").eq(index).addClass("title-active").fadeIn(300);
				});
			}
        });
	}
	
	
	
/* CONTENT SHIFT ANIMATION
============================== */
	function showContent (index){
		$(".content-list").each(function() {
            if($(this).hasClass("content-list-active")){
				$(this).removeClass("content-list-active").slideUp(600, function(){
					$(".content-list").eq(index).addClass("content-list-active").slideDown(600);
					
					var hasClassContact = $(".content-list").eq(index).hasClass("content-contact");
					if(hasClassContact){
						$(this).trigger("map-trigger", [hasClassContact]);
					}
					
					// Set the animation flag to false after the content has changed
					animationFlag = false;
				});
			}
        });
	}
		
		
		
/* BLACK AND WHITE HOVER
============================== */
	// On window load. This waits until images have loaded which is essential
	$(window).load(function(){
		
		// Fade in images so there isn't a color "pop" document load and then on window load
		$("#portfolio-list li a img").fadeIn(300);
		
		// clone image
		$('#portfolio-list li a img').each(function(){
			var el = $(this);
			el.css({"position":"absolute","left":"5px","top":"5px"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","left":"5px","top":"5px","opacity":"0"}).insertBefore(el).queue(function(){
				var el = $(this);
				el.parent().css({"width":this.width,"height":this.height});
				el.dequeue();
			});
			this.src = grayscale(this.src);
		});
		
		// Fade image 
		$('#portfolio-list li a img').mouseover(function(){
			$(this).parent().find('img:first').stop().animate({opacity:1}, 300);
		})
		$('.img_grayscale').mouseout(function(){
			$(this).stop().animate({opacity:0}, 300);
		});
	});
	
	// Grayscale w canvas method
	function grayscale(src){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var imgObj = new Image();
		imgObj.src = src;
		canvas.width = imgObj.width;
		canvas.height = imgObj.height; 
		ctx.drawImage(imgObj, 0, 0); 
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg; 
				imgPixels.data[i + 1] = avg; 
				imgPixels.data[i + 2] = avg;
			}
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
	}		
		
/* SOCIAL ICON
============================== */
	// Initialize
	$("#socmed-list li a").fadeTo(0, 0.7);
	
	// Trigger
	$("#socmed-list li a").hover(
		function(){
			$(this).fadeTo(300, 1.0);
		},
		function(){
			$(this).fadeTo(300, 0.7);
		}
	);
	
});