




/* 🍀side bar */

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}


/* 🍀search bar show at media query phone mode */

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};


/* 🍀slide show js framework - swiper */
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});























let lform= document.querySelector('#lform')
lform.addEventListener('submit',Login)

 
async function Login(event){
    event.preventDefault()
    

let email=lform.querySelector('#lemail').value
let password=lform.querySelector("#lpass").value



    

let data={
    
    email,
    password
}

let res= await fetch('https://gifted-toad-pleat.cyclic.app/login',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      },
    body:JSON.stringify(data)


})
let response= await res.json()
alert(`${response.msg}`)
console.log(response)


    localStorage.setItem("m-shop-admin",true)
    localStorage.setItem("m-shop-login",true)
    localStorage.setItem("m-shop-token",JSON.stringify(response.token))


window.location.href="./index.html"

}