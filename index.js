const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];
const container = document.getElementById("product-container");
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;
  image.classList.add("product-image");

  imageContainer.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");

  button.addEventListener('click', function(container1){
    const myDiv = document.getElementById('cart')
    const image = document.createElement('div')


    const container = document.getElementById("container");
    const name = document.createElement("div");
        name.classList.add(name);
        const image1 = document.createElement("div");
        name.classList.add(image);

        const imageURL = document.createElement("div");
        name.classList.add(imageURL);
        
        cart.appendChild(image);
        cart.appendChild(name)
        cart.appentChild(imageURL)

    
    myDiv.append(image)
    myDiv.classList.add()
  

  })

  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  infoDiv.appendChild(button);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  container.appendChild(productDiv);

});

function addProduct(myProduct) {
  const con = document.createElement('div');
  li.innerHTML = `
      <span>${myProduct.name}</span>
      <button class="add-btn">+</button>
      <button class="delete-btn">-</button>
      
  `;
  taskList.appendChild(li);

  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
      li.remove();
  });

}