

//assuming that by the time we scroll the doc is ready
// set a time out so we're not calling the function too rapdily.
scrollIntervalID = setInterval(fixHeader, 17); // = 60 FPS
   

function fixHeader() {

    // where is the header?
      headPosition=$('header').offset();


    // if its anywhee but at the very top of the screen, fix it
   if ($(window).scrollTop() >= 380) {
   // if (headPosition.top > 0){
        $('body').addClass('fixed-header');   
    }
    
   // otherwise, make sure its not fixed
    else {
        $('body').removeClass('fixed-header');
    }
};








