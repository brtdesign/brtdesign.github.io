 
/*#######################################
Fix the header in position.
1.) Standard header adds a class to position:fix.
2.) img-header calculates the offset based on the height of the header, so it locks to position as nav bg when its scrolled off the screen.
#######################################*/
function fixHeader() {
   if ($(window).scrollTop() >= 15) {
        $('body').addClass('fixed-header'); 
    }
    else {
        $('body').removeClass('fixed-header');
    }
    
    // if we use a more graphic header than the standard 
    if ($('.img-header').length) {
    
        var headHeight=$('header').height();
        var navHeight=$('.wrapper').height();
        var headOffset=headHeight-navHeight;
        //var contentInitialMargin=$('main').css('padding-top');
        
           if ($(window).scrollTop() >= headOffset) {
            //console.log(headOffset);
               $('header').css({
               'position': 'fixed',
                   'top': '-'+headOffset+'px'
                   //'box-shadow': '0 0 3px 3px rgba(0,0,0, 0.3)'
               })
                var padtop=headOffset-20; // unfortunate magic number to stpo things jumping around 
               $('body').css({
                   'padding-top':padtop +'px'
               })
               
            } else {
                  $('header').removeAttr('style');
                    $('body').removeAttr('style');
                }
            };
};


$(document).ready(function(){ 
        scrollIntervalID = setInterval(fixHeader, 17); // = 60 FPS
});

    





