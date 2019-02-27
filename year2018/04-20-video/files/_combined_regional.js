/* *********************************************************
JQUERY PLUGINS
********************************************************* */

// use like this: $("#instafeed-left").randomize("a");
(function ($) {
    $.fn.randomize = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = $this.children(childElem);

            elems.sort(function () { return (Math.round(Math.random()) - 0.5); });

            $this.remove(childElem);

            for (var i = 0; i < elems.length; i++)
                $this.append(elems[i]);

        });
    }
})(jQuery);


/* *********************************************************
MAIN START
********************************************************* */

// Global OMD object
window.omd = {};
omd.fadeSpeed = omd.fadeSpeed || 250;
omd.slideSpeed = omd.slideSpeed || 600;


$('div.regionalLocation').hide();

function trace(msg){
	if(console !== undefined){
		console.log(msg);	
	}
}

// random logo
var _randomLogo = Math.ceil(Math.random() * 4);
var _path = "/OMDSite/resources/images/nav_logo_" + String(_randomLogo);
if (Modernizr.highres) {
	_path += "-x2";
}
var _logoImage = $("nav.main img").attr("src", _path + ".png");


var onePageNavOptions = { scrollSpeed: 0 };
$("nav.secondary").onePageNav(onePageNavOptions);
$("nav.countryLocal ul:not(.right)").onePageNav(onePageNavOptions);
$("ul.local-menu").onePageNav(onePageNavOptions);

if (Modernizr.touch) {
	//$.event.special.swipe.horizontalDistanceThreshold = 70;
}



window.omd = window.omd || {};
omd.templates = (function () {

    // Templates as strings
    var _templates = {

        "contact_info": '<div>' +
								'<h4><a href="mailto:{{email}}">{{name}}</a></h4>' +
				                '{{#title}}<p>{{#linkaddress}}<a class="careerLink" href="{{linkaddress}}">{{/linkaddress}}{{title}}{{#linkaddress}}</a>{{/linkaddress}}</p>{{/title}}' +
                                '{{#address1}}<p>{{address1}}</p>{{/address1}}' +
                                '{{#address2}}<p>{{address2}}</p>{{/address2}}' +
                                '{{#city}}<p>{{city}}, {{stateregion}} {{zippostal}}</p>{{/city}}' +
                                '{{#country}}<p>{{country}}</p>{{/country}}' +
                                '{{#phone}}<p>T: {{phone}}</p>{{/phone}}' +
                                '{{#fax}}<p>F: {{fax}}</p>{{/fax}}' +
                             '</div>',
        "location_info": '<div>' +
								'<h4><a href="mailto:{{email}}">{{name}}</a></h4>' +
				                '{{#title}}<p>{{title}}</p>{{/title}}' +
                                '{{#address1}}<p>{{address1}}</p>{{/address1}}' +
                                '{{#address2}}<p>{{address2}}</p>{{/address2}}' +
                                '{{#city}}<p>{{city}}, {{stateregion}} {{zippostal}}</p>{{/city}}' +
                                '{{#country}}<p>{{country}}</p>{{/country}}' +
                                '{{#phone}}<p>T: {{phone}}</p>{{/phone}}' +
                                '{{#fax}}<p>F: {{fax}}</p>{{/fax}}' +
                                '{{#linkaddress}}<p class="countrylink">' + window.VISITUSONLINEAT + '<br/><a href="http://{{linkaddress}}">{{linkaddress}}</a></p>{{/linkaddress}}' +
							'</div>',

        "work": '<div class="item"><article>' +
                                '{{#videokey}}<div class="video"><iframe src="http://fast.wistia.net/embed/iframe/{{videokey}}?version=v1&videoHeight=214&videoWidth=380&volumeControl=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="380" height="214"></iframe></div>{{/videokey}}' +
								'{{^videokey}}<img src="{{image}}" />{{/videokey}}' +
								'<section>' +
									'<hgroup><h2>{{title}}</h2>' +
									'<h3>{{subtitle}}</h3></hgroup>' +
									'<div class="description">{{description}}</div>' +
									'{{#awardicon}}<p><img src="{{awardicon}}" class="awardicon" />{{awardtext}}</p>{{/awardicon}}' +
									'{{#attachedfile}}<p><a href="{{attachedfile}}" target="_blank">{{attachedfiletext}}</a></p>{{/attachedfile}}' +
                                    '{{#linkurl}}<p><a href="{{linkurl}}" target="_blank">{{linktext}}</a></p>{{/linkurl}}' +
                                    '{{#emailcontacttext}}<p><a href="mailto:{{emailcontactaddress}}">{{emailcontacttext}}</a></p>{{/emailcontacttext}}' +
								'</section>' +
							'</article></div>',

        "news": '<div class="item"><article>' +
								'<img src="{{image}}" />' +
								'<section>' +
									'<hgroup><h3>{{localizedmonthname}} {{year}}</h3>' +
									'<h2>{{title}}</h2></hgroup>' +
									'<div class="description">{{description}}</div>' +
									'{{#attachedfile}}<p><a href="{{attachedfile}}" target="_blank">{{attachedfiletext}}</a></p>{{/attachedfile}}' +
									'<a href="{{linkurl}}" target="_blank">{{linktext}}</a>' +
								'</section>' +
							'</article></div>'

    }

    // Push compiled templates to return object

    var ret = {};

    for (var template in _templates) {
        ret[template] = Hogan.compile(_templates[template]);
    }

    return ret;

} ());window.omd = window.omd || {};
omd.navDropDown = (function() {

	var $dropDown = $('.drop_down'),
			$tabs = $dropDown.find('.tab'),
			$overlay = $dropDown.find(".overlay"),
			$menu = $('#nav .right'),
			$menuItems = $menu.find('a'),
			$close = $dropDown.find('.close'),
			dropDownHeight = $dropDown.height(),
			active, currentTab, currentMenuItem;

	// Toggle drop-down from menu items
	$menu.on('click', 'a.drop-down', function () {

		var tab = $(this).data('class'),
				currentMenuItem = $(this);

		if (!active || tab === currentTab) {
			toggleDropDown();
		}

		toggleMenuItem(this);
		toggleContent(tab);
		$(document).trigger("drop-down-opened", { tab: tab, currentTab: currentTab, type: "full" });
		currentTab = tab;

		return false;

	});

	$(document).on("drop-down-opened", function (ev, options) {
		if (options.type !== "full" && active) {
			toggleDropDown();
		} 
	});

	// Close drop-down when clicking outside of drop-down area
	$('#main').on('click', function() {
		if (active) {
			toggleDropDown();
			toggleMenuItem(currentMenuItem);
		}
	});

	// Close drop-down when clicking close button
	$close.on('click', function() {
		toggleDropDown();
		toggleMenuItem(currentMenuItem);
	});
	$overlay.on("click", function() {
		toggleDropDown();
		toggleMenuItem(currentMenuItem);
	});

	// Close drop-down on scroll
	$(window).scroll(function() {
		if (active) {
			toggleDropDown();
			toggleMenuItem(currentMenuItem);
		}
	});

	function toggleDropDown() {
		active = !active;

		var dropDownPosition = active ? 0 : -dropDownHeight;

		if (Modernizr.csstransitions) {
			$dropDown.css({ top: dropDownPosition });
		} else {
			$dropDown.stop().animate({ top: dropDownPosition }, 200);
		}

		if (!active) {
			$dropDown.attr("class", "drop_down")
		}
	}

	function toggleContent(tab) {

		$tabs.removeClass('active');
		$tabs.filter('.'+tab).addClass('active');

		if (active) {
			$dropDown.attr("class", "drop_down " + tab)	
		}
	}

	function toggleMenuItem(item) {
		
		var $menuItem = $(item),
				_selected = $menuItem.hasClass('active');
		
		$menuItems.removeClass('active');

		if (!_selected) $menuItem.addClass('active');

	}

}());window.omd = window.omd || {};
omd.navMenuDropDown = (function() {
	var activeDropDown;
	
	$('a.menu-drop-down').each(function(index){

		var $this = $(this);
		var tab = $this.data('class');
		$this.on('click', function (ev) {
			$(document).trigger("drop-down-opened", { tab: tab, currentTab: activeDropDown, type: "menu" });
			activeDropDown = tab;
			toggleMenuDropDown(tab);

			ev.preventDefault();
		});

		$($('#' + tab).find(".close")).on('click', function() {
			toggleMenuDropDown(tab);
			return false;
		});

		// Close drop-down on scroll
		$(window).scroll(function() {
			closeMenuDropDown(tab);
		});
	});

	$(document).on("drop-down-opened", function (ev, options) {
		if (options.type !== "menu" && activeDropDown) {
			closeMenuDropDown(activeDropDown);
		} else if (options.currentTab && options.currentTab !== options.tab) {
			closeMenuDropDown(options.currentTab);
		}
	});

	function toggleMenuDropDown(id) {
		var dropDown = $("#" + id);

		var dropDownPosition = 0;
		if(dropDown.position().top >= 0){
			dropDownPosition = -1 * (dropDown.height() + 60);
		}

		if (Modernizr.csstransitions) {
			dropDown.css({ top: dropDownPosition });
		} else {
			dropDown.stop().animate({ top: dropDownPosition }, 200);
		}
	}

	function closeMenuDropDown(id) {
		var dropDown = $("#" + id);
		if (dropDown.length == 0) return;
		if(dropDown.position().top >= 0){
			var dropDownPosition = -1 * (dropDown.height() + 60);
			if (Modernizr.csstransitions) {
				dropDown.css({ top: dropDownPosition });
			} else {
				dropDown.stop().animate({ top: dropDownPosition }, 200);
			}
		}
		activeDropDown = null;
	}

}());window.omd = window.omd || {};
omd.data = function(){
	
var _this = this;
var _stories = new Array();
this.dataLength = 0;

this.init = function(){
	_this.renderData();
}

this.renderData = function(){
	/* These will be deleted */
	var months = ["April", "May", "June", "July", "August", "Sept", "Oct"];
	var years = [1989, 1990, 1991, 1992, 1999, 2006, 2011];
	var titles = ["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Sed vel tortor quam"];
	var contents = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tortor quam, sit amet laoreet libero. Nam lobortis justo vitae tellus fermentum venenatis. Pellentesque hendrerit auctor vehicula. Morbi blandit imperdiet massa, nec suscipit libero lobortis ut. Praesent rutrum mi sit amet nisl posuere sodales.","Sed vel tortor quam, sit amet laoreet libero. Nam lobortis justo vitae tellus fermentum venenatis. Pellentesque hendrerit auctor vehicula. Morbi blandit imperdiet massa, nec suscipit libero lobortis ut. Praesent rutrum mi sit amet nisl posuere sodales. consectetur adipiscing elit", "Nam lobortis justo vitae tellus fermentum venenatis. Pellentesque hendrerit auctor vehicula. Morbi blandit imperdiet massa, nec suscipit libero lobortis ut. Praesent rutrum mi sit amet nisl posuere sodales. consectetur adipiscing elit"];
	var images = ["resources/images/OUR_STORY_DUMMY_COPY.png", "resources/images/OUR_STORY_DUMMY_COPY_1.png", "resources/images/OUR_STORY_DUMMY_COPY_2.png"];
	var linkURLs = ["http://adweek.com"];
	var linkTexts = ["Read more on adweek.com"];
		
	for(var i = 0; i < months.length; i++){

		var obj = {
			dateTitle: months[i] + "&nbsp;" +  years[i], 
			date:years[i], 
			title:titles[Math.floor(Math.random() * 3)],
			subtitle:titles[Math.floor(Math.random() * 3)],
			content:contents[Math.floor(Math.random() * 3)],
			image:images[Math.floor(Math.random() * 3)],
			linkURL:linkURLs[0],
			linkText:linkTexts[0]
		}
		
		_stories.push(obj);
	}
	
	this.dataLength = _stories.length;
}

this.getJSON = function(i){
	return typeof i === 'undefined' ? _stories : _stories[i];
}

this.getCareersContactsJSON = function(country){
    WebService.GetCareersContacts(
		country, 
		function(results){
			$.publish("event/getCareersContactsJSON", [results]);
		}, 
		function(error){ $.publish("error", [error]); }
	);
}


this.getLocationContactsJSON = function(path, country){
    WebService.GetLocationContacts(
        path,
		country, 
		function(results){
			$.publish("event/GetLocationContactsJSON", [results]);
		},
		function(error){ $.publish("error", [error]); }
	);
}

this.serviceSuccess = function(results) {
    if (results) {
        alert("worked: " + JSON.stringify(results));
    }
}

this.serviceFailed = function(error) {
    alert("Stack Trace: " + error.get_stackTrace() + "/r/n" +
   "Error: " + error.get_message() + "/r/n" +
   "Status Code: " + error.get_statusCode());
}



_this.init();

}

