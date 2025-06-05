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
    price: 40,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Vegetables',
  },
  {
    id: 2,
    name: 'Green Apples',
    description: 'Crisp and juicy green apples, rich in vitamins.',
    price: 120,
    image: 'https://images.pexels.com/photos/103631/pexels-photo-103631.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Whole Milk',
    description: 'Fresh and creamy whole milk, perfect for your daily needs.',
    price: 60,
    image: 'https://images.pexels.com/photos/594749/pexels-photo-594749.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Dairy',
  },
  {
    id: 4,
    name: 'Organic Turmeric',
    description: 'High-quality organic turmeric powder for vibrant flavors.',
    price: 150,
    image: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Spices',
  }
];

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