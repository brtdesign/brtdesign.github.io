


function fixPosition() {
    console.log($(window).scrollTop());
 // if its anywhee but at the very top of the screen, fix it
   if ($(window).scrollTop() >= headerHeight) { // magic number offset that just feels right to prevent the 'bounce'
   // if (headPosition.top > 0){
        $('body').addClass('js-fix-positions');   
    }
    
   // otherwise, make sure its not fixed
    else {
        $('body').removeClass('js-fix-positions');
    }
};


//Generate the weight guide meter with JS as its pretty useless without it, without some server side intervention

function createBasketWeightGuide(){
    // create the element for the guide
    $('.af__basket__weight-guide--label').after('<div class="js-af__weight-guide__wrapper"></div>');
    $('.js-af__weight-guide__wrapper').append('<div class="js-af__weight-guide__meter"></div>');
    
    $('.af__product__add-to-basket').submit(function(e){
         e.preventDefault();
        //var $multiplier=
         weightGuideListener();
    })
}

function weightGuideListener(){
        var $bar = $('.js-af__weight-guide__meter');
        
    //Didnt work as expected, so used this for speed: http://stackoverflow.com/questions/12945352/change-width-on-click-using-jquery
    
    var $percentage = (100 * parseFloat($bar.css('width')) / parseFloat($bar.parent().css('width')) +10 + '%');
        $bar.css("width", $percentage);
    
    var $message = $('.af__basket__weight-guide--cta');
      
     currentWidth=parseInt($percentage);
    console.log(currentWidth);
    // cannot use switch for less than
    if (currentWidth <= 21 ){
         $message.text('Plenty of room');
    }
    else if (currentWidth <= 45){
        $bar.css('background-color', '#ee0');
      
    } 
    else if (currentWidth <= 65){
        $bar.css('background-color', '#c1ea39');
        $message.text('Getting there...')
    } 
     else if (currentWidth <= 80){
         $message.text('Room for a little one?');
     }
    
    else if (currentWidth <= 89){
         $message.text('Almost full!');
     }
    
     else if (currentWidth >= 95 && currentWidth <= 99){
         $message.text('Lookin\' good!');
     }
    
    else if (currentWidth <= 99.9){
        $bar.css('background-color', '#3ece38');
    } 
    else {
        $bar.css('background-color', '#d00');
        $bar.css("width", "100%");
        $message.text('(Delivery band 2 logic)');
    }
}



function selectOnFocus(){
    $('.af__product__add-to-basket input').focus(function(){
        this.select();
    })
};





$(document).ready(function(){
    headerHeight=$('.af__header').outerHeight(); // icnludes padding and margins
    scrollIntervalID = setInterval(fixPosition, 16); // = 60 FPS
    createBasketWeightGuide();
    selectOnFocus();
});


