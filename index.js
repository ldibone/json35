const products = [
    {
        type: 'vegetable',
        image: 'https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg',
        title: 'Tomato',
        price: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        image: 'https://www.kroger.com/product/images/large/front/0000000004062',
        title: 'Cucumber',
        price: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        image: 'https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg',
        title: 'Potato',
        price: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG',
        title: 'Onion',
        price: 1.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        image: 'https://green-connect.com.au/wp-content/uploads/2022/05/Cabbage2-scaled.jpg',
        title: 'Cabbage',
        price: 0.75,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
        title: 'Broccoli',
        price: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        image: 'https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg',
        title: 'Apple',
        price: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        image: 'https://fruitboxco.com/cdn/shop/products/asset_2_1024x.jpg?v=1571839043',
        title: 'Banana',
        price: 3.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        image: 'https://familytreefarms.com/wp-content/uploads/2021/03/PeachWhite.jpg',
        title: 'Peach',
        price: 2.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        image: 'https://media6.ppl-media.com/mediafiles/blogs/VNO_Mandarin1_5cb26f68b7.jpg',
        title: 'Mandarin',
        price: 6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        image: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg',
        title: 'Pineapple',
        price: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        image: 'https://www.licious.in/blog/wp-content/uploads/2022/03/Chicken-Curry-Cut-min-750x750.png',
        title: 'Chicken',
        price: 7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        image: 'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
        title: 'Beef',
        price: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/pork-1200x628-facebook-1200x628.jpg',
        title: 'Pork',
        price: 7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        image: 'https://www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg',
        title: 'Salmon',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    }
]

function renderProducts() {
    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const selectedCategory = categoryFilter.value;
  
   
    productList.innerHTML = '';

  
    products.forEach(product => {
      if (selectedCategory === 'all' || product.category === selectedCategory) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
  
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-price">${product.price.toFixed(2)}</p>
          <p class="product-description">${product.description}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
  
        productList.appendChild(productCard);
      }
    });
  }
  
  function filterProducts() {
    renderProducts(); 
  }

  document.addEventListener('DOMContentLoaded', renderProducts);