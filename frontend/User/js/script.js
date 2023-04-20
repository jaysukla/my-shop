

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









async function limited(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/limited')
let data = await d.json()
console.log("limited",data)
append_limited(data.data)
}
limited()




async function fashion(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/fashion')
let data = await d.json()
console.log("fashion",data)
append_fashion(data.data)
}
fashion()









async function fregrence(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/fregrence')
let data = await d.json()
console.log("fregrence",data)
append_fregrence(data.data)
}
fregrence()

async function skin(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/skin')
let data = await d.json()
console.log( "skin",data)
append_skin(data.data)
}
skin()

async function New(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/new')
let data = await d.json()
// console.log("New",data.data)
append_new(data.data)
append_new_container(data.data)
}
New()

//  <div class="swiper-slide slide">
{/* <div class="image">
<img src="images/home-img-3.jpg" alt="">
</div>
<div class="content">
<span>upto 50% off</span>
<h3>headphones</h3>
<a href="#" class="btn">shop now</a>
</div>
</div> */}


// new data 

function append_new(data){
let N= document.querySelector('.swiper-wrapper')

    data.forEach((el)=>{
   let bd=document.createElement(("div"))
bd.setAttribute('class','swiper-slide slide')
let idiv=document.createElement('div')
idiv.setAttribute("class","image")
let img=document.createElement("img")
img.src=el.Image
idiv.append(img)
let Cdiv=document.createElement('div')
Cdiv.setAttribute("class","content")
let s=document.createElement("span")
s.innerText="Upto 50% off"
let h=document.createElement("h3")
h.innerText=el.name
let a=document.createElement("a")
a.setAttribute("class","btn")
a.innerText="shop now"
Cdiv.append(s,h,a)

bd.append(idiv,Cdiv)
N.append(bd)


    })



}







function append_new_container(data){
    let Nc = document.querySelector('.banner>.box-container')
// console.log(data)
    data.forEach((el)=>{
      
     

let a= document.createElement('a')
a.setAttribute('class','box')

let img=document.createElement('img')
img.src=el.Image

let div=document.createElement('div')
div.setAttribute('class','content')

let s= document.createElement('span')
s.innerText="special offer"


let h=document.createElement('h3')
h.innerText="upto 50% off "

div.append(s,h)
a.append(img,div)
Nc.append(a)

    })

}



// limited 

//  <div class="box">
// <div class="image">
//     <img src="images/arrival-1.jpg" class="main-img" alt="">
//     <img src="images/arrival-1-hover.jpg" class="hover-img" alt="">

// </div>

// <div class="content">
//     <h3>HD television</h3>
//     <div class="price"> $249.99 <span>$399.99</span> </div>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>
//     </div>
// </div>
// </div> 



function append_limited(data){
let main =document.querySelector('#limited>.box-container')
    data.forEach((el)=>{
        console.log(el)
let box=document.createElement('div')
box.setAttribute('class','box')
let idiv = document.createElement('div')
idiv.setAttribute('class','image')
let i1=document.createElement('img')
i1.setAttribute('class','main-img')
i1.src=el.Image
let i2=document.createElement('img')
i2.setAttribute('class','hover-img')        
i2.src=el.Image

idiv.append(i1,i2)

let Cdiv= document.createElement('div')
Cdiv.setAttribute('class','content')

let h=document.createElement('h3')
h.innerText=el.name

let price=document.createElement('div')
price.setAttribute('class','price')
price.innerText=el.price
let sp=document.createElement('span')
sp.innerText=el.price+299

price.append(sp)

let stars = document.createElement('div')
stars.setAttribute('class','stars')
stars.innerHTML=` <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`

        Cdiv.append(h,price,stars)
        box.append(idiv,Cdiv)
        console.log(box)
main.append(box)
    })


}




// fashion append

function append_fashion(data){
    let main =document.querySelector('#fashion>.box-container')
        data.forEach((el)=>{
            console.log(el)
    let box=document.createElement('div')
    box.setAttribute('class','box')
    let idiv = document.createElement('div')
    idiv.setAttribute('class','image')
    let i1=document.createElement('img')
    i1.setAttribute('class','main-img')
    i1.src=el.Image
    let i2=document.createElement('img')
    i2.setAttribute('class','hover-img')        
    i2.src=el.Image
    
    idiv.append(i1,i2)
    
    let Cdiv= document.createElement('div')
    Cdiv.setAttribute('class','content')
    
    let h=document.createElement('h3')
    h.innerText=el.name
    
    let price=document.createElement('div')
    price.setAttribute('class','price')
    price.innerText=el.price
    let sp=document.createElement('span')
    sp.innerText=el.price+299
    
    price.append(sp)
    
    let stars = document.createElement('div')
    stars.setAttribute('class','stars')
    stars.innerHTML=` <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>`
    
            Cdiv.append(h,price,stars)
            box.append(idiv,Cdiv)
            console.log(box)
    main.append(box)
        })
    
    
    }
    



    // fregrence 


    
function append_fregrence(data){
    let main =document.querySelector('#fregrence>.box-container')
        data.forEach((el)=>{
            console.log(el)
    let box=document.createElement('div')
    box.setAttribute('class','box')
    let idiv = document.createElement('div')
    idiv.setAttribute('class','image')
    let i1=document.createElement('img')
    i1.setAttribute('class','main-img')
    i1.src=el.Image
    let i2=document.createElement('img')
    i2.setAttribute('class','hover-img')        
    i2.src=el.Image
    
    idiv.append(i1,i2)
    
    let Cdiv= document.createElement('div')
    Cdiv.setAttribute('class','content')
    
    let h=document.createElement('h3')
    h.innerText=el.name
    
    let price=document.createElement('div')
    price.setAttribute('class','price')
    price.innerText=el.price
    let sp=document.createElement('span')
    sp.innerText=el.price+299
    
    price.append(sp)
    
    let stars = document.createElement('div')
    stars.setAttribute('class','stars')
    stars.innerHTML=` <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>`
    
            Cdiv.append(h,price,stars)
            box.append(idiv,Cdiv)
            console.log(box)
    main.append(box)
        })
    
    
    }
    



    // append skin 


    function append_skin(data){
        let main =document.querySelector('#skin>.box-container')
            data.forEach((el)=>{
                console.log(el)
        let box=document.createElement('div')
        box.setAttribute('class','box')
        let idiv = document.createElement('div')
        idiv.setAttribute('class','image')
        let i1=document.createElement('img')
        i1.setAttribute('class','main-img')
        i1.src=el.Image
        let i2=document.createElement('img')
        i2.setAttribute('class','hover-img')        
        i2.src=el.Image
        
        idiv.append(i1,i2)
        
        let Cdiv= document.createElement('div')
        Cdiv.setAttribute('class','content')
        
        let h=document.createElement('h3')
        h.innerText=el.name
        
        let price=document.createElement('div')
        price.setAttribute('class','price')
        price.innerText=el.price
        let sp=document.createElement('span')
        sp.innerText=el.price+299
        
        price.append(sp)
        
        let stars = document.createElement('div')
        stars.setAttribute('class','stars')
        stars.innerHTML=` <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>`
        
                Cdiv.append(h,price,stars)
                box.append(idiv,Cdiv)
                console.log(box)
        main.append(box)
            })
        
        
        }



