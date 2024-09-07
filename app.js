let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listproduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");
let checkOutButton = document.querySelector(".checkOut");

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
listCartHTML.addEventListener("click", (event) => {
  if (event.target.classList.contains("plus")) {
    let product_id = event.target.closest(".item").dataset.id;
    let positionThisProductInCart = carts.findIndex(
      (cart) => cart.product_id == product_id
    );
    carts[positionThisProductInCart].quantity++;
    addCartToHTML();
  } else if (event.target.classList.contains("minus")) {
    let product_id = event.target.closest(".item").dataset.id;
    let positionThisProductInCart = carts.findIndex(
      (cart) => cart.product_id == product_id
    );
    if (carts[positionThisProductInCart].quantity > 1) {
      carts[positionThisProductInCart].quantity--;
    } else {
      carts.splice(positionThisProductInCart, 1); // Remove item if quantity is 1
    }
    addCartToHTML();
  }
});

checkOutButton.addEventListener("click", () => {
  if (carts.length > 0) {
    let totalQuantity = 0;
    let totalPrice = 0;

    // Calculate total quantity and total price
    carts.forEach((cart) => {
      const product = listproducts.find((p) => p.id == cart.product_id);
      totalQuantity += cart.quantity;
      totalPrice += product.price * cart.quantity;
    });

    // Format the price to USD
    let formattedTotalPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalPrice);

    // Show the message
    alert(
      `Checkout complete! You have purchased ${totalQuantity} items for a total of ${formattedTotalPrice}.`
    );

    // Optionally, clear the cart after checkout
    carts = [];
    addCartToHTML(); // Clear the cart in the UI
    iconCartSpan.innerHTML = 0; // Reset cart count to zero
  } else {
    alert("Your cart is empty!");
  }
});

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
