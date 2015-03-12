
      //document.domain = "slimmingworld.dev";

/* ######################################################

Doc ready functions

#######################################################*/

$(document).ready(function() {

       setupMasonary();
       $('.theme__holder').removeClass('loading');
       themeListener();
});

scrollUp=function(){
     $("html, body").animate({ scrollTop: 0 }, "slow");

}

/* ######################################################

Instantiate masonary

#######################################################*/

   var $container = $('.theme__holder');

setupMasonary=function(){
   // arrange items using masonary

    $container.imagesLoaded( function() {
        $container.masonry ({
          itemSelector: '.theme__card'
            });
        });
   };

/* ######################################################

Event listeners for clicks on the thumb cards

#######################################################*/
// loadedMenu gets appended to the link through to the email system
var loadedMenu=0;

themeListener = function(){
    // listener on navigation item
    $('#js-themes-nav').click(function(event){
        event.preventDefault();
        // remove the menu thats showing
        removeThemePage();
    });

    // click event listeners on the theme cards
    $('.theme__card__link').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('visited');
        fadeCard($(this).parent(), '0.5', '0'); // force this one as we want it to dissapear immediately
        var pageToLoad=($(this)).attr('href');
        fadeAllThumbs('out', pageToLoad); // can be in or out
        //store the one weve picked as loadedMenu var. It gets appended to the query string when the menu slides in.
        getRecipeImage(pageToLoad);
        loadedMenu=$(this).attr('data-val-menu_id');
    });
};


/* ######################################################

The animations for cards fading in and out

#######################################################*/

// function to animate opacity and scale
fadeCard = function(elem, cardScale, cardOpacity){
    if (cardOpacity==1) {
        thisBlur='blur(0px) grayscale(0%)';
    }
    else {
        thisBlur='blur(30px) grayscale(100%)';
    }

        elem.transition({ // requires transit.js
        scale:cardScale,
        opacity:cardOpacity,
       //rotateY: '15deg',
       // -moz-filter:thisblur,
       filter:thisBlur,

        },
        275,
        'easeOutSine'
        )
    }


/* ######################################################

Toggle instruction visibility

#######################################################*/

toggleInstructions=function(toShow){
    $('.instructions').transition({
        opacity:0
    }, 150, function(){
        $(this).css('display','none');
        $(toShow).css('display','block');
    });


     $(toShow).transition({
            opacity:1
        });
}

/* ######################################################

Fade in or out the theme card thumbs

#######################################################*/

fadeAllThumbs=function(inOrOut, pageToLoad){

    // some basic vars dependent on wether we are going in or out
    if  (inOrOut=='out'){
        var cardScale="0.5";
        var cardOpacity="0";
        toggleInstructions('.js-step-2'); // just a dumb hide function

    } else {
        var cardScale="1";
        var cardOpacity="1";
        toggleInstructions('.js-step-1');
    }


    //loop through the thumbs and fade them in or out
        $.each(cardArray, function(i, val) {
            setTimeout(function() {
                fadeCard($(val), cardScale, cardOpacity);

            // if we're on the last card, start to bring in the menu
                if ((i+1)==cardArray.length && inOrOut=='out'){
                    setTimeout(function() {
                      scrollUp();
                      loadThemePage(pageToLoad);
                    }, 250); // delay on menu coming in -  slight pause, otherwise its a bit too aggressive
                }
            }, (i+1) * 65); // setInterval timeout value - add a slight delay to get the aniamtions starts staggered
        }); //((i+1)/i) * 125)


  $container.masonry('bindResize');
};

/* ######################################################

loadThemePage: main theme page with menu and link to recipes

#######################################################*/