window.omd = window.omd || {};
omd.content = function(){
	
var _this = this;

this.createHTMLElement = function(json){
	
	
	/*
	<div class="item currentItem">
		<section>
			<h3>[date]</h3>
			<h2>[title]</h2>
			<p>[content]</p>
		</section>
		<img src="[src]">
		<div class="clear"></div>
	</div>
	*/

	var container = $(document.createElement("div")).addClass("item");
		var section = $(document.createElement("section")).appendTo(container);
			var h3 = $(document.createElement("h3")).html(json.dateTitle).appendTo(section);
			var h2 = $(document.createElement("h2")).html(json.title).appendTo(section);
			var p = $(document.createElement("p")).html(json.content).appendTo(section);
		var img = $(document.createElement("img")).attr("src", json.image).appendTo(container);
	
	return container;
}

}// JavaScript Document

window.omd = window.omd || {};
omd.dropdown = function($container, selectCallback) {

	var $dropdown, $menuItems,
		menuOpen = false, menuItemHeight, index;

	$(function() {
		
		// Cache jQuery objects for fast access
		$dropdown = $container.find('.dropdown');
		$menuItems = $dropdown.find('a');
		menuItemHeight = $menuItems.first().outerHeight();

		// Listen to clicks on dropdown and route functionality
		$dropdown.on('click', 'a', function() {

			var isCurrentItem = $(this).hasClass('current');
			
			// Setup for closing when clicking outside menu
			if (!menuOpen) {

				// Listen for any click on the page
				$(window).on('click', function() {

					// Check if this 
					if(!$(event.target).is($menuItems)) {
						toggleMenu();
						$(window).off('click');
					}
				});

			}

			// Only toggle menu if unopened or clicking on the current item
			if (!menuOpen || menuOpen && isCurrentItem) {
				toggleMenu();
				return false;
			}
			// Otherwise select the new menu item
			else {
				selectMenuItem($(this));

				if (selectCallback) return false;
			}

		});

		// Set initial item position
		var $startingItem = $menuItems.filter('.current');

		// Update index of selected menu item
		index = $menuItems.index($startingItem);
		adjustMenuPosition();

	});

	function toggleMenu() {

		$dropdown.toggleClass('active');

		// Toggle state of menuOpen
		menuOpen = !menuOpen;

	}

	function selectMenuItem($menuItem) {

		// Clear previous current item
		$menuItems.removeClass('current');

		// Set new item to current
		$menuItem.addClass('current');

		// Close menu
		toggleMenu();

		// Update index of selected menu item
		index = $menuItems.index($menuItem);
		adjustMenuPosition();

		// Run callback if provided
		if (selectCallback) selectCallback($menuItem);

	}

	function adjustMenuPosition() {
		
		$menuItems.first().css('margin-top', -(index*menuItemHeight));

	}

};/*
 * Global Animation behaviors
 */

// Initiate Timeline for registering and controlling animations
// ------------------------------------------------------------

(function(context) {

  var scrollHeight, scrollPosition, scrolled, windowHeight;

  if (!Modernizr.appleios) init();

  // Init
  function init() {
		scrolled = false;
    scrollHeight = $(document).height();
    windowHeight = $(window).height();

    $(window).scroll(function() {
      scrolled = true;
    });

    $(window).resize(function() {
      windowHeight = $(window).height();
    });

    setInterval(function() {
			if (scrolled) {
				scrolled = false;
				render();
			}
    }, 30);

    render();

  }

  function render() {
    scrollPosition = $(context).scrollTop();
    newTime = scrollPosition / (scrollHeight - windowHeight);
    timeline.run(newTime);
  }

}(this));

 // Dynamically fit video to window
 // -------------------------------

$(function() {

	if (Modernizr.appleios) return false;

	// Cache reference to window
	var $window = $(window);

	var resize = function() {
		
		$('video, img.videoFallback').each(function() {

			var $this = $(this);

			var aspect_ratio = $this.width() / $this.height(),
				window_ratio = $window.width() / $window.height();

			if (window_ratio >= aspect_ratio) {
				$this
					.addClass('landscape')
					.removeClass('portrait')
					// Set video dimensions prior to calculating margins
					.css({
						width: $window.width(),
						height: $window.width() * aspect_ratio
					})
					.css({
						marginTop: -($this.height() - $window.height()) / 2 - ($window.height() / 2),
						marginLeft: 0
					});
			} else {
				$this
					.addClass('portrait')
					.removeClass('landscape')
					// Set video dimensions prior to calculating margins
					.css({
						width: $window.height() * aspect_ratio,
						height: $window.height()
					})
					.css({
						marginTop: 0,
						marginLeft: -($this.width() - $window.width()) / 2 - ($window.width() / 2)
					});
			}

		});

	};

	// Resize once DOM is ready
	resize();

	// Resize everytime the window in resized
	$window.on('resize', resize);

	omd.resize = resize;

});

