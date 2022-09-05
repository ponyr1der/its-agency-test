// slider
new Splide(".splide", {
  arrowPath: "",
}).mount();

// products
const data = [
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 6000,
    image: "images/1.png",
    available: true,
    contract: false,
    exclusive: true,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 4800,
    image: "images/2.png",
    available: false,
    contract: true,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 5290,
    image: "images/3.png",
    available: true,
    contract: false,
    exclusive: false,
    new: true,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 2800,
    image: "images/4.png",
    available: true,
    contract: false,
    exclusive: false,
    new: false,
    sale: true,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 3400,
    image: "images/5.png",
    available: true,
    contract: false,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 6000,
    image: "images/6.png",
    available: true,
    contract: false,
    exclusive: true,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 4800,
    image: "images/7.png",
    available: false,
    contract: true,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 5290,
    image: "images/7.png",
    available: true,
    contract: false,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 2800,
    image: "images/8.png",
    available: true,
    contract: true,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 3400,
    image: "images/9.png",
    available: true,
    contract: false,
    exclusive: false,
    new: false,
    sale: true,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 6000,
    image: "images/6.png",
    available: true,
    contract: false,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 4800,
    image: "images/7.png",
    available: false,
    contract: true,
    exclusive: false,
    new: false,
    contract: false,
    exclusive: true,
    new: true,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 5290,
    image: "images/7.png",
    available: true,
    contract: false,
    exclusive: true,
    new: false,
    sale: true,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 2800,
    image: "images/8.png",
    available: true,
    contract: true,
    exclusive: false,
    new: false,
    sale: false,
  },
  {
    name: "Краска Wallquest, Brownsone MS90102",
    price: 3400,
    image: "images/9.png",
    available: true,
    contract: false,
    exclusive: false,
    new: true,
    sale: false,
  },
];

const products_items = document.getElementById("products_items");
const helpers_number = document.getElementById("helpers_number");

helpers_number.innerHTML = `${data.length} товаров`;

const render_products = () => {
  for (let i = 0; i < data.length; i++) {
    let fragment = document.createDocumentFragment();
    let product_item = document.createElement("li");
    let product_item_image = document.createElement("div");
    let img = document.createElement("img");
    let product_item_name = document.createElement("div");
    let product_item_options = document.createElement("div");
    let price = document.createElement("p");
    let add = document.createElement("button");
    let separator = document.createElement("div");

    const add_icon_svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const add_icon_path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    const add_icon_path2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    add_icon_svg.setAttribute("width", "14");
    add_icon_svg.setAttribute("height", "14");
    add_icon_svg.setAttribute("viewBox", "0 0 14 14");
    add_icon_svg.setAttribute("fill", "none");
    add_icon_path.setAttribute("d", "M7 1.16663V12.8333");
    add_icon_path.setAttribute("stroke", "#1F2020");
    add_icon_path.setAttribute("stroke-width", "2");
    add_icon_path.setAttribute("stroke-linecap", "round");
    add_icon_path.setAttribute("stroke-linejoin", "round");
    add_icon_path2.setAttribute("d", "M1.16699 7H12.8337");
    add_icon_path2.setAttribute("stroke", "#1F2020");
    add_icon_path2.setAttribute("stroke-width", "2");
    add_icon_path2.setAttribute("stroke-linecap", "round");
    add_icon_path2.setAttribute("stroke-linejoin", "round");
    add_icon_svg.appendChild(add_icon_path);
    add_icon_svg.appendChild(add_icon_path2);

    product_item.className = "product_item";
    product_item.id = i;
    product_item_image.className = "product_item_image";
    img.alt = "product image";
    product_item_name.className = "product_item_name";
    product_item_options.className = "product_item_options";
    price.className = "price";
    add.className = "add";
    separator.className = "product_item_separator";

    fragment.appendChild(product_item);
    add.appendChild(add_icon_svg);
    product_item_image.appendChild(img).src = data[i].image;
    product_item_name.innerHTML = data[i].name;
    product_item_options.appendChild(price).innerHTML = data[i].price + " ₽";
    product_item_options.appendChild(add);
    product_item.appendChild(product_item_image);
    product_item.appendChild(product_item_name);
    product_item.appendChild(product_item_options);
    product_item.appendChild(separator);
    product_item.setAttribute("data-new", data[i].new);
    product_item.setAttribute("data-available", data[i].available);
    product_item.setAttribute("data-contract", data[i].contract);
    product_item.setAttribute("data-exclusive", data[i].exclusive);
    product_item.setAttribute("data-sale", data[i].sale);
    product_item.setAttribute("data-price", data[i].price);
    products_items.appendChild(fragment);
  }
};
render_products();
// Dropdown and background shadow
const custom_background = document.getElementById("custom_background");
const custom_dropdown = document.getElementById("custom_dropdown");
const custom_inputs = document.getElementsByClassName("custom-input");
(function () {
  function toggleBackgroundClass(e) {
    custom_background.style.display = "none";
  }

  if (custom_dropdown) {
    custom_dropdown.addEventListener("click", (e) => {
      const target = e.target;
      if (target) {
        if (target.nodeName.toLowerCase() === "label") {
          target.parentElement.classList.toggle("active");
          custom_background.style.display = "block";
        }
      }
    });
  }

  if (custom_inputs) {
    Array.prototype.forEach.call(custom_inputs, function (el) {
      el.addEventListener("change", toggleBackgroundClass);
    });
  }
})();

