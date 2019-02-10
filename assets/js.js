
var subfilters = false;
bindfilters();
function bindfilters(){

  console.log("bind filters click handler")
  
  $(".filteroption").off();
  $(".filteroption").on( "click", function(event) {

    console.log(" filtersoption click handler" +this);
    $(".projectitem").show();
    event.preventDefault();

    //add class to active filter
    var $filter = $(this)
    console.log('fiter: ' + $filter+', this: ' +this)
    $filter.addClass("active");
    var filterclass = $filter.text();
    console.log('filterclass: ' + filterclass)
    if (filterclass == "Software Engineering") {
      $(".pm").hide();
      
      if (subfilters == false ) {
        subfilters = true
        $(".filter").append('<a href="#" data-filter="js" class="filteroption java">Javascript</a>'); 
        $(".filter").append('<a href="#" data-filter="node" class="filteroption">Node.js</a>'); 
        $(".filter").append('<a href="#" data-filter="react" class="filteroption">React</a>'); 
      }
      
      //append other filter options, javascript, etc.
      bindfilters();
    }
    if (filterclass == "all") {
      $(".projectitem").show();
      //append other filter options, javascript, etc.
    }
    if (filterclass == "Product Management") {
      //only show divs with class of pm 
      $(".se").hide();
      $(".pm").show();

    }
    if (filterclass == "Javascript"){
      $(".node").hide();
      $(".pm").hide();
      $(".react").hide();
      $(".js").show();




    }
    if (filterclass == "Node.js"){
      $(".node").show();
      $(".pm").hide();
      $(".react").hide();
      $(".js").hide();


    }
    if (filterclass == "React"){
      $(".node").hide();
      $(".pm").hide();
      $(".react").show();
      $(".js").hide();

    }
  });
}




///////// animation


jQuery(function($) {
  console.log('animation click handler')
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
        console.log($animatables);
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      console.log('$animatables.length == 0')
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});


