// Create 
var token=localStorage.getItem("m-shop-token")
const form = document.getElementById('adddata');

form.addEventListener('submit',async (event) => {
  event.preventDefault(); // prevent the form from submitting

  const name = document.getElementById('name').value;
  const image = document.getElementById('image').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

 
 let data = { 
  "name":name,
  "Image":image,
  "price":price,
  "discription":description

  }; 

 

let res = await fetch(`https://gifted-toad-pleat.cyclic.app/${category}`,{
  method:'POST',
headers:{
  'Content-Type': 'application/json',
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteXNob3AiOiJNWVNIT1AiLCJpYXQiOjE2ODI0MDU0MjMsImV4cCI6MTY4MzAxMDIyM30.BkTsNR2TqcW6Om4YwhQcyl05g-UD1qKOksSikuRtszA"
},
body:JSON.stringify(data)
})


let d = await res.json()
console.log(d)


  // reset the form
  form.reset();
});


// Update 



const form2= document.getElementById('updata');

form2.addEventListener('submit',async (event) => {
  event.preventDefault(); // prevent the form from submitting
const id=document.getElementById('upid').value
  const name = document.getElementById('upname').value;
  const image = document.getElementById('upimage').value;
  const price = document.getElementById('upprice').value || undefined;
  const description = document.getElementById('updescription').value;
  const category = document.getElementById('upcategory').value;


  let data={}
if(name!=""){
  data["name"]=name;
}
if(image!=""){
  data["Image"]=image;
}
if(price!=undefined){
  data['price']=price;
}
if(description!=""){
  data['discription']=description;
}


// console.log(data)

let token=localStorage.getItem("m-shop-token")
let res = await fetch(`https://gifted-toad-pleat.cyclic.app/${category}?id=${id}`,{
  method:'PUT',
headers:{
  'Content-Type': 'application/json',
  "authorization":token
 
},
body:JSON.stringify(data)
})


let d = await res.json()
console.log(d)

  // console.log({ id,name, image, price, description, category });

  // reset the form
  form.reset();
});



// delete 


const form3= document.getElementById('Ddata');

form3.addEventListener('submit',async (event) => {
  event.preventDefault(); // prevent the form from submitting
const id=document.getElementById('Did').value
  
  const category = document.getElementById('Dcategory').value;

  let token=localStorage.getItem("m-shop-token")
  
let res = await fetch(`https://gifted-toad-pleat.cyclic.app/${category}?id=${id}`,{
  method:'DELETE',
headers:{
  'Content-Type': 'application/json',
  "authorization":token
}
})


let d = await res.json()
console.log(d)
form.reset();

});

async function Order(){
 
  let d = await fetch('https://gifted-toad-pleat.cyclic.app/admin')
let data = await d.json()
console.log("orders",data)
append_Order(data)
}
Order()

function append_Order(data){
let tbody= document.querySelector("#tbody")
data.forEach((el)=>{
let tr=document.createElement('tr');
let td1=document.createElement('td')
let td2=document.createElement('td')
for(let i=0;i<el.product_name.length;i++){
 let p=document.createElement("p");
 let p2=document.createElement("p");
p.innerText=el.product_name[i]

p2.innerText=el.price[i]




td2.append(p2)

td1.append(p)

}

let td3= document.createElement('td')
td3.innerText=el.quantity

let td4=document.createElement('td')
td4.innerText="Pending"
td4.addEventListener('click',()=>{
 if(td4.innerText="Pending"){
  td4.innerText="Done"
  td4.style.backgroundColor="green"
 }
})

let td5=document.createElement('td')
td5.innerText="Delete"
td5.style.backgroundColor="red"
td5.addEventListener("click",()=>{
  Delete(el)
})
tr.append(td1,td2,td3,td4,td5)
tbody.append(tr)
console.log(tbody)
});


}





 async function Delete(el){


  let res = await fetch(`https://gifted-toad-pleat.cyclic.app/admin?id=${el._id}`,{
    method:'DELETE',
  headers:{
    'Content-Type': 'application/json',
   
  }
  })
  
  let r= await res.json()
  window.location.reload()
console.log(r)

}
function status(){

}