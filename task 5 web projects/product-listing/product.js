let products = [

{
name:"Laptop",
price:50000,
image:"LAPTOP.WEBP",
rating:"⭐⭐⭐⭐"
},

{
name:"Smart Phone",
price:20000,
image:"SMARTPHONE.WEBP",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Headphones",
price:3000,
image:"HEADPHONES.WEBP",
rating:"⭐⭐⭐"
}

];

let container = document.getElementById("productContainer");

products.forEach(function(p){

let card = document.createElement("div");

card.className="product";

card.innerHTML=`

<img src="${p.image}">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<p>${p.rating}</p>
<button>Buy Now</button>

`;

container.appendChild(card);

});