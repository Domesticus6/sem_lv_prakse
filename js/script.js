  $(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.center-block');
   var offset = startchange.offset();
   $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar-collapsed').css('background-color', '#fafafa');
      $('header').css('background-color', '#fafafa');
      $("header").css("opacity", "0.9");
      $("header").css("position", "fixed");
      $("header").css("top", "0");
      $("header").css("z-index", "1");
      $("header").css("height", "100px");
    } else {
      $('#navbar-collapsed').css('background-color', 'transparent');
      $('header').css('background-color', 'transparent');
      $("header").css("height", "-20px");
      $("header").css("position", "relative");
      $("header").css("height", "0");
    }
  });
 });