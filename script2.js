const cartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderCart() {
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    alert(`${name} añadido al carrito.`);
  });
});

renderCart();
