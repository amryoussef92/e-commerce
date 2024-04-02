let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listproduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");

let listproducts = [];
let carts = [];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listproducts.length > 0) {
    listproducts.forEach((product) => {
      let newproduct = document.createElement("div");
      newproduct.classList.add("item");
      newproduct.dataset.id = product.id;
      newproduct.innerHTML = `
            <img
            src="${product.image}"
            alt=""
          />
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <button class="addCart">Add To Cart</button>`;
      listProductHTML.appendChild(newproduct);
    });
  }
};

listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});
const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts[positionThisProductInCart].quantity =
      carts[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (carts.length > 0)
    carts.forEach((cart) => {
      totalQuantity = totalQuantity + cart.quantity;
      let newcart = document.createElement("div");
      newcart.classList.add("item");
      newcart.dataset.id = cart.product_id;
      let positionProduct = listproducts.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = listproducts[positionProduct];
      newcart.innerHTML = `
      <div class="image">
            <img
              src="${info.image}"
              alt=""
            />
          </div>
          <div class="name">"${info.name}"</div>
          <div class="totalPric">"$${info.price * cart.quantity}"</div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${cart.quantity}</span>
            <span class="plus">></span>
          </div>
          `;
      listCartHTML.appendChild(newcart);
    });
  iconCartSpan.innerHTML = totalQuantity;
};

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listproducts = data;
      addDataToHTML();
    });
};
initApp();
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
