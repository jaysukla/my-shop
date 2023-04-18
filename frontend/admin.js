// Create 

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
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteXNob3AiOiJNWVNIT1AiLCJpYXQiOjE2ODE0NzU1NzEsImV4cCI6MTY4MjA4MDM3MX0.XaXOCkfxy46nIAIesfjSZ80Qs6iToWveaT5E67SE2_g",
  "rtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteXNob3AiOiJTSE9QIiwiaWF0IjoxNjgxNzQ2MjgzLCJleHAiOjE2ODI2MTAyODN9.iHI2XmsyTkyul_VjxCba6Go_cZrOHv94QLI_BuZAY-M"
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


let res = await fetch(`https://gifted-toad-pleat.cyclic.app/${category}?id=${id}`,{
  method:'PUT',
headers:{
  'Content-Type': 'application/json',
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteXNob3AiOiJNWVNIT1AiLCJpYXQiOjE2ODE3NDYyODMsImV4cCI6MTY4MjM1MTA4M30.dpjzlOwA6KMZZsyXv7GRuDCAqAhpxqGvFENMXpqk3Jc",
 
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

  
  
let res = await fetch(`https://gifted-toad-pleat.cyclic.app/${category}?id=${id}`,{
  method:'DELETE',
headers:{
  'Content-Type': 'application/json',
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteXNob3AiOiJNWVNIT1AiLCJpYXQiOjE2ODE0NzU1NzEsImV4cCI6MTY4MjA4MDM3MX0.XaXOCkfxy46nIAIesfjSZ80Qs6iToWveaT5E67SE2_g"
}
})


let d = await res.json()
console.log(d)
form.reset();

});