// Spline for animating on paths
// -----------------------------

(function(context) {
	
	var Spline = function() {

		var c = [], v2 = { x: 0, y: 0 },
		point, intPoint, weight;

		this.get2DPoint = function ( points, k ) {

			point = ( points.length - 1 ) * k;
			intPoint = Math.floor( point );
			weight = point - intPoint;

			c[ 0 ] = intPoint === 0 ? intPoint : intPoint - 1;
			c[ 1 ] = intPoint;
			c[ 2 ] = intPoint > points.length - 2 ? intPoint : intPoint + 1;
			c[ 3 ] = intPoint > points.length - 3 ? intPoint : intPoint + 2;

			v2.x = interpolate( points[ c[ 0 ] ].x, points[ c[ 1 ] ].x, points[ c[ 2 ] ].x, points[ c[ 3 ] ].x, weight );
			v2.y = interpolate( points[ c[ 0 ] ].y, points[ c[ 1 ] ].y, points[ c[ 2 ] ].y, points[ c[ 3 ] ].y, weight );

			return v2;

		};

		// Catmull-Rom

		function interpolate( p0, p1, p2, p3, t ) {

			var v0 = ( p2 - p0 ) * 0.5;
			var v1 = ( p3 - p1 ) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;
			return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

		}

	};

	context.Spline = Spline;

}(this));
/*
 * animation.regional.js
 *
 */

// Anonymous function to keep global namespace clear
(function() {
  
  // Test needed features for animation (SVG, CSS Transforms, Video)
  $(function() {
    init(Modernizr.appleios);
    //  init(true);
  });

  var init = function (appleios) {

    if (appleios)  {

        var ourWork_image = $('.animations .fullAnimation .our_work video').attr('poster');
        var anthem_image = $('.animations .fullAnimation ._anthem video').attr('poster');

        $('.animations .fullAnimation').remove();

        //$('.animations').append('<div class="fallback"></div>');

//        $('.animations .fallback').html(
//            '<div class="anthem"></div>'+
//            '<div class="ourLocations"></div>'+
//            '<div class="ourServices"></div>'+
//            '<div class="ourWork"></div>'+
//            '<div class="ourPeople"></div>'+
//            '<div class="ourNews"></div>'+
//            '<div class="careers"></div>'
//        );

//        $('.animations .fallback .anthem').css('background-image', 'url('+anthem_image+')');
//        $('.animations .fallback .ourWork').css('background-image', 'url('+ourWork_image+')');

        $('.anthem').addClass('fallbackVideoStill').css('background-image', 'url('+anthem_image+')');
        $('.ourWork header').addClass('fallbackVideoStill').css('background-image', 'url('+ourWork_image+')');

        $("html").addClass("no-animation");

        return false;

    }

    $('.animations .fallback').addClass('hidden');

    var $window = $(window),
        documentHeight = $(document).height(),
        documentWidth = $(document).width();
      
    var $video_anthem_container = $('.animations .video_container._anthem'),
        $video_anthem = $video_anthem_container.find('video'),
        $video_work_container = $('.animations .video_container.our_work'),
        $video_work = $video_work_container.find('video'),
        $logo_red = $('.animations .logo_red'),
        $logo_white_half = $('.animations .logo_white_half'),
        $logo_white_half_block = $('.animations .logo_white_half_block'),
        $redBlock = $('.animations .redBlock'),
        $grayBlock = $('.animations .grayBlock'),
        $whiteBlock = $('.animations .whiteBlock');
      
    var ourLocationsPosition = $('.ourLocations').offset().top,
        ourServicesPosition = $('.ourServices').offset().top,
        ourWorkPosition = $('.ourWork').offset().top,
        ourPeoplePosition = $('.ourPeople').offset().top,
        ourNewsPosition = $('.ourNews').offset().top,
        careersPosition = $('#careersSection').offset().top,
        prefixedTransform;

    // Handle fallbacks

    // Modernizr.svg = false;
    // Modernizr.csstransforms = false;
    // Modernizr.video = false;

    // Set images to PNG if no SVG support
    if (!Modernizr.svg) {
      $logo_red.attr('src', '/OMDSite/resources/images/animation.worldwide.redLogo.png');
      $logo_white_half.attr('src', '/OMDSite/resources/images/animation.worldwide.whiteLogoHalf_inverted.png');
    }

    // Setup csstransforms fallback
    if (!Modernizr.csstransforms) {
      $logo_red.wrap('<div class="logoFallback">');
    }
    else {
      // Only set prexiedTransform if transforms are supported
      prefixedTransform = Modernizr.prefixed('transform').replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
    }

    if (!Modernizr.video) {
      $('video').each(function() {
        
        var $this = $(this),
            $container = $this.parent(),
            poster = $this.attr('poster');

        $container.append('<img src="'+poster+'" class="videoFallback" width="960" height="540">');
        $this.remove();

        // Trigger resize to fit image to window
        omd.resize();

      })
    }

    // Control video playback when visible
    (function() {

      var start_time = 0,
          stop_time = (ourLocationsPosition + 1000) / documentHeight,
          playing = false;

      timeline.add({
        start: start_time,
        stop: stop_time,
        callback: function(position) {

          if (Modernizr.video) {

          try {
                if (position >= 1) {
                  $video_anthem[0].pause();
                  playing = false;
                }
                else if (!playing) {
                  $video_anthem[0].play();
                  playing = true;
              }
           } catch (e) { }

            $video_anthem.on('ended', function() {
              this.play();
            });

          }

          $video_anthem_container.css({
            'opacity': 1
          });

        }

      });

    }());

    // Our Locations
    // --------------------------------------

    $(function() {

      var start_time = (ourLocationsPosition - 900) / documentHeight,
          stop_time = (ourLocationsPosition + 1500) / documentHeight,
          topStart = $window.height(),
          topEnd = -topStart

      timeline.add({
        start: start_time,
        stop: stop_time,
        callback: function(position) {

          position = timeline.Easing.Cubic.EaseOut(position);

          var top = topStart + ((topEnd - topStart) * position);

          //show top video if above position
          if( position <= 0) {
            $logo_white_half.css({
              'opacity': 0
            });
            $logo_white_half_block.css({
              'opacity': 0
            });
            $video_anthem_container.css({
              'opacity': 1
            });
            
          }
          else if( position < 1) {
            
            document.getElementById('nav').style.background="white";
            document.getElementById('nav_img_01').src="img/index_41.png";
            document.getElementById('nav_img_02').src="img/index_42.png";
            //alert(2)
            $video_anthem_container.css({
              'opacity': 1
            });

            //move white half-logo
            $logo_white_half.css({
              'opacity': 1,
              top: top
            });

            //move white block below logo
            $logo_white_half_block.css({
              'opacity': 1,
              top: top + $logo_white_half.height() - 5
            });
          }
          //hide top video if below position
          else {
            //alert(3)
            document.getElementById('nav').style.background="black";
            document.getElementById('nav_img_01').src="img/index_41_hover.png";
            document.getElementById('nav_img_02').src="img/index_42_hover.png";
            $logo_white_half.css({
              'opacity': 1
            });
            $logo_white_half_block.css({
              'opacity': 1
            });
            $video_anthem_container.css({
              'opacity': 0
            });
          }
        }
      });

    }());

    // Our Services
    // -------------------
   (function() {

      var start_time = (ourServicesPosition - 400) / documentHeight,
          stop_time = (ourServicesPosition + 500) / documentHeight,
          sizeStart = 0.1, sizeEnd = 12,
          marginLeftStart = 0, marginLeftEnd = 3500,
          path = [
            {x: 30, y: 110},
            {x: 30, y: 50},
            {x: -30, y: 100}
          ],
          spline = new Spline();

      timeline.add({
        start: start_time,
        stop: stop_time,
        callback: function(position) {

          var _path = spline.get2DPoint( path, position ),
              easedPosition = timeline.Easing.Cubic.EaseIn(position),
              size = sizeStart + ((sizeEnd - sizeStart) * easedPosition),
              left = marginLeftStart + ((marginLeftEnd - marginLeftStart) * easedPosition);

          if (Modernizr.csstransforms) {
            $logo_red.css({
              'top': _path.y + '%',
              'left': _path.x + '%'
            }).css(prefixedTransform, 'scale('+size+')');
          }

        }
      });

      if (!Modernizr.csstransforms) {

        var start_fallback = (ourServicesPosition - 300) / documentHeight,
            stop_fallback = (ourServicesPosition + 400) / documentHeight;

        $logo_red = $logo_red.parent();
        
        timeline.add({
          start: start_fallback,
          stop: stop_fallback,
          callback: function(position) {

            var top = (1 - position) * 100 + '%';
            
            $logo_red.css({
              top: top
            });

          }
        })

      }

      timeline.add({
        start: stop_time,
        stop: (ourServicesPosition + 2200) / documentHeight,
        callback: function(position) {
          
          position = timeline.Easing.Cubic.EaseInOut(position);
          $logo_red.css({
            //opacity: 1 - position
            opacity: 1
          });

        }
      })

    }());

    // Our Work
    // --------------------------------------
    (function() {

      var start = (ourServicesPosition + 500) / documentHeight,
          stop = (ourPeoplePosition + 1000) / documentHeight,
          playing = false;

      // Toggle visibility of video
      timeline.add({
        start: start,
        stop: stop,
        callback: function(position) {
          console.log(position)
          //var opacity = position > 0 && position < 1 ? 1 : 0;
          var opacity = position > 0 && position < 0.2 ? 1 : 0;
          $video_work_container.css('opacity', opacity);
          //$video_work_container.css('opacity', 1);

        }
      });

      if (Modernizr.video) {

        timeline.add({
          start: start,
          stop: stop,
          callback: function(position) {

          try{
                if (position <= 0 || position >= 1) {
                  $video_work[0].pause();
                  playing = false;
                }
                else if (!playing) {
                  $video_work[0].play();
                  playing = true;
                }
          } catch (e) { }
          
          }
        });

        $video_work.on('ended', function() {
            this.play();
        });

      }

    }());

    // Our People
    // --------

    (function() {

      var start_time = (ourPeoplePosition - 0) / documentHeight,
          stop_time = (ourNewsPosition + 1000) / documentHeight,
          bottomStart = -1500, bottomEnd = 1500;

      timeline.add({
        start: start_time,
        stop: stop_time,
        callback: function(position) {

          var bottom = bottomStart + ((bottomEnd - bottomStart) * position);
          
          $redBlock.css({
            bottom: bottom
          });

        }
      });

    }());

    // Our News
    // --------

    (function() {

      var start_time = (ourNewsPosition - 100) / documentHeight,
          stop_time = (careersPosition + 1000) / documentHeight,
          bottomStart = -2600, bottomEnd = 0;

      timeline.add({
        start: start_time,
        stop: stop_time,
        callback: function(position) {

          var bottom = bottomStart + ((bottomEnd - bottomStart) * position);
          
          $whiteBlock.css({
            bottom: bottom
          });

        }
      });

    }());

    // Careers
    // --------

    /*(function() {
      
      var start_time = ourNewsPosition / documentHeight;

      timeline.add({
        start: start_time,
        stop: start_time,
        callback: function(position) {
          
          $logo_white_half.css('opacity', 1 - position);
          $logo_white_half_block.css('opacity', 1 - position);

        }
      });

    }());*/

    // Start timeline off at 0 when page loads
    timeline.run(0);

  };

}());// JavaScript Document

