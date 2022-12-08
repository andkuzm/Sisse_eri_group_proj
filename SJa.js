 //allikas: https://codepen.io/Cory_/pen/PRBOgVS
 var looper;
 var degrees = 0;
 function rotateAnimation(el,speed){ //teeb pandud element pöörata "speed" kiirusega.
     var elem = document.getElementById(el);
     if(navigator.userAgent.match("Chrome")){
         elem.style.WebkitTransform = "rotate("+degrees+"deg)";
     } else if(navigator.userAgent.match("Firefox")){
         elem.style.MozTransform = "rotate("+degrees+"deg)";
     } else if(navigator.userAgent.match("MSIE")){
         elem.style.msTransform = "rotate("+degrees+"deg)";
     } else if(navigator.userAgent.match("Opera")){
         elem.style.OTransform = "rotate("+degrees+"deg)";
     } else {
         elem.style.transform = "rotate("+degrees+"deg)";
     }
     looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
     degrees++;
     if(degrees > 359){
         degrees = 1;
     }
     document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
 }