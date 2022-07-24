var typed = new Typed('.target', {
    strings: ["Learn More About GDSC.....", "Join With Us Now....."],
    typeSpeed: 60
});
$(document).ready(function(){
    $(".wrapper").fadeOut(3000,function(){
        $("body").css("overflow","auto")
    })
})
$(window).scroll(function(){
    let curentOffset=$(window).scrollTop();
    if(curentOffset>100){
        $(".navbar").css({"background-color":"rgba(0,0,0,0.4)","transition":"all 1s"})
    }
    else{
        $(".navbar").css("background-color","transparent")
    }
})
new WOW().init();