loadThemePage=function(whichPage){

   // Create a holder with loading text. Create this here so we can have a nice loading function.
   // $('#results').append('<section class="fff-panel loading" id="json-'+whichPage+'">loading&hellip;</section>');
   var pageToLoad=whichPage + ' .menu'; // just traget the menu element

   $('.theme__holder').append('<div class="menu__holder"></div>'); // this will get deleted when we dont need it

   $('.menu__holder').load(pageToLoad, function(){
            $('.menu__card__header').arctext({radius: 720});
            $('.menu').transition({
                opacity:1,
                visibility:'visible',
                rotate:'-4deg',
            }, 350);

            // set up the events listeners
            recipeClickEvents();

    });

            toggleNav();
        };



removeThemePage=function(){

    $('.menu').transition({
        opacity:0,
        scale:1,
        //left:120,
         rotate:'-3deg',
        filter:'blur(30px)'
    }, 255, function(){
         $('.menu__holder').remove(); // delete the holder, it gets recreated
            fadeAllThumbs('in');
           // showHideNav(); // causes unexpected show/hide flash
            toggleNav();
 // Force reseting arrows as this can get muddled up
        // pretty poor way to tdo this, but no time to refactor
                    navExpanded=false;
                    navShowing=false;
                    $('.theme--supplemental__header').find('.left-arrow').transition({
                rotate:'0deg',
                color:'#fff'
             });

            $('.theme--supplemental__header').find('.right-arrow').transition({
                rotate:'-0deg', // CCW
                color:'#fff'
             });
            removeRecipe();

    });
}

/* ######################################################

Listener events for recipes
Needs to be called when the menu load completes

#######################################################*/
recipeClickEvents=function(){
        $('.recipe-loader').click(function(event){
            event.preventDefault();
            var pageToLoad=$(this).attr('href');
            animateMenu(pageToLoad); // much smoother animation doing this consequtively instead of concurrently


            if (navExpanded) { // navExpanded is set to false, then toggled. Set further down
              showHideNav();
            };
//
        });
    };

animateMenu=function(pageToLoad){
    $('.menu').transition({
           scale:0.65,
           left:0,
           top:0,
           rotate:'4deg'
           // filter:'blur(2px)'
        }, 255, function(){
        loadRecipe(pageToLoad); // much smoother animation doing this consequtively instead of concurrently
    });
}

loadRecipe=function(pageToLoad){

            if ($('.recipe__holder')) { // check if one exisits...
                  $('.recipe__holder').transition({ //... and remove it if it does
                        opacity:0, //fade out

                  }, 255, function(){
                      $(this).remove(); // delete
                  })
            } // end if


            $('.menu__holder').after('<div class="recipe__holder"></div>');

           // $('.recipe__holder').append('<img src="../themes/assets/images/ajaxloader.gif" class="loader">');
            loadFragment=pageToLoad+'?'+new Date().getTime()+' #main'; // The quotes must have space character at the start.

            $('.recipe__holder').load(loadFragment, function( response, status, xhr ){
                 showRecipe();

            });
        }


recipeCloseListener=function(){

   $('.close-recipe').click(function(){

          $('.recipe__holder').transition({
                    opacity:0,//fade out
                    //filter:'blur(15px)'
              }, 255, function(){
                  $(this).remove(); // delete
         });

         $('.close-recipe').transition({
                    opacity:0//fade out
              }, 255, function(){
                  $(this).remove(); // delete
         });


        $('.menu').transition({
           scale:1,
           left:0,
           top:0,
           rotate:'-4deg'
           // filter:'blur(2px)'
        }, 255);
    });
}
// need to strip the img tag from the html rather than hiding it in CSS

showRecipe=function( response, status, xhr ){
       scrollUp();
    $('.recipe__holder').css({
        filter:'blur(10px)'
    });
    //console.log( status, xhr );
    $('.recipe__holder').transition({
        opacity:1,
        filter:'blur(0px)'
    }, 455, function(){

           $('.recipe__holder').before('<b class="close-recipe">X</b>');
           recipeCloseListener();
    });
}