window.omd = window.omd || {};
omd.slider = function (looped) {

    looped = looped === undefined ? true : looped;

    var _this = this;
    var _container, _nextTrigger, _prevTrigger, _indicators;

    var _numElements = 0;
    var _isAnimating = false;

    this.CURRENT_INDEX = 0;
    this.NEXT = "next";
    this.PREV = "prev";


    $(window).resize(function () {
        _this.setContainerHeight(_container);
    });

    this.setContainer = function (container) {
        _container = container;
        _container.children(".item:first").addClass("currentItem");
        var $hiddenItems = _container.children(".item:not(.currentItem)");
        _setCssWithoutAnimating($hiddenItems, { opacity: 0 });
        _this.setContainerHeight(_container);
    }

    this.setContainerHeight = function ($container) {
        // only set container height for the non-animating version of the page
        // else, the animations become off
        if (!$("html").is(".no-animation")) { return; }
        
        if (!$container) { $container = _container; }
        var $item = $container.children(".item.currentItem");
        $("img", $item).on("load", function() { 
            _this.setContainerHeight($container); 
        });
        $container.height($item.height());
    }

    this.setNumElements = function (numElements) {
        _numElements = numElements;
    }

    this.setNextTrigger = function (next, cb) {
        _nextTrigger = next;
        _nextTrigger.click(function () { _this.handleNext(cb); });
    }

    this.setPrevTrigger = function (prev, cb) {
        _prevTrigger = prev;
        _prevTrigger.click(function () { _this.handlePrevious(cb); });
    }

    this.setTouchTrigger = function ($el, cb) {
        if (Modernizr.touch) {
            var self = this;
            $el.on('swipeleft', function(e) { _this.handleNext(cb); });
            $el.on('swiperight', function(e) { _this.handlePrevious(cb); });
        }
    }

    this.setIndex = function (index) {
        if (_this.CURRENT_INDEX != index) {
            var direction = index > _this.CURRENT_INDEX ? _this.NEXT : _this.PREV;

            _this.CURRENT_INDEX = index;
        }
        _this.setContent(direction);
    }

    this.handlePrevious = function (cb) {
        if (_isAnimating) { return; }

        if (!looped && _this.CURRENT_INDEX === 0) return false;

        if (!looped && _this.CURRENT_INDEX > 0) {
            _this.CURRENT_INDEX = _this.CURRENT_INDEX - 1;
            _this.setContent(_this.PREV);
            if (cb) { cb(); }
        }
        else {
            _this.CURRENT_INDEX = _this.CURRENT_INDEX - 1 >= 0 ? _this.CURRENT_INDEX - 1 : _numElements - 1;   
            _this.setContent(_this.PREV);
            if (cb) { cb(); }
        }
    }

    this.handleNext = function (cb) {
        if (_isAnimating) { return; }

        if (!looped && _this.CURRENT_INDEX === _numElements - 1) return false;

        if (!looped && _this.CURRENT_INDEX < _numElements - 1) {
            _this.CURRENT_INDEX = _this.CURRENT_INDEX + 1;    
            _this.setContent(_this.NEXT);
            if (cb) { cb(); }
        }
        else {
            _this.CURRENT_INDEX = _this.CURRENT_INDEX + 1 < _numElements ? _this.CURRENT_INDEX + 1 : 0;    
            _this.setContent(_this.NEXT);
            if (cb) { cb(); }
        }
    }

    this.setContent = function (direction) {
        _isAnimating = true;

        var slideIn = _container.children(".item").eq(this.CURRENT_INDEX);
        var slideOut = _container.find(".currentItem");

        var width = _container.width();
        var widthPx = width + "px";
        slideIn.show();
        if (direction == _this.PREV) {
            _slideElements(slideIn, "-" + widthPx, slideOut, widthPx);
        } else {
            _slideElements(slideIn, widthPx, slideOut, "-" + widthPx);
        }

        slideIn.addClass("currentItem").siblings().removeClass("currentItem");
        _this.setContainerHeight(_container);

        if (!looped) { _this.updateTriggers(); }

        _isAnimating = false;
    }

    _animateElement = function($el, props) {
        if (Modernizr.csstransitions) {
            $el.css(props);
        } else {
            $el.stop().animate(props, { duration: omd.slideSpeed, queue: false });
        }
    };

    _slideElements = function ($slideIn, slideInStart, $slideOut, slideOutEnd) {
        _setCssWithoutAnimating($slideIn, { "left": slideInStart, opacity: 0 });
        _animateElement($slideIn, { "left": "0", opacity: 1 });

        _animateElement($slideOut, { "left": slideOutEnd, opacity: 0 });
    };

    _setCssWithoutAnimating = function ($el, props) {
        _toggleCssAnimation($el, false);
        $el.css(props);
        $el.height(); // Trigger a reflow, flushing the CSS changes to the page
        _toggleCssAnimation($el, true);
    };

    _toggleCssAnimation = function ($el, animate) {
        $el.toggleClass("notransition", !animate);
    };

    this.reCenter = function () { }

    this.updateTriggers = function () {
        _nextTrigger.toggleClass("notAvailable", _this.CURRENT_INDEX === _numElements - 1);
        _prevTrigger.toggleClass("notAvailable", _this.CURRENT_INDEX === 0);
    }

}      	// Ends Object// JavaScript Document

