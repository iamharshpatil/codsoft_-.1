
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
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


