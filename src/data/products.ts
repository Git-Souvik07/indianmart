export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  isPopular: boolean;
}

export const categories = [
  { id: 1, name: 'Vegetables', image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Fruits', image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Dairy', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id :4, name :'Spices',image: 'https://snnfoods.com/cdn/shop/articles/snn-blog-1-image-151086.jpg?v=1710844801'},
  { id: 5, name: 'Grains', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfX9blilfc29-nLu3YJ0JU4p5sVR4jvJ8gw&s' },
  { id: 6, name: 'Snacks', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const products: Product[] = [
  {
id: 69,
name: 'Apples',
description: 'Fresh and crispy apples, perfect for snacking and desserts.',
price: 150, // Price in rupees per kg
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s',
category: 'Fruits',
stock: 50,
rating: 4.7,
isPopular: true
},
{
id: 70,
name: 'Oranges',
description: 'Juicy and tangy oranges, full of Vitamin C.',
price: 80, // Price in rupees per kg
image: 'https://drearth.com/wp-content/uploads/Oranges-iStock-1493917402.jpg',
category: 'Fruits',
stock: 60,
rating: 4.5,
isPopular: true
},
{
id: 71,
name: 'Mangoes',
description: 'Sweet and juicy mangoes, the king of fruits.',
price: 120, // Price in rupees per kg
image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/mangoes_what_to_know_1296x728_header-1024x575.jpg',
category: 'Fruits',
stock: 40,
rating: 4.8,
isPopular: true
},
{
id: 74,
name: 'Grapes',
description: 'Fresh and juicy grapes, perfect for snacking and juicing.',
price: 90, // Price in rupees per kg
image: 'https://www.foodrepublic.com/img/gallery/15-types-of-grapes-to-know-eat-and-drink/intro-1743188162.jpg',
category: 'Fruits',
stock: 50,
rating: 4.5,
isPopular: false
},
{
id: 77,
name: 'Watermelons',
description: 'Refreshing and hydrating watermelons, perfect for summer.',
price: 40, // Price in rupees per kg
image: 'https://cdn.mos.cms.futurecdn.net/SxQpyZbdPoWZuXmxKiJ3uF.jpg',
category: 'Fruits',
stock: 70,
rating: 4.6,
isPopular: true
},
  {
id: 7,
name: 'Amul Butter',
description: 'Creamy and delicious butter, perfect for your morning toast.',
price: 50, // Price in rupees per 100g
image: 'https://m.media-amazon.com/images/I/51KrxEKN58L._AC_UF894,1000_QL80_.jpg',
category: 'Dairy',
stock: 45,
rating: 4.5,
isPopular: true
},

{
id: 4,
name: 'Paneer',
description: 'Fresh homemade paneer, source of protein and calcium.',
price: 80, // Price in rupees per 200g
image: 'https://m.media-amazon.com/images/I/81hD14MN91L.jpg',
category: 'Dairy',
stock: 40,
rating: 4.7,
isPopular: true
},
{
    id: 89,
    name: 'Milk',
    description: 'Fresh and pure cows milk essential for a healthy diet.',
    price: 50, // Price in rupees per liter
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSc2ZWKFC1rsFIF4jHkASrQMqL13bS0vqEkVV2cP3YfN5saKQcwpP-     WP7QrQfmIWQ6cnRh2IU4QsY2vYEqcmlKu1MOemOlSsrezS_tcFxCBNhjXWqmmnymV',
    category: 'Dairy',
    stock: 100,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 91,
    name: 'Cheese',
    description: 'Fresh and flavorful cheese, ideal for sandwiches and pizzas.',
    price: 120, // Price in rupees per 200g
    image: 'https://m.media-amazon.com/images/I/61+AzywctoL._AC_UF894,1000_QL80_.jpg',
    category: 'Dairy',
    stock: 50,
    rating: 4.6,
    isPopular: true
  },
{
    id: 93,
    name: 'Cream',
    description: 'Rich and smooth cream, perfect for cooking and desserts.',
    price: 60, // Price in rupees per 200ml
    image: 'https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/740347d8-80b9-40eb-8de4-72b283acb7bc.jpg?ts=1706182141%27',
    category: 'Dairy',
    stock: 30,
    rating: 4.4,
    isPopular: false
  },
 {
id: 1,
name: 'Fresh Tomatoes',
description: 'Organically grown fresh red tomatoes, perfect for salads and curries.',
price: 40, // Price in rupees
image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Vegetables',
stock: 50,
rating: 4.5,
isPopular: true
},
{
id: 6,
name: 'Potatoes',
description: 'Fresh potatoes, perfect for curries, fries, and more.',
price: 30, // Price in rupees per kg
image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Vegetables',
stock: 80,
rating: 4.0,
isPopular: false
},
{
id: 10,
name: 'Onions',
description: 'Fresh onions, essential for Indian cooking.',
price: 35, // Price in rupees per kg
image: 'https://images.pexels.com/photos/4197444/pexels-photo-4197444.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Vegetables',
stock: 100,
rating: 4.3,
isPopular: false
},
{
id: 36,
name: 'Chili Peppers',
description: 'Spicy and fresh chili peppers, great for adding heat to dishes.',
price: 50, // Price in rupees
image: 'https://i.pinimg.com/736x/e3/65/73/e36573f6b3bea15df63ad145d407a99a.jpg',
category: 'Vegetables',
stock: 25,
rating: 4.7,
isPopular: true
},
{
id: 15,
name: 'Cauliflower',
description: 'Fresh white cauliflower, perfect for curries and roasting.',
price: 45, // Price in rupees
image: 'https://feashts.com/wp-content/uploads/2025/01/Snapshot_4.jpg',
category: 'Vegetables',
stock: 25,
rating: 4.6,
isPopular: true
}
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};