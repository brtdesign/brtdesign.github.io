// Assumption: If the page is being scrolled, its probably ready();

 var offset = $( "header" ).offset();

$(window).scroll(function() {
    
    // I imagine this is horribly inefficent
    // var offset = $( "header" ).offset();
    
    console.log(offset.top);
    

    if ( $('body').scrollTop() > offset.top){
        $('header').addClass('fixed-header');
       // $('header').css('height', offset.top);
    } else {
         $('header').removeClass('fixed-header');
    } 
});