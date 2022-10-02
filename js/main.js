$(function(){

 $('.carousel__inner').slick({
  arrows: false,
  dots: true,
  slidesToShow: 3,
 });

 wow = new WOW(
   {
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
   }
 )
 wow.init();

});
