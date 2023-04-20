var openBtn = document.querySelector(".humberger");
var closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", ()=>{
    document.querySelector(".side-bar").style.width = "200px";
})

closeBtn.addEventListener("click", ()=>{
    document.querySelector(".side-bar").style.width = "0px";
})