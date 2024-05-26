
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("h1 ,a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate("h2,h4" /* Element to target.*/, {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.imageEffect(".me", {
    style: 6,
    debug: false,
    config:{"noiseDetail":{"value":14.5,"range":[0,100]},"distortionAmount":{"value":0.76,"range":[0,10]},"scale":{"value":53.44,"range":[0,100]},"speed":{"value":0.48,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9827812957763672},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

var menu = document.querySelector("h4")
var blank = document.querySelector(".blank")
var icon = document.querySelector("h4")


var flag = 0


menu.addEventListener("click",()=>{

    if(flag == 0){
     blank.style.top = 0 ;
     icon.innerHTML = '"<i class="ri-close-line"></i>"'
     flag = 1
    }else{
        blank.style.top = "-100%" ;
        icon.innerHTML = '"<i class="ri-menu-3-line"></i></i>"'
        flag = 0 
    }
})


