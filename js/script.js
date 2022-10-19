$(document).ready(function () {
   $('.dropdown-menu').removeClass("collapsible");
   $('.dropdown-menu').css("display","none");
    $('.box-inner').hover(function () {
        $(this).addClass('flip');
    }, function () {
        $(this).removeClass('flip');
    })

    $('.navbar-toggle').click(function () {
      var el =$('.dropdown-menu');
      if(el.hasClass("collapsible")){
         el.removeClass("collapsible"); 
         el.css("display","none"); 
      }
      else{
      el.addClass("collapsible"); 
      el.css("display","block"); 
      }
   });
});