// Opening cart
const buy = document.getElementById("buy");
const cart = document.getElementById("cart");

buy.addEventListener("click", () => {
  cart.style.display = "block";
  custom_background.style.display = "block";
  
  // Delete single product from cart
  let delete_buttons = Array.prototype.slice.call(
    document.getElementsByClassName("control_button")
  );
  // amount of products
  let products_word;
  switch (cart_products.children.length) {
    case 1:
      products_word = "товар";
      break;
    case 2:
      products_word = "товара";
      break;
    case 3:
      products_word = "товара";
      break;
    case 4:
      products_word = "товара";
      break;
    default:
      products_word = "товаров";
      break;
  }
  number_of_products_in_cart.innerText = `${cart_products.children.length} ${products_word}`;

  if (delete_buttons.length != 0) {
    delete_buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        added_products.splice(btn.parentNode.parentNode.id, 1)
        cart_products.removeChild(btn.parentNode.parentNode);
        buy.innerText = added_products.length
        let products_word;
        switch (cart_products.children.length) {
            case 1:
            products_word = "товар";
            break;
            case 2:
            products_word = "товара";
            break;
            case 3:
            products_word = "товара";
            break;
            case 4:
            products_word = "товара";
            break;
            default:
            products_word = "товаров";
            break;
        }
        number_of_products_in_cart.innerText = `${cart_products.children.length} ${products_word}`;
        let price_counter = 0;
        added_products.forEach((product) => {
        price_counter += Number(product.price);
        });
        total_price.innerText = `${price_counter}₽`;
      });
    });
  }
    // Product counter
    const increment_counters = Array.prototype.slice.call(document.getElementsByClassName('counter__increment'))
    const decrement_counters = Array.prototype.slice.call(document.getElementsByClassName('counter__decrement'))
    const products_counters = Array.prototype.slice.call(document.getElementsByClassName('counter'))

    let counter_controls = [increment_counters, decrement_counters]

    counter_controls.forEach(counters => {
        counters.forEach(counter => {
            counter.addEventListener("click", () => {
                let price = Number(counter.parentNode.previousSibling.lastChild.innerText.slice(0, -1))
                if(counter.id == 'counter__decrement') {
                    let number = counter.nextSibling
                    
                    if (number.innerText > 1) {
                        number.innerText--
                        
                        let price_counter = Number(total_price.innerText.slice(0, -1))

                        price_counter -= price;
                        
                        total_price.innerText = `${price_counter}₽`;
                        
                    }

                } else {
                    let number = counter.previousSibling
                    number.innerText++

                    let price_counter = Number(total_price.innerText.slice(0, -1))

                        price_counter += price;
                        
                        total_price.innerText = `${price_counter}₽`;
                }
            })
        })
    })
});

// Closing cart
const close_btn = document.getElementById("cart_close");

close_btn.addEventListener("click", () => {
  cart.style.display = "none";
  custom_background.style.display = "none";
});

// Filtering
const news = document.getElementById("new");
const available = document.getElementById("available");
const contract = document.getElementById("contract");
const exclusive = document.getElementById("exclusive");
const sale = document.getElementById("sale");

