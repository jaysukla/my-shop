
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







// //   <div class="box">
// <i class="fas fa-times"></i>
// <img src="images/product-1.jpg" alt="">
// <div class="content">
//     <h3>smartphone</h3>
//     
//     <div class="price">$249.99 <span>$399.99</span></div>
// </div>
// </div>


let data =JSON.parse(localStorage.getItem("M-cart"))
let container = document.querySelector('.shopping-cart>.box-container');
let total=0;
let bigt=0
data.forEach((el)=>{
let box=document.createElement('div')
box.setAttribute('class','box')



let i= document.createElement('i');
i.setAttribute('class','fas fa-times')

i.addEventListener('click',()=>{
    REMOVE(el)
})


let image=document.createElement('img');
image.src=el.Image

let content=document.createElement('div')
content.setAttribute('class','content')

let h3=document.createElement('h3');
h3.innerText=el.name


let price=document.createElement('div')
price.setAttribute('class','price')
price.innerText=el.price
let sp=document.createElement('span')
sp.innerText=el.price+299

price.append(sp)
content.append(h3,price)
box.append(i,image,content)

total=total+el.price

container.append(box)

})
 bigt=total+(200*data.length)


 let st=document.querySelector('#st')
let dis=document.querySelector("#dis")
let to=document.querySelector("#to")

 st.innerText=bigt;
dis.innerText=(bigt-total);
to.innerText=total;








function REMOVE(el){

for(let i=0;i<data.length;i++){
    if(data[i]._id==el._id){
        data.splice(i,1)
        break;
    }
}

localStorage.setItem("M-cart",JSON.stringify(data))
window.location.reload()

}


let checkout = document.querySelector("#checkout") 
checkout.addEventListener('click',CHECKOUT)
 
async function CHECKOUT(){
    
   let login= localStorage.getItem("m-shop-login")
   console.log(login)
if(login==='true'){

let product_name=[]

let price=[]
let quantity=0;

data.forEach((el)=>{
product_name.push(el.name)
price.push(+(el.price))
quantity++
})



let d={
    product_name,
    price,
    quantity
}


let res= await fetch('https://gifted-toad-pleat.cyclic.app/admin',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
       },
    body:JSON.stringify(d)

})

let response= await res.json()

console.log(response)

data=[];

localStorage.setItem('M-cart',JSON.stringify(data))


    alert('Order placed')
}else{
    alert('login please')
}

window.location.reload()

}






