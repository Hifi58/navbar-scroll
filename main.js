window.onscroll = function() { slideDown() } ;

function slideDown() {
    const toppixel = document.documentElement.scrollTop;
    console.log(toppixel);
    if(toppixel > 1){
        document.getElementById("navbar").style.top = "0px";
    }
    else{
        document.getElementById("navbar").style.top = "-56px";
    }
   }