window.omd = window.omd || {};
omd.anthem = (function () {

    var _container,
		_menuItems,
		_tabs,
		_currentMenuItem,
		_currentTab;

    function init() {
        setVars();
        setListeners();
    }

    function setVars() {
        _container = $("section.anthem");
        _menuItems = _container.find('li');
        _tabs = _container.find('section');
        //_currentTab = _tabs.filter('.current');
        _menuItems.first().addClass("current");
        _tabs.first().addClass("current");
    }

    function setListeners() {
        _container.on('click', 'li', handleClick);
    }

    function handleClick() {

        var _newTab = _tabs.eq($(this).index());

        _menuItems.removeClass("current");
        $(this).addClass("current");

        _tabs.removeClass("current");
        _newTab.addClass("current");

    }

    $(document).ready(init);
} ());   // Ends Object
window.omd = window.omd || {};
omd.ourwork = (function () {

var _this = this;

var _parentContainer = ".ourWork";
var _contentContainer = ".ourWork .dynamicContent";
var _slider = new omd.slider(false);
var cache = [];
var endOfContent = false;
var _dropdown;

function init(){
	_parentContainer = $(_parentContainer);
	_contentContainer = $(_contentContainer);
	_slider.setContainer(_contentContainer);
	
	setListeners();
	setInitPosition();

	// Setup drop down with default functionality
	_dropdown = new omd.dropdown(_parentContainer);
}

function toggleContent(activate) {
	_slider.setContainerHeight();
}

function setListeners(){
	var callback = function () {
		var inRange = _slider.CURRENT_INDEX > cache.length - 3;
		if (inRange && !endOfContent) getMoreWork(cache.length);
		disableVideos();
	}

	_slider.setPrevTrigger(_parentContainer.find(".navArrow.left"), callback);
	_slider.setNextTrigger(_parentContainer.find(".navArrow.right"), callback);
	_slider.setTouchTrigger(_contentContainer, callback);

	_parentContainer.on("click", ".item", function() { toggleContent(true); });
	_parentContainer.on("click", ".close", function() { toggleContent(false); })
}

function setInitPosition(){
	getMoreWork(0, function() {
		_slider.setContent();
	});

}

function getMoreWork(ordinal, cb) {

	WebService.GetWork(WORKCMSPATH, ordinal, 10, function(results) {
		renderWork(results);
		updateVideoFrames();
		if (cb) cb();
	});

}

function renderWork(results) {

	// Set end of content if no results are returned
	if (results.length === 0) endOfContent = true;

	// Render all results to DOM and push content to cache
	var html = '';

	for (var i = 0; i < results.length; i++) {
		// convert "truth-y" to a real bool
		if (!results[i].videokey) results[i].videokey = false;
		html += omd.templates.work.render(results[i]);
		cache.push(results[i]);
	}

	_contentContainer.append(html);
    _contentContainer.children(".item:not(.currentItem)").hide();

	// Update slider with number of projects
	_slider.setNumElements(cache.length);

}

function updateVideoFrames() {
	var $videoFrames = $("div.video iframe");
	if ($videoFrames.length < 1) {
		return;
	}
	loadVideoApi();
	$videoFrames.each(function () {
		var $frame = $(this);
		if ($frame.parent().is(".fluid-video")) return;

		var videoRatio = ($frame.height() / $frame.width()) * 100;
        /*
        * Replace the iframe's dimensions and position
        * the iframe absolute, this is the trick to emulate
        * the video ratio
        */
        $frame.css({ position: "absolute", top: 0, left: 0 });
        $frame.attr("width", "100%");
        $frame.attr("height", "100%");
        
        /*
        * Wrap the iframe in a new <div> which uses a
        * dynamically fetched padding-top property based
        * on the video's w/h dimensions
        */
        var $wrap = $("<div>").addClass("fluid-video")
        	.css({ position: "relative", width: "100%", "padding-top" : videoRatio + "%" });
        
        $frame.wrap($wrap);
	});
}

var videoApiHasLoaded = false;
function loadVideoApi() {
	if (!videoApiHasLoaded) {
		$("body").append('<script src="//fast.wistia.net/static/iframe-api-v1.js"></script>');
		videoApiHasLoaded = true;
	}
}

function disableVideos() {
	if (!videoApiHasLoaded) return;

	$(".video iframe", _contentContainer).each(function () {
		this.wistiaApi.pause();
	})
}

$(document).ready(init);
} ()); 	// Ends Object
if(window.peopleCarousels == undefined) {
    peopleCarousels = [".ourPeople"];
}

