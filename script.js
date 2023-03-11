document.addEventListener('DOMContentLoaded', () => {
    const DOMEls = {
        menuBtn: document.querySelector(".header__burger"),
        modal: document.querySelector(".modal"),
        body: document.querySelector("body"),
        close: document.querySelector(".modal__close")
    }
    
    DOMEls.menuBtn.addEventListener("click", () => {
        DOMEls.modal.classList.add("open");
        DOMEls.body.style = "overflow-y: hidden";
    });
    DOMEls.close.addEventListener("click", () => {
        DOMEls.modal.classList.remove("open");
        DOMEls.body.style = "overflow-y: visible";
    })

    if(window.innerWidth <768) {
        AOS.init({once:true, offset: 0});
    } else {
        AOS.init({once:true, offset: 120});
    }
    
})
/******cookies****/
const cookieBox = document.querySelector(".cookies__box");
const acceptBtn = document.querySelector(".cookies__btn");

acceptBtn.addEventListener("click", function(){
    cookieBox.classList.remove("active");
    localStorage.setItem("cookieAccepted", "yes");
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    if(cookieAccepted != "yes") {
        cookieBox.classList.add("active")
    }
}, 300)