const filters = [news, available, contract, exclusive, sale];

filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    let children = Array.prototype.slice.call(products_items.children);
    let filter_id = filter.id;

    if (!filter.classList.contains("active")) {
      filter.classList.add("active");
      children.forEach((child) => {
        if (child.dataset[`${filter.id}`] != "true") {
          products_items.removeChild(child);
        }
      });
    } else {
      filter.classList.remove("active");
      children.forEach((child) => {
        products_items.removeChild(child);
      });
      render_products();
    }
  });
});

// Sorting
const sort_expensive = document.getElementById("sort_expensive");
const sort_cheap = document.getElementById("sort_cheap");

const sorters = [sort_expensive, sort_cheap];

sorters.forEach((sorter) => {
  sorter.addEventListener("click", () => {
    let children = Array.prototype.slice.call(products_items.children);
    let sorted_children;

    if (sorter.id == "sort_expensive") {
      sorted_children = children.sort(function (a, b) {
        return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
      });
      products_items.replaceChildren(...sorted_children);
    } else if (sorter.id == "sort_cheap") {
      sorted_children = children.sort(function (a, b) {
        return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
      });
      products_items.replaceChildren(...sorted_children);
    }
  });
});

// Taking a single product
const add_buttons = Array.prototype.slice.call(
  document.getElementsByClassName("add")
);

add_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.border = "1px solid black";
    const product_found = added_products.some(el => el.id === button.parentNode.parentNode.id);
        if (!product_found) {
            added_products.push({
                id: `${button.parentNode.parentNode.id}`,
                image: `${button.parentNode.parentNode.firstChild.firstChild.currentSrc}`,
                name: `${button.parentNode.parentNode.children[1].innerText}`,
                amount: 1,
                price: `${button.parentNode.parentNode.dataset.price}`
              });
        }
        render_cart();
        buy.innerText = added_products.length
  });
});

// Cart
const cart_products = document.getElementById("cart_products");

let added_products = [];

