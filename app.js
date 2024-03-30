let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listproduct");

let listproducts = [];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const initApp = () => {
  fetch("products.json");
  then((response) => response.json());
  then((data) => {
    listproducts = data;
    console.log(listproducts);
  });
};
// const product = [
//   {
//     id: 0,
//     image:
//       "vecteezy_fabric-armchair-soft-cushion-with-metal-leg-3d-rendering_11794199.png",
//     title: "armchair",
//     price: 200,
//   },
//   {
//     id: 1,
//     image: "yellow chair .png",
//     title: "yellow chair",
//     price: 150,
//   },
//   {
//     id: 2,
//     image:
//       "vecteezy_minimalistic-sofa-clipart-modern-couch-design-minimalist_24523225.png",
//     title: "blue two seats",
//     price: 300,
//   },
//   {
//     id: 3,
//     image:
//       "vecteezy_modern-and-stylish-white-sofa-home-interior-mockup-interior_24787891.png",
//     title: "blue three seats",
//     price: 400,
//   },
// ];
// const categories = [
//   ...new setInterval(
//     product.map((item) => {
//       return item;
//     })
//   ),
// ];
// let i = 0;
// document.getElementById("listproduct").innerHTML = categories
//   .map((item) => {
//     var { image, title, price } = item;
//     return (
//       `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src= ${image}></img>
//             </div>
//             <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>$ ${price}.00</h2>` +
//       "<button onclick='addtocart(" +
//       i++ +
//       ")'>Add to cart</button> " +
//       `</div>
//         </div>`
//     );
//   })
//   .join("");
// const product = [
//   {
//     id: 0,
//     image:
//       "vecteezy_fabric-armchair-soft-cushion-with-metal-leg-3d-rendering_11794199.png",
//     title: "arm chair",
//     price: 200,
//   },
//   {
//     id: 1,
//     image: "brown chair .png",
//     title: "brown chair",
//     price: 150,
//   },
//   {
//     id: 2,
//     image:
//       "vecteezy_minimalistic-sofa-clipart-modern-couch-design-minimalist_24523225.png",
//     title: "blue two seats",
//     price: 300,
//   },
//   {
//     id: 3,
//     image:
//       "vecteezy_modern-and-stylish-white-sofa-home-interior-mockup-interior_24787891.png",
//     title: "blue three seats",
//     price: 400,
//   },
// ];

// const listproduct = document.querySelector(".listproductall");

// product.forEach((item, index) => {
//   const { image, title, price } = item;
//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.innerHTML = `
//       <div class='img-box'>
//           <img class='images' src='${image}' alt='${title}'></img>
//       </div>
//       <div class='bottom'>
//           <p>${title}</p>
//           <h2>$ ${price}.00</h2>
//           <button onclick='addtocart(${index})'>Add to cart</button>
//       </div>`;
//   listproduct.appendChild(box);
// });

// function addToCart(index) {
//   const { image, title, price } = item; // Get the selected product from the product array
//   const cartItem = document.createElement("div"); // Create a new div for the cart item
//   cartItem.classList.add("cartItem"); // Add the 'item' class to the cart item

//   // HTML content for the cart item
//   cartItem.innerHTML = `
//         <div class="image">
//             <img src="${image}" alt="${title}">
//         </div>
//         <div class="name">${title}</div>
//         <div class="totalPrice">$${price}.00</div>
//         <div class="quantity">
//             <span class="minus">-</span>
//             <span>1</span>
//             <span class="plus">+</span>
//         </div>`;

//   const listCart = document.querySelector(".listCartall"); // Get the listCart element
//   listCart.appendChild(cartItem); // Append the cart item to the listCart
// }

// // Adding event listeners to dynamically created buttons
// function addListenersToButtons() {
//   const addToCartButtons = document.querySelectorAll(".addtocart");
//   addToCartButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       addToCart(index);
//     });
//   });
// }

// addListenersToButtons();
