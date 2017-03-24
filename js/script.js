var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

//Event handler function that's triggered on form submit. Week 5
function sort(){
  console.log(document.sortBy.filter.value);
  event.preventDefault();
}

//This loop tells me that the index of the products starts at "0", then go through the all the products to complete the full loop, while each time moving up 1 on the products list

for(var i = 0; i<products.length; i++){
//To print out only the name, description and price of the products, each one needs to be listed out in an array. The console will find the name, description and price of each product starting at the index (the beginning) and looping through all the way until the last product.
  console.log(products[i].name);
  console.log(products[i].description);
  console.log(products[i].price);
}

  var cart = [];

  function onClickCart(cartItems){
    
    var i = cart.findIndex(function(el)
    {return el.name.toLowerCase() == cartItems});

    console.log(i);

}

function removeCartItem(item){
  var remv = document.getElementById("removeItem").innerHTML;
  var index = cart.indexOf(remv);
 if(index >= 0){
 //cart will have one less item in it
   cartItems.splice(index, 1); 
 }
  console.log(cart);
  event.preventDefault();
}


function insertCartItem(){
  cart.push({"name": products[i].name, "price":products[i].price});
  updatedCart();
  
}





