


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
















// name:String,
// email:String,
// password:String,
// type:String






let rform= document.querySelector('#rform')
rform.addEventListener('submit',Register)
 
async function Register(event){
    event.preventDefault()
    
let name=rform.querySelector('#rname').value
let email=rform.querySelector('#remail').value
let password1=rform.querySelector("#rpass1").value
let password2=rform.querySelector("#rpass2").value

if(password1==password2){
    

let data={
    name,
    email,
    "password":password2
}

let res= await fetch('https://gifted-toad-pleat.cyclic.app/regis',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      },
    body:JSON.stringify(data)


})
let response= await res.json()

alert(`${response.msg}`)

console.log(response)

rform.reset()

}else{
alert(`wrong password`)
rform.reset()
}


}