$.each(peopleCarousels, function(index, carousel){



window.omd = window.omd || {};
omd.ourpeople = (function () {

var _parentContainer = carousel;
var _contentContainer = _parentContainer + " .people";
var _itemWidth = 270;
var _animationSpeed = 400;
var _currentIndex = 0;
var _displayCount = 2;
var _next = _parentContainer + " .navArrow.right";
var _prev = _parentContainer + " .navArrow.left";
var _open = _parentContainer + " .person";
var _dropdown;
var _isAnimating = false;
var _isOpen = false;
var _$people;


function init(){
	_parentContainer = $(_parentContainer);
	_contentContainer = $(_contentContainer);
	_next = $(_next);
	_prev = $(_prev);
	_$people = $(_contentContainer).find(".person");

	setItemParams();
	setListeners();
	animateToPosition();

	// Setup drop down with default functionality
	_dropdown = new omd.dropdown(_parentContainer);
}

function setItemParams() {
	_displayCount = window.innerWidth <= 700 ? 2 : 3;
	_itemWidth = _contentContainer.find(".person").outerWidth();
}

function handleNext(){
	if (_isAnimating) { return; }
	if(_currentIndex + 1 < _contentContainer.find(".person").length - (_displayCount - 1)){
		_currentIndex = _currentIndex + 1;
		animateToPosition();
	}
}

function handlePrev(){
	if (_isAnimating) { return; }
	if(_currentIndex - 1 >= 0){
		_currentIndex = _currentIndex - 1;
		animateToPosition();
	}
}

function handleOpen(e){
    if($(this).css("opacity") == 0){return;} // don't allow hidden ones to be clicked at the border of the page

    _next.unbind("click");
    _next.addClass("notAvailable");
    _prev.unbind("click");
    _prev.addClass("notAvailable");

	var target = $(e.target).hasClass("person") ? $(e.target) : $(e.target).parents(".person");
	_contentContainer.stop().animate({opacity:0}, _animationSpeed, function(){
		$(this).find(".person").each(function(i){
			if(target.index() != $(this).index()){
				$(this).removeClass("open").css({ display:"none" }).unbind("click");
			}
			else{
				$(this).css({opacity:0, "margin-left": -parseInt(_contentContainer.css("left")) + "px" });
			}
		});

		$(this).css({opacity:1});
        _isOpen = true;
        _contentContainer.parents('section').addClass('open');
		target.addClass("open").unbind("click").stop().animate({opacity:1}, _animationSpeed);
		target.find(".close").bind("click", handleClose);
	});

}

function handleClose(e){
    _isOpen = false;
    _contentContainer.parents('section').removeClass('open');
    _next.removeClass("notAvailable");
    _prev.removeClass("notAvailable");

	$(e.target).closest(".open").stop().animate({opacity:0}, _animationSpeed, function(){
		$(this).removeClass("open");
		_contentContainer.css({opacity:0});
		_contentContainer.find(".person").each(function(){
			$(this).css({display:"inline-block", opacity: 1, "margin-left": 0}).unbind("click").bind("click", handleOpen);
		});

		_next.click(handleNext);
		_prev.click(handlePrev);
		animateToPosition();
		_contentContainer.stop().animate({opacity:1}, _animationSpeed);
	});

}

function updateButtonVisibilty(){
    if(!_isOpen){
        _prev.toggleClass("notAvailable", _currentIndex == 0);
        var displayingLastPerson = _$people.length -_displayCount <= _currentIndex;
        var allAreDisplayed = _$people.length < _currentIndex + 1;
        _next.toggleClass("notAvailable", displayingLastPerson || allAreDisplayed);
    }
}

function setListeners(){
	_next.click(handleNext);
	_prev.click(handlePrev);
	/*_contentContainer.on("click", ".person:not(.open)", handleOpen);*/

    _contentContainer.on("swipeleft", ".person:not(.open)", handleNext)
    	.on("swiperight", ".person:not(.open)", handlePrev);

	$(window).on("resize", function() { setItemParams(); animateToPosition(); })
}

function animateToPosition(){
	if (_isAnimating) { return; }
	_isAnimating = true;

	var currentIndex = _currentIndex; // local copy!
	animateElement(_contentContainer,{ "left": -_itemWidth * currentIndex + "px" });

	var $persons = _contentContainer.find(".person");
	var $selected = $persons.slice(_currentIndex, _currentIndex + _displayCount);
	var $notSelected = $persons.not($selected);

	animateElement($notSelected, { opacity: 0 });
	animateElement($selected, { opacity: 1 });

	_isAnimating = false;
	updateButtonVisibilty();
}

function animateElement($el, props) {
	if (Modernizr.csstransitions) {
		$el.css(props);
	} else {
		$el.stop().animate(props);
	}
}

//$(document).ready(function(){
	if($(_open).length > 0) {
		init();
	} else {
		$(_parentContainer).hide();
	}

//});


} ()); 	// Ends Object




});
if ($('[class^=ourPeople]:visible').length > 1 && window.self == window.top) {
    $('#our-people > *:not(h1)').hide();
    $('[class^=ourPeople-]').not(':eq(0)').find('.centeredContent').addClass('collapsed');

    $('section[class^=ourPeople-] h2').click(function (e) {
        var section = $(e.target).parent();
        if (section.hasClass('collapsed')) {
            section.removeClass('collapsed');
            section.parent().siblings('section[class^=ourPeople-]').find('> .centeredContent').addClass('collapsed');
        } else {
            section.addClass('collapsed');
        }
    });
    $(document).ready(function () {
        $('section.culture').css('padding-top', '50px');
    });
}
﻿// Generated by CoffeeScript 1.3.3
(function () {
    var Instafeed, root;

    Instafeed = (function () {

        function Instafeed(params) {
            var option, value;
            this.options = {
                target: 'instafeed',
                get: 'popular',
                resolution: 'thumbnail',
                sortBy: 'most-recent',
                links: true,
                limit: 15,
                mock: false
            };
            if (typeof params === 'object') {
                for (option in params) {
                    value = params[option];
                    this.options[option] = value;
                }
            }
            this.unique = this._genKey();
        }

        Instafeed.prototype.run = function () {
            var header, instanceName, script;
            if (typeof this.options.clientId !== 'string') {
                if (typeof this.options.accessToken !== 'string') {
                    throw new Error("Missing clientId or accessToken.");
                }
            }
            if (typeof this.options.accessToken !== 'string') {
                if (typeof this.options.clientId !== 'string') {
                    throw new Error("Missing clientId or accessToken.");
                }
            }
            if ((this.options.before != null) && typeof this.options.before === 'function') {
                this.options.before.call(this);
            }
            if (typeof document !== "undefined" && document !== null) {
                script = document.createElement('script');
                script.id = 'instafeed-fetcher';
                script.src = this._buildUrl();
                header = document.getElementsByTagName('head');
                header[0].appendChild(script);
                instanceName = "instafeedCache" + this.unique;
                window[instanceName] = new Instafeed(this.options);
                window[instanceName].unique = this.unique;
            }
            return true;
        };

        Instafeed.prototype.parse = function (response) {
            var anchor, fragment, header, htmlString, image, imageString, images, img, instanceName, reverse, sortSettings, _i, _j, _len, _len1;
            if (typeof response !== 'object') {
                if ((this.options.error != null) && typeof this.options.error === 'function') {
                    this.options.error.call(this, 'Invalid JSON data');
                    return false;
                } else {
                    throw new Error('Invalid JSON response');
                }
            }
            if (response.meta.code !== 200) {
                if ((this.options.error != null) && typeof this.options.error === 'function') {
                    this.options.error.call(this, response.meta.error_message);
                    return false;
                } else {
                    throw new Error("Error from Instagram: " + response.meta.error_message);
                }
            }
            if (response.data.length === 0) {
                if ((this.options.error != null) && typeof this.options.error === 'function') {
                    this.options.error.call(this, 'No images were returned from Instagram');
                    return false;
                } else {
                    throw new Error('No images were returned from Instagram');
                }
            }
            if ((this.options.success != null) && typeof this.options.success === 'function') {
                this.options.success.call(this, response);
            }
            if (this.options.sortBy !== 'most-recent') {
                if (this.options.sortBy === 'random') {
                    sortSettings = ['', 'random'];
                } else {
                    sortSettings = this.options.sortBy.split('-');
                }
                reverse = sortSettings[0] === 'least' ? true : false;
                switch (sortSettings[1]) {
                    case 'random':
                        response.data.sort(function () {
                            return 0.5 - Math.random();
                        });
                        break;
                    case 'recent':
                        response.data = this._sortBy(response.data, 'created_time', reverse);
                        break;
                    case 'liked':
                        response.data = this._sortBy(response.data, 'likes.count', reverse);
                        break;
                    case 'commented':
                        response.data = this._sortBy(response.data, 'comments.count', reverse);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.");
                }
            }
            if ((typeof document !== "undefined" && document !== null) && this.options.mock === false) {
                document.getElementById(this.options.target).innerHTML = '';
                images = response.data;
                if (images.length > this.options.limit) {
                    images = images.slice(0, this.options.limit + 1 || 9e9);
                }
                if ((this.options.template != null) && typeof this.options.template === 'string') {
                    htmlString = '';
                    imageString = '';
                    for (_i = 0, _len = images.length; _i < _len; _i++) {
                        image = images[_i];
                        imageString = this._makeTemplate(this.options.template, {
                            model: image,
                            id: image.id,
                            link: image.link,
                            image: image.images[this.options.resolution].url,
                            caption: this._getObjectProperty(image, 'caption.text'),
                            likes: image.likes.count,
                            comments: image.comments.count,
                            location: this._getObjectProperty(image, 'location.name')
                        });
                        htmlString += imageString;
                    }
                    document.getElementById(this.options.target).innerHTML = htmlString;
                } else {
                    fragment = document.createDocumentFragment();
                    for (_j = 0, _len1 = images.length; _j < _len1; _j++) {
                        image = images[_j];
                        img = document.createElement('img');
                        img.src = image.images[this.options.resolution].url;
                        if (this.options.links === true) {
                            anchor = document.createElement('a');
                            anchor.href = image.link;
                            anchor.appendChild(img);
                            fragment.appendChild(anchor);
                        } else {
                            fragment.appendChild(img);
                        }
                    }
                    document.getElementById(this.options.target).appendChild(fragment);
                }
                header = document.getElementsByTagName('head')[0];
                header.removeChild(document.getElementById('instafeed-fetcher'));
                instanceName = "instafeedCache" + this.unique;
                try {
                    delete window[instanceName];
                } catch (e) {
                    
                }
            }
            if ((this.options.after != null) && typeof this.options.after === 'function') {
                this.options.after.call(this);
            }
            return true;
        };

        Instafeed.prototype._buildUrl = function () {
            var base, endpoint, final;
            base = "https://api.instagram.com/v1";
            switch (this.options.get) {
                case "popular":
                    endpoint = "media/popular";
                    break;
                case "tagged":
                    if (typeof this.options.tagName !== 'string') {
                        throw new Error("No tag name specified. Use the 'tagName' option.");
                    }
                    endpoint = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case "location":
                    if (typeof this.options.locationId !== 'number') {
                        throw new Error("No location specified. Use the 'locationId' option.");
                    }
                    endpoint = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case "user":
                    if (typeof this.options.userId !== 'number') {
                        throw new Error("No user specified. Use the 'userId' option.");
                    }
                    if (typeof this.options.accessToken !== 'string') {
                        throw new Error("No access token. Use the 'accessToken' option.");
                    }
                    endpoint = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.");
            }
            final = "" + base + "/" + endpoint;
            if (this.options.accessToken != null) {
                final += "?access_token=" + this.options.accessToken;
            } else {
                final += "?client_id=" + this.options.clientId;
            }
            final += "&count=" + this.options.limit;
            final += "&callback=instafeedCache" + this.unique + ".parse";
            return final;
        };

        Instafeed.prototype._genKey = function () {
            var S4;
            S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return "" + (S4()) + (S4()) + (S4()) + (S4());
        };

        Instafeed.prototype._makeTemplate = function (template, data) {
            var output, pattern, varName, varValue, _ref;
            pattern = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/;
            output = template;
            while (pattern.test(output)) {
                varName = output.match(pattern)[1];
                varValue = (_ref = this._getObjectProperty(data, varName)) != null ? _ref : '';
                output = output.replace(pattern, "" + varValue);
            }
            return output;
        };

        Instafeed.prototype._getObjectProperty = function (object, property) {
            var piece, pieces;
            property = property.replace(/\[(\w+)\]/g, '.$1');
            pieces = property.split('.');
            while (pieces.length) {
                piece = pieces.shift();
                if ((object != null) && piece in object) {
                    object = object[piece];
                } else {
                    return null;
                }
            }
            return object;
        };

        Instafeed.prototype._sortBy = function (data, property, reverse) {
            var sorter;
            sorter = function (a, b) {
                var valueA, valueB;
                valueA = this._getObjectProperty(a, property);
                valueB = this._getObjectProperty(b, property);
                if (reverse) {
                    if (valueA > valueB) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                if (valueA < valueB) {
                    return 1;
                } else {
                    return -1;
                }
            };
            data.sort(sorter.bind(this));
            return data;
        };

        return Instafeed;

    })();

    root = typeof exports !== "undefined" && exports !== null ? exports : window;

    root.Instafeed = Instafeed;

}).call(this);
window.omd = window.omd || {};
omd.cutlure = (function () {

    var instagramimagecount = 18;

    function init() {
        // INSTUSERID only exists if the data is populated
        if (typeof INSTUSERID === 'undefined' || $("#instafeed").length == 0) { return; }

        var feed = new Instafeed({
            get: 'user',
            userId: INSTUSERID,
            accessToken: INSTACCESSTOKEN,
            pages: 100,
            limit: instagramimagecount,
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" title="{{caption}}" /></a>',
            error: function () { },
            after: function () {
                layoutFix();
            }
        });
        feed.run();


        function layoutFix() {
            // images in feed
            var feedImages = $("#instafeed a");
            var feedNumImages = $("#instafeed a").length;

            // copy images and append them to the instagram-feed to fill out the 3 row layout
            if (instagramimagecount > feedNumImages) {
                var currcounter = 0;
                for (var i = feedNumImages; i < instagramimagecount; i++) {
                    var node = feedImages[currcounter].cloneNode(true);
                    $("#instafeed").append(node);
                    currcounter++;
                    if (currcounter >= feedNumImages) { currcounter = 0; }
                }
            }

            // add the "large" class enlarge the first item
            $(feedImages[0]).addClass("large");

            // copy items to the left/right
            $("#instafeed-left").html($("#instafeed").html());
            if (feedNumImages % 6 == 0) {
                // make it so the tiles don't align on top of each other on the left & right if there is a even row number that came back
                $("#instafeed-left").randomize("a");
            }

            $("#instafeed-right").html($("#instafeed-left").html());
        }
    } // end init()


    $(document).ready(init);
} ());                 	// Ends Object
window.omd = window.omd || {};
omd.ournews = (function () {

	var _this = this;

	var _parentContainer = ".ourNews";
	var _contentContainer = ".ourNews .dynamicContent";
	var _slider = new omd.slider(false);
	var _dropdown;
	var cache = {};
	var endOfContent = false;
	var selectedYear;
	var updating = false;

	function init(){

		// Cache main jQuery elements for fast access
		_parentContainer = $(_parentContainer);
		_contentContainer = $(_contentContainer);
		_dropdown = _parentContainer.find('.dropdown');
		_slider.setContainer(_contentContainer);

		// Set selected year dynamically
		selectedYear = _dropdown.children().first().text();
		
		// Call initalization functions
		setListeners();
		setInitPosition();

		// Initialize cache for current year
		cache[selectedYear] = cache[selectedYear] || [];

		// Set current to first article in list
		_parentContainer.find('.dropdown a:first-child').addClass('current');

		// Setup drop down and provide selection callback to change year
		_dropdown = new omd.dropdown(_parentContainer, function($menuItem) {
			var newYear = $menuItem.html();
			changeYear(newYear);
		});

	}

	function setListeners(){
		// Listen to slider arrows and decide whether to update content or not
		var callback = function () {
			var inRange = _slider.CURRENT_INDEX > cache[selectedYear].length - 5;
			if (inRange && !updating && !endOfContent) getMoreNews(cache[selectedYear].length);
		}

		// Set default slider listeners
		_slider.setPrevTrigger(_parentContainer.find(".navArrow.left"), callback);
		_slider.setNextTrigger(_parentContainer.find(".navArrow.right"), callback);
		_slider.setTouchTrigger(_contentContainer, callback);
	}

	function setInitPosition(){

		var centerLeft = ($(window).width() / 2) - 390;
		
		// Get initial set of news
		getMoreNews(0, function() {
			_slider.setIndex(0);
		});

	}

	function getMoreNews(ordinal, cb) {

		// Let module know it is updating to prevent duplicating ajax calls
		updating = true;

		var year2;
		if(isNaN(selectedYear)) year2=''; // All
		else year2= selectedYear + '/';

		// Make ajax call to server
		WebService.GetNews(NEWSCMSPATH.replace('{{year}}',year2), ordinal, 10, function(results) {

			// Set end of content if no results are returned
			if (results.length === 0) endOfContent = true;

			render(results, false);

			// Let module know it is ok to update again
			updating = false;
		
			// Run callback if provided
			if (cb) cb();

		});

	}

	function restoreFromCache(cb) {
		
		// Load from cache if not empty
		if (cache[selectedYear].length > 0) {
			render(cache[selectedYear], true);
			if (cb) cb();
		}
		// Get new posts if cache is empty
		else {
			getMoreNews(0, function() {
				if (cb) cb();
			});
		}

	}

	function render(articles, fromCache) {

		// Tempory store for html strings
		var html = '';

		for (var i = 0; i < articles.length; i++) {

			var article = articles[i];
			
			if(article.attachedfile != null) {
				var downloadText;
				if(article.attachedfiletext == "") {
					downloadText = "Download File";
				} else {
					downloadText = article.attachedfiletext;
				}
				article.downloadlink = "<a href='" + article.attachedfile + "'>" + downloadText + "</a>";
			}

			// Parse date into strings for templates
			article.year = article.date.getFullYear();
			article.month = article.date.getMonth();

			// Join all results to one html string
			html += omd.templates.news.render(article);

			if (!fromCache) {
				// Store results in cache
				cache[selectedYear].push(article);
			}
		}

		// Add results to DOM
		_contentContainer.append(html);
    	_contentContainer.children(".item:not(.currentItem)").hide();

		// Update slider with number of projects
		_slider.setNumElements(cache[selectedYear].length);

	}

	function changeYear(selection) {

		// Prevent repeating same year selection
		if (selection === selectedYear) return false;

		// Update selected year
		selectedYear = selection;

		// Initialize cache for if new year
		cache[selectedYear] = cache[selectedYear] || [];

		_contentContainer.fadeOut(omd.fadeSpeed, function() {

			// Clear content
			_contentContainer.html('');

			// Load articles from selected year
			restoreFromCache(function() {

				// Let the slider know to start from the beginning
				_slider.setIndex(0);

				_contentContainer.fadeIn(omd.fadeSpeed);
			});

		});

		// Reset end of content
		endOfContent = false;

		return true;
	}

	$(document).ready(init);

	return {
		changeYear: changeYear
	}

} ()); 	// Ends Object



window.omd = window.omd || {};
omd.careers = (function () {

    var _this = this;
    var _data = new omd.data();
    var _contentContainer = "#dcCareers .countryDropdown";

    var _centerLeft = 0;

    var _countries = COUNTRIES;

    function init() {

        _contentContainer = $(_contentContainer);

        setInitPosition();

        createCountryDropdown(_contentContainer);
    }

    function setInitPosition() {
        _centerLeft = ($(window).width() / 2) - 390;
    }

    //function createCountryDropdown(json){
    function createCountryDropdown(container) {

        var _dropdown = $(document.createElement("select"));
        if (!(typeof CHOOSEACOUNTRY === 'undefined')) {
            _dropdown.attr("data-placeholder", CHOOSEACOUNTRY);
        } else {
            _dropdown.attr("data-placeholder", "Choose a Country...");
        }
        _dropdown.attr("class", "chzn-select");
        _dropdown.css("width", "100%");
        _dropdown.appendTo(container);

        for (var i = 0; i < _countries.length; i++) {
            var option = $(document.createElement("option"));
            option.attr("value", _countries[i]);
            option.html(_countries[i]);
            option.appendTo(_dropdown);
        }

        _dropdown.chosen();
        _dropdown.on("change", getContactInfo);
    }

    function getContactInfo(e) {
        var dropdown = e.currentTarget;

		
		_data.getCareersContactsJSON(dropdown.options[dropdown.selectedIndex].value);

		var callback = $.subscribe("event/getCareersContactsJSON", function(results){
			showContactInfo(dropdown, results);
            $.unsubscribe(callback);    
		});
    }

    function showContactInfo(dropdown, json) {
        $(_contentContainer.parent().find('.chzn-container')).removeClass('chzn-container-active');
        var contactBox = $(_contentContainer.parent().find(".box"));

        var html = "";
        if (!(typeof CAREERSRESULTS === 'undefined')) {
            html += "<p>" + CAREERSRESULTS + "<br/>&nbsp;</p>";
        } else {
            html += "<p>For more information and current openings contact:<br/>&nbsp;</p>";
        }
        for(var i = 0; i < json.length; i++){
            html += omd.templates.contact_info.render(json[i]);
        }
        contactBox.html(html);
        contactBox.fadeIn(200);
    }

    $(document).ready(init);
} ());    	// Ends Object

window.omd = window.omd || {};
omd.careers = (function () {

    var _this = this;
    var _data = new omd.data();
    var _linkContainer = ".contactUs .staticContent";
    var _contentContainer = ".contactUs .dynamicContent p";
    var _curSelection = -1;

    function init() {

        _linkContainer = $(_linkContainer);
        _contentContainer = $(_contentContainer);

        setListeners();

        _curSelection = 4;
        $('section.contactUs h2#4').addClass("selected");
        getContactInfo(4);
    }

    function handleMouseDown(e) {

        cancleMouseEvent(e);
        var parent = $(e.currentTarget).parent(".staticContent");
        for (var i = 0; i < parent.children().length; i++) {
            //alert(parent.children().eq(i));
            parent.children().eq(i).removeClass("selected");
        }

        $(e.currentTarget).addClass("selected");
        _curSelection = e.currentTarget.id;
        getContactInfo(e.currentTarget.id);
    }

    function handleMouseOver(e) {
        e.currentTarget.className = "selected";
    }

    function handleMouseOut(e) {
        if (e.currentTarget.id != _curSelection)
            e.currentTarget.className = "";
    }

    function setListeners() {
        $(_linkContainer).on("mousedown", "h2", handleMouseDown);
        $(_linkContainer).on("mouseup", "h2", cancleMouseEvent);
        $(_linkContainer).on("click", "h2", cancleMouseEvent);
        $(_linkContainer).on("mouseover", "h2", handleMouseOver);
        $(_linkContainer).on("mouseout", "h2", handleMouseOut);
    }

    function cancleMouseEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function getContactInfo(id) {
        $('.contactUs .dynamicContent div').hide();
        $('#contactdata_' + id).show();
    }

    $(document).ready(init);
} ());   	// Ends Object



window.omd = window.omd || {};
omd.ourLocations = (function () {
    $('div.regionalLocation').appendTo($('#dcLocations .staticContent'));
    var _this = this;
    var _data = new omd.data();
    var _contentContainer = "#dcLocations .countryDropdown";

    var _centerLeft = 0;

    //temporary data
    var _countries = LOCATIONS;

    function init() {

        _contentContainer = $(_contentContainer);

        setInitPosition();

        createCountryDropdown(_contentContainer);
    }

    function setInitPosition() {
        _centerLeft = ($(window).width() / 2) - 390;
    }

    //function createCountryDropdown(json){
    function createCountryDropdown(container) {

        /*
        <select data-placeholder="Choose a Country..." class="chzn-select" style="width:350px;" tabindex="2">
        <option value=""></option> 
        <option value="United States">United States</option> 
        <option value="...">...</option> 
        </select>
        */

        var _dropdown = $(document.createElement("select"));
        if (!(typeof CHOOSEACOUNTRY === 'undefined')) {
            _dropdown.attr("data-placeholder", CHOOSEACOUNTRY);
        } else {
            _dropdown.attr("data-placeholder", "Choose a Country...");
        }
        _dropdown.attr("class", "chzn-select");
        _dropdown.css("width", "100%");
        _dropdown.appendTo(container);

        for (var i = 0; i < _countries.length; i++) {
            var option = $(document.createElement("option"));
            option.attr("value", _countries[i].name);
            option.attr("data-nodeid", _countries[i].id);
            option.html(_countries[i].name);
            option.appendTo(_dropdown);
        }

        _dropdown.chosen();
        _dropdown.on("change", getLocationInfo);
    }

    function getLocationInfo(e) {
        var dropdown = e.currentTarget;
		var selectedID = $(dropdown.options[dropdown.selectedIndex]).data('nodeid');
		$('div.regionalLocation').hide();
		$('div.regionalLocation[data-locationid="' + selectedID + '"]').show();
    }

    function showLocationInfo(dropdown, json) {
        $(_contentContainer.parent().find('.chzn-container')).removeClass('chzn-container-active');
        var contactBox = $("#our-locations .staticContent");

        contactBox.css("visibility", "visible");

        contactBox.fadeOut(0);
        
        var html = "";
        for(var i = 0; i < json.length; i++){
            html += omd.templates.location_info.render(json[i]);
        }
        contactBox.html(html);

        contactBox.fadeIn(200);
    }

    $(document).ready(init);
} ());    	// Ends Object



window.omd = window.omd || {};
omd.ourServices = (function () {

    var _parentContainer = ".ourServices";
    var _contentContainer = ".ourServices .services";
    var _itemWidth = 270;
    var _animationSpeed = 400;
    var _currentIndex = 0;
    var _displayCount = 3;
    var _next = ".ourServices .navArrow.right";
    var _prev = ".ourServices .navArrow.left";
    var _open = ".ourServices .service";
    var _dropdown;
    var _isAnimating = false;
    var _isOpen = false;
    var _$services;


    function init() {
        _parentContainer = $(_parentContainer);
        _contentContainer = $(_contentContainer);
        _next = $(_next);
        _prev = $(_prev);
        _$services = $(_contentContainer).find(".service");

        setItemParams();
        setListeners();
        animateToPosition();

        // Setup drop down with default functionality
        _dropdown = new omd.dropdown(_parentContainer);
    }

    function setItemParams() {
        _displayCount = window.innerWidth <= 700 ? 2 : 3;
        _itemWidth = _contentContainer.find(".service").outerWidth();
    }

    function handleNext() {
        if (_isAnimating) { return; }
        if (_currentIndex + 1 < _contentContainer.find(".service").length - (_displayCount - 1)) {
            _currentIndex = _currentIndex + 1;
            animateToPosition();
        }
    }

    function handlePrev() {
        if (_isAnimating) { return; }
        if (_currentIndex - 1 >= 0) {
            _currentIndex = _currentIndex - 1;
            animateToPosition();
        }
    }

    function handleOpen(e) {
        if ($(this).css("opacity") == 0) { return; } // don't allow hidden ones to be clicked at the border of the page

        _next.unbind("click");
        _next.addClass("notAvailable");
        _prev.unbind("click");
        _prev.addClass("notAvailable");

        var target = $(e.target).hasClass("service") ? $(e.target) : $(e.target).parents(".service");
        _contentContainer.stop().animate({ opacity: 0 }, _animationSpeed, function () {
            $(this).find(".service").each(function (i) {
                if (target.index() != $(this).index()) {
                    $(this).removeClass("open").css({ display: "none" }).unbind("click");
                }
                else {
                    $(this).css({ opacity: 0, "margin-left": -parseInt(_contentContainer.css("left")) + "px" });
                }
            });

            $(this).css({ opacity: 1 });
            _isOpen = true;
            _contentContainer.parents('section').addClass('open');
            target.addClass("open").unbind("click").stop().animate({ opacity: 1 }, _animationSpeed);
            target.find(".close").bind("click", handleClose);
        });

    }

    function handleClose(e) {
        _isOpen = false;
        _contentContainer.parents('section').removeClass('open');
        _next.removeClass("notAvailable");
        _prev.removeClass("notAvailable");

        $(e.target).closest(".open").stop().animate({ opacity: 0 }, _animationSpeed, function () {
            $(this).removeClass("open");
            _contentContainer.css({ opacity: 0 });
            _contentContainer.find(".service").each(function () {
                $(this).css({ display: "inline-block", opacity: 1, "margin-left": 0 }).unbind("click").bind("click", handleOpen);
            });

            _next.click(handleNext);
            _prev.click(handlePrev);
            animateToPosition();
            _contentContainer.stop().animate({ opacity: 1 }, _animationSpeed);
        });

    }

    function updateButtonVisibilty() {
        if(!_isOpen){
        _prev.toggleClass("notAvailable", _currentIndex == 0);
        var displayingLastService = _$services.length - _displayCount === _currentIndex;
            var allAreDisplayed = _$services.length < _currentIndex + 1;
        _next.toggleClass("notAvailable", displayingLastService || allAreDisplayed);
        }
    }

    function setListeners() {
        _next.click(handleNext);
        _prev.click(handlePrev);
        _contentContainer.on("click", ".service:not(.open)", handleOpen);

        _contentContainer.on("swipeleft", ".service:not(.open)", handleNext)
            .on("swiperight", ".service:not(.open)", handlePrev);

        $(window).on("resize", function () { setItemParams(); animateToPosition(); })
    }

    function animateToPosition() {
        if (_isAnimating) { return; }
        _isAnimating = true;

        var currentIndex = _currentIndex; // local copy! 
        animateElement(_contentContainer, { "left": -_itemWidth * currentIndex + "px" });

        var $services = _contentContainer.find(".service");
        var $selected = $services.slice(_currentIndex, _currentIndex + _displayCount);
        var $notSelected = $services.not($selected);

        animateElement($notSelected, { opacity: 0 });
        animateElement($selected, { opacity: 1 });

        _isAnimating = false;
        updateButtonVisibilty();
    }

    function animateElement($el, props) {
        if (Modernizr.csstransitions) {
            $el.css(props);
        } else {
            $el.stop().animate(props);
        }
    }

    $(document).ready(init);
}());   // Ends Object
﻿function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var lang = getParameterByName('lang');
var countryName = window.location.pathname.split( '/' )[1];
var setCountryLanguageCookie = function (countryName, language) {
    var date = new Date();
    date.setTime(date.getTime() + 7776000000);
    var expires = "; expires=" + date.toGMTString();
    document.cookie = 'omd_' + countryName.toLowerCase() + '_translation=' + language + expires + '; path=/'
}


$('#curr_language').hide();