let render_cart = () => {
    let children = Array.prototype.slice.call(cart_products.children);
    children.forEach(child => {
        cart_products.removeChild(child)
    })
    
  if (added_products.length > 0) {
    
    for (let i = 0; i < added_products.length; i++) {
      let cart_fragment = document.createDocumentFragment();
      let cart_product = document.createElement("div");
      let product__image = document.createElement("div");
      let img = document.createElement("img");
      let product__info = document.createElement("div");
      let product__name = document.createElement("p");
      let product__price = document.createElement("p");
      let product__counter = document.createElement("div");
      let counter__decrement = document.createElement("button");
      let counter = document.createElement("p");
      let counter__increment = document.createElement("button");
      let product__control = document.createElement("div");
      let control_button = document.createElement("button");

      const increment_icon_svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const increment_icon_path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      const increment_icon_path2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      increment_icon_svg.setAttribute("width", "12");
      increment_icon_svg.setAttribute("height", "12");
      increment_icon_svg.setAttribute("viewBox", "0 0 12 12");
      increment_icon_svg.setAttribute("fill", "none");
      increment_icon_path.setAttribute("d", "M6 1.33325V10.66663");
      increment_icon_path.setAttribute("stroke", "black");
      increment_icon_path.setAttribute("stroke-width", "1.4");
      increment_icon_path.setAttribute("stroke-linecap", "round");
      increment_icon_path.setAttribute("stroke-linejoin", "round");
      increment_icon_path2.setAttribute("d", "M1.3335 6H10.6668");
      increment_icon_path2.setAttribute("stroke", "black");
      increment_icon_path2.setAttribute("stroke-width", "1.4");
      increment_icon_path2.setAttribute("stroke-linecap", "round");
      increment_icon_path2.setAttribute("stroke-linejoin", "round");
      increment_icon_svg.appendChild(increment_icon_path);
      increment_icon_svg.appendChild(increment_icon_path2);

      const decrement_icon_svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const decrement_icon_path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      decrement_icon_svg.setAttribute("width", "12");
      decrement_icon_svg.setAttribute("height", "12");
      decrement_icon_svg.setAttribute("viewBox", "0 0 12 2");
      decrement_icon_svg.setAttribute("fill", "none");
      decrement_icon_path.setAttribute("d", "M1.3335 1H10.6668");
      decrement_icon_path.setAttribute("stroke", "black");
      decrement_icon_path.setAttribute("stroke-width", "1.4");
      decrement_icon_path.setAttribute("stroke-linecap", "round");
      decrement_icon_path.setAttribute("stroke-linejoin", "round");
      decrement_icon_svg.appendChild(decrement_icon_path);

      const delete_icon_svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const delete_icon_path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      const delete_icon_path2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      delete_icon_svg.setAttribute("width", "14");
      delete_icon_svg.setAttribute("height", "14");
      delete_icon_svg.setAttribute("viewBox", "0 0 14 14");
      delete_icon_svg.setAttribute("fill", "none");
      delete_icon_path.setAttribute("d", "M13 1L1 13");
      delete_icon_path.setAttribute("stroke", "#1F2020");
      delete_icon_path.setAttribute("stroke-width", "1.4");
      delete_icon_path.setAttribute("stroke-linecap", "round");
      delete_icon_path.setAttribute("stroke-linejoin", "round");
      delete_icon_path2.setAttribute("d", "M1 1L13 13");
      delete_icon_path2.setAttribute("stroke", "#1F2020");
      delete_icon_path2.setAttribute("stroke-width", "1.4");
      delete_icon_path2.setAttribute("stroke-linecap", "round");
      delete_icon_path2.setAttribute("stroke-linejoin", "round");
      delete_icon_svg.appendChild(delete_icon_path);
      delete_icon_svg.appendChild(delete_icon_path2);

      cart_product.id = added_products[i].id;
      cart_product.className = "cart_product";
      product__image.className = "product__image";
      product__info.className = "product__info";
      product__name.className = "product__name";
      product__price.className = "product__price";
      product__counter.className = "product__counter";
      counter__decrement.className = "counter__decrement";
      counter__increment.className = "counter__increment";
      counter__decrement.id = "counter__decrement";
      counter__increment.id = "counter__increment";
      counter.className = "counter";
      control_button.className = "control_button";
      product__control.classList = "product__control";

      cart_fragment.appendChild(cart_product);
      counter__increment.appendChild(increment_icon_svg);
      counter__decrement.appendChild(decrement_icon_svg);
      control_button.appendChild(delete_icon_svg);
      product__image.appendChild(img).src = added_products[i].image;
      product__info.appendChild(product__name).innerText =
        added_products[i].name;
      product__info.appendChild(
        product__price
      ).innerText = `${added_products[i].price} ₽`;
      product__counter.appendChild(counter__decrement);
      product__counter.appendChild(counter).innerText =
        added_products[i].amount;
      product__counter.appendChild(counter__increment);
      product__control.appendChild(control_button);
      cart_product.appendChild(product__image);
      cart_product.appendChild(product__info);
      cart_product.appendChild(product__counter);
      cart_product.appendChild(product__control);
      cart_products.appendChild(cart_fragment);
    }

    let price_counter = 0;
    added_products.forEach((product) => {
      price_counter += Number(product.price);
    });
    total_price.innerText = `${price_counter}₽`;
  }
};

// Clear cart
const cart_clear = document.getElementById("cart_clear");

cart_clear.addEventListener("click", () => {
  let children = Array.prototype.slice.call(cart_products.children);

  children.forEach((child) => {
    cart_products.removeChild(child);
  });
  added_products = [];
  total_price.innerText = "0₽";
  number_of_products_in_cart.innerText = "0 товаров";
});

// Counting total price
let total_price = document.getElementById("total__price");

// Number of products in cart
let number_of_products_in_cart = document.getElementById(
  "number_of_products_in_cart"
);

// mobile filter

const mobile_filter = document.getElementById('mobile-filter')

mobile_filter.addEventListener('click', () => {
    mobile_filter_hide.style.display = 'initial'
    custom_background.style.display = "block";
})

const mobile_filter_hide = document.getElementById('products_filters')

mobile_filter_hide.addEventListener('click', () => {
    mobile_filter_hide.style.display = 'none'
    custom_background.style.display = "none";
})

// burger menu
const burger_menu = document.getElementById('burger_menu')

burger_menu.addEventListener('click', () => {
    if (!burger_menu.classList.contains('active')) {
        burger_menu.classList.add('active')
    } else {
        burger_menu.classList.remove('active')
    }
    
})