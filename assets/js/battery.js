

batteryFunction=function(battery) {
     console.log(battery);
    
    // level
    
    // status
    
    // discharge time
    
    level=battery.level;
    
    charging=battery.charging;
    
    timeToDie=battery.dischargingTime;
    
    if (timeToDie=='Infinity') {
           timeToDie='&infin;';
    } else {
        timeToDie='about'+Math.floor(timeToDie/60) + 'minutes';
    }
    
 message = '<ul>'
               +'<li>Battery level: '+level+'</li>'
               +'<li>Charging: '+charging+'</li>'
               +'<!-- li>Battery depleted in: '+timeToDie+'</li -->'
            +'</ul>'
 
 
 ;

  $('.battery-status__loader').replaceWith(message);
};



// battery status for firefox,  safari
var batteryObj = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

document.addEventListener("DOMContentLoaded", function(event) {


    if (batteryObj) 
    
    {
           batteryFunction(batteryObj);
    } 

    else if (navigator.getBattery) 

    {
        //battery status for chrome
        navigator.getBattery().then(function(batteryObj) {
            
        batteryFunction(batteryObj); 
            
        });
    }
    
    else {
       $('.battery-status__loader').html('<p>It looks like your browser doesn&#39;t support the Battery API</p>'); 
    }
  });  




/*
#################### Save to dev before compiling!!!!!!!!!!!!!!!!!!!!!!!
*/