//// called when we go back to theme cards [age]
removeRecipe=function(){
     $('.recipe__holder').transition({
        opacity:0,
          filter:'blur(15px)'
       // left:'-4px'
    }, 250, function(){
         $('.recipe__holder').remove();
         $('.close-recipe').remove();
     });

        $('.theme-bg').transition({
        opacity:0

       // left:'-4px'
    }, 650, function(){
          $('.theme-bg').remove();
     });

}

/* #############################################

GET CUSTOM RECIPE IMAGES. Called when we load in the menus.

############################################## */
var fileName=''; // define here so we can call anywhere
getRecipeImage=function(path){

    // get an image equivilent to the filename

    var fileNameIndex=path.lastIndexOf("/")+1; // count to the last slash
     fileName=path.substr(fileNameIndex); // strip everything before the character we just counted to
    //fileName=fileName.replace('.html', '.png'); // change the extension to jpg/png
fileName=fileName.replace('.html', '');
    // prepending is easier to deal with stacking order/z-index
//    $('.wrapper').prepend('<img src="../themes/assets/images/recipes/menu-pics/'+fileName+'" class="recipe--image">');

    $('body').prepend('<div class="theme-bg '+fileName+'"></div>');
// image loaded?
      setTimeout(function() {
            $('.theme-bg').transition({
        opacity:1
    }, 455);
}, 955);

}



/* #############################################

Nav bar functions.
1). toggleNav : Slide the nav into view ona menu page
2). expandNav :Extend it to show fill height

############################################## */

// this is the intial view
var navShowing=false; // set this as a var so we can just call toggleNav without worrying about its current state
var navExpanded=false;

toggleNav = function(){
    if (navShowing) {
        $('.theme--supplemental').transition({
           top:'-250px'
        });
        navShowing=false;
    }
    else {
       setTimeout(function() { // staggger the animation on unloading
        $('.theme--supplemental').transition({
            top:'-130px'// this should really be a var
        });
       }, 1200);
        navShowing=true;
    }



        // set up the cvontents of the nav bar with the corrct references from the loaded menu
        var currentUrl = $('.email-invite').attr('href');
     // remove query string
        currentUrl=currentUrl.split("?")[0];
     // gets stored as a global var when we click a card
        currentUrl += '?ChosenTemplateId=' + loadedMenu;
        //$('.email-invite').attr('href', currentUrl);
        $('#print-menu').attr('href', 'assets/pdfs/menus/'+fileName+'.pdf'); // defined when load ina menu. the .html file

        $('#print-invite').attr('href', 'assets/pdfs/ecards/'+fileName+'.jpg'); //
};  // close toggleNav


// function for expanding the nav to reveal the full contents
    $('.theme--supplemental__header').click(function(event){
      showHideNav(); // moved so we can call from other than click
    });

showHideNav=function(){
       if (!navExpanded) {

           navExpanded=true;

            $('.theme--supplemental').transition({
                top:'0px'
            });

          $('.theme--supplemental__header').find('.left-arrow').transition({
            rotate:'270deg', // negative defines the direction of spin
              color:'#D5DC31'
          });

           $('.theme--supplemental__header').find('.right-arrow').transition({
            rotate:'-270deg',
            color:'#D5DC31'
          });



} else {

     navExpanded=false;

   $('.theme--supplemental').transition({
            top:'-130px' // this should really be dynamic
        });

    $('.theme--supplemental__header').find('.left-arrow').transition({
        rotate:'0deg',
        color:'#fff'
     });

    $('.theme--supplemental__header').find('.right-arrow').transition({
        rotate:'-0deg', // CCW
        color:'#fff'
     });
    }
} // close show hide nav



/* ######################################################

Define the array for the theme cards - doesnt seem to work on $ready

#######################################################*/

    // store all the card onjects in an array, we loop through them later to create the sequential animations etc
    var cards = $('.theme__card');
    var cardArray = $.makeArray(cards);
