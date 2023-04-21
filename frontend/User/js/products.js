
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

append_limited(data.data)
}
limited()




async function fashion(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/fashion')
let data = await d.json()

append_fashion(data.data)
}
fashion()









async function fregrence(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/fregrence')
let data = await d.json()

append_fregrence(data.data)
}
fregrence()

async function skin(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/skin')
let data = await d.json()

append_skin(data.data)
}
skin()

async function New(){
 
    let d = await fetch('https://gifted-toad-pleat.cyclic.app/new')
let data = await d.json()
// console.log("New",data.data)
append_new(data.data)

}
New()

{/* <div class="box">
<div class="image">
    <img src="images/product-1.jpg" class="main-img" alt="">
    <img src="images/product-1-hover.jpg" class="hover-img" alt="">
    <div class="icons">
        <a href="#" class="fas fa-shopping-cart"></a>
   
      
      
    </div>
</div>
<div class="content">
    <h3>smartphone</h3>
    <div class="price">$249.99 <span>$399.99</span></div>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
</div>
</div> */}

// new data 

function append_fashion(data){
let N= document.querySelector('.products>.box-container')

    data.forEach((el)=>{
    //  console.log(el)
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
    let icons = document.createElement('div')
icons.setAttribute('class','icons')

icons.addEventListener("click",()=>{
    cart(el)
})

let a=document.createElement('a')
a.setAttribute('class','fas fa-shopping-cart') 
icons.append(a)
    idiv.append(i1,i2,icons)
    
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
            // console.log(box)

N.append(box)

    })



}



function append_fregrence(data){
    let N= document.querySelector('.products>.box-container')
    
        data.forEach((el)=>{
        //  console.log(el)
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
        let icons = document.createElement('div')
    icons.setAttribute('class','icons')
    
    icons.addEventListener("click",()=>{
        cart(el)
    })
    
    let a=document.createElement('a')
    a.setAttribute('class','fas fa-shopping-cart') 
    icons.append(a)
        idiv.append(i1,i2,icons)
        
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
                // console.log(box)
    
    N.append(box)
    
        })
    
    
    
    }




    function append_skin(data){
        let N= document.querySelector('.products>.box-container')
        
            data.forEach((el)=>{
            //  console.log(el)
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
            let icons = document.createElement('div')
        icons.setAttribute('class','icons')
        
        icons.addEventListener("click",()=>{
            cart(el)
        })
        
        let a=document.createElement('a')
        a.setAttribute('class','fas fa-shopping-cart') 
        icons.append(a)
            idiv.append(i1,i2,icons)
            
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
                    // console.log(box)
        
        N.append(box)
        
            })
        
        
        
        }



        function append_new(data){
            let N= document.querySelector('.products>.box-container')
            
                data.forEach((el)=>{
                //  console.log(el)
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
                let icons = document.createElement('div')
            icons.setAttribute('class','icons')
            
            icons.addEventListener("click",()=>{
                cart(el)
            })
            
            let a=document.createElement('a')
            a.setAttribute('class','fas fa-shopping-cart') 
            icons.append(a)
                idiv.append(i1,i2,icons)
                
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
                        // console.log(box)
            
            N.append(box)
            
                })
            
            
            
            }





            function append_limited(data){
                let N= document.querySelector('.products>.box-container')
                
                    data.forEach((el)=>{
                    //  console.log(el)
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
                    let icons = document.createElement('div')
                icons.setAttribute('class','icons')
                
                icons.addEventListener("click",()=>{
                    cart(el)
                })
                
                let a=document.createElement('a')
                a.setAttribute('class','fas fa-shopping-cart') 
                icons.append(a)
                    idiv.append(i1,i2,icons)
                    
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
                            // console.log(box)
                
                N.append(box)
                
                    })
                
                
                
                }











let l= document.querySelector("#l")
l.addEventListener('click',L)

function L(){
    let N= document.querySelector('.products>.box-container')
  N.innerHTML=null;

limited()



}


let n= document.querySelector("#n")
n.addEventListener('click',N)

function N(){
    let N= document.querySelector('.products>.box-container')
  N.innerHTML=null;

New()



}




let s= document.querySelector("#s")
s.addEventListener('click',S)

function S(){
    let N= document.querySelector('.products>.box-container')
  N.innerHTML=null;

skin()



}


let fa= document.querySelector("#fa")
fa.addEventListener('click',Fa)

function Fa(){
    let N= document.querySelector('.products>.box-container')
  N.innerHTML=null;

fashion()



}




let fr= document.querySelector("#fr")
fr.addEventListener('click',Fr)

function Fr(){
    let N= document.querySelector('.products>.box-container')
  N.innerHTML=null;

fregrence()



}



let all= document.querySelector("#all")
all.addEventListener('click',ALL)

function ALL(){

window.location.reload()



}





/// adding products to cart 




function cart(el){
    let CART =JSON.parse(localStorage.getItem("M-cart")) || [] ;
    console.log(el)

    CART.push(el)


    localStorage.setItem('M-cart',JSON.stringify(CART))

// alert(`${el.name} is added to the cart`)

    }
    
    










