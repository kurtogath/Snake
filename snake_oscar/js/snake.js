/*
$(document).ready(function(){
    window.addEventListener("keyPress", myEventHandler, false);
});
*/


window.onload = function () {
    window.addEventListener("keypress", myEventHandler);

};

function myEventHandler(e){
    var keyCode = e.keyCode;
    if(keyCode === 37){
        //alert("Izquierda");
    }else if (keyCode === 38){
        //alert("Arriba");
    }else if(keyCode === 39){
        //alert("Derecha");
    }else if(keyCode === 40){
        //alert("Abajo");-
    }
}