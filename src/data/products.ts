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
  // src/data/products.js
export const products = [
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