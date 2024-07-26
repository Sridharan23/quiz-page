let o = document.querySelector(".menu")
let c = document.querySelector(".close")
let sidenav = document.querySelector(".sidenav")

 c.addEventListener("click",()=>{
    
    sidenav.style.transform="translateX(-800px)"
 })

 o.addEventListener("click",()=>{
    sidenav.style.transform="translateX(0px)"
 }) 

 let popup = document.querySelector(".popup")
 let cancel = document.querySelector(".cancel")
 let start =document.querySelector(".continue")

 let startBtn = document.querySelector(".startButton")

 startBtn.addEventListener("click",()=>{
   popup.style.display = "flex"
 })
 cancel.addEventListener("click",()=>{
   popup.style.display = "none"
 })