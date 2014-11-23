

//assuming that by the time we scroll the doc is ready
// set a time out so we're not calling the function too rapdily.
scrollIntervalID = setInterval(fixHeader, 17); // = 60 FPS
   

function fixHeader() {

    // where is the header?
      headPosition=$('header').offset();


    // if its anywhee but at the very top of the screen, fix it
   if ($(window).scrollTop() >= 1) {
   // if (headPosition.top > 0){
        $('body').addClass('fixed-header');
       console.log("on target");
        
    }
    
   // otherwise, make sure its not fixed
    else {
        $('body').removeClass('fixed-header');
    }
};

/*

<span class='st_twitter' displayText='Tweet'></span>
<span class='st_facebook' displayText='Facebook'></span>
<span class='st_linkedin' displayText='LinkedIn'></span>

<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "3e767648-d198-4348-9889-52dbb21aa548", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
*/






