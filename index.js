let o = document.querySelector(".menu")
let c = document.querySelector(".close")
let sidenav = document.querySelector(".sidenav")

 c.addEventListener("click",()=>{
    
    sidenav.style.transform="translateX(-800px)"
 })

 o.addEventListener("click",()=>{
    sidenav.style.transform="translateX(0px)"
 }) 