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
  { id: 4, name: 'Spices', image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Grains', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfX9blilfc29-nLu3YJ0JU4p5sVR4jvJ8gw&s' },
  { id: 6, name: 'Snacks', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const products: Product[] = [
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
    id: 2,
    name: 'Alphonso Mangoes',
    description: 'Premium quality Alphonso mangoes from Ratnagiri, Maharashtra.',
    price: 450, // Price in rupees
    image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 30,
    rating: 5.0,
    isPopular: true
  },
  {
    id: 3,
    name: 'Basmati Rice',
    description: 'Premium long grain basmati rice, aromatic and perfect for biryanis.',
    price: 120, // Price in rupees per kg
    image: 'https://pureandsure.in/cdn/shop/files/brown-basmati-rice.jpg?v=1727174739',
    category: 'Grains',
    stock: 100,
    rating: 4.2,
    isPopular: false
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
    id: 5,
    name: 'Garam Masala',
    description: 'Authentic blend of ground spices used in Indian cuisine.',
    price: 75, // Price in rupees per 100g
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Spices',
    stock: 60,
    rating: 4.8,
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
    id: 8,
    name: 'Bananas',
    description: 'Nutritious and energy-boosting bananas.',
    price: 60, // Price in rupees per dozen
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 70,
    rating: 4.1,
    isPopular: false
  },
  {
    id: 9,
    name: 'Turmeric Powder',
    description: 'High-quality turmeric powder with excellent color and aroma.',
    price: 65, // Price in rupees per 100g
    image: 'https://images.pexels.com/photos/4199097/pexels-photo-4199097.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Spices',
    stock: 50,
    rating: 4.6,
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
    id: 11,
    name: 'Whole Wheat Atta',
    description: 'Finely ground whole wheat flour for chapatis and rotis.',
    price: 55, // Price in rupees per kg
    image: 'https://www.srisritattva.com/cdn/shop/files/01_WheatA_Content_1kg-01_b9978920-8de4-4a96-bb33-8d24d576e41b.jpg?v=1684233485&width=1445',
    category: 'Grains',
    stock: 60,
    rating: 4.4,
    isPopular: true
  },
  {
    id: 12,
    name: 'Cashew Nuts',
    description: 'Premium quality cashew nuts for snacking and cooking.',
    price: 250, // Price in rupees per 250g
    image: 'https://nuttygritties.com/cdn/shop/files/Artboard6_66b49457-1032-4406-b6fe-f39d8d90ee04.jpg?v=1687942372',
    category: 'Snacks',
    stock: 40,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 13,
    name: 'Capsicum (Green)',
    description: 'Crunchy and fresh green bell peppers, perfect for stir-fries and salads.',
    price: 60, // Price in rupees
    image: 'https://www.jiomart.com/images/product/original/590000145/yellow-capsicum-200-g-product-images-o590000145-p590000145-0-202412031940.jpg?im=Resize=(1000,1000)',
    category: 'Vegetables',
    stock: 30,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 39,
    name: 'Capsicum (Yellow)',
    description: 'Vibrant yellow capsicums, perfect for salads and grilling.',
    price: 70, // Price in rupees
    image: 'https://images.pexels.com/photos/594584/pexels-photo-594584.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Vegetables',
    stock: 30,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 14,
    name: 'Baby Carrots',
    description: 'Sweet and tender baby carrots, ideal for snacks and side dishes.',
    price: 50, // Price in rupees
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Vegetables',
    stock: 40,
    rating: 4.3,
    isPopular: false
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
  },
  {
    id: 16,
    name: 'Spinach',
    description: 'Nutritious and fresh spinach leaves, great for soups and smoothies.',
    price: 30, // Price in rupees
    image: 'https://freshleafuae.com/wp-content/uploads/2024/08/spinach-freshleaf-dubai-uae-img01.jpg',
    category: 'Vegetables',
    stock: 60,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 17,
    name: 'Broccoli',
    description: 'Rich in nutrients, fresh green broccoli, perfect for steaming and salads.',
    price: 70, // Price in rupees
    image: 'https://c.ndtvimg.com/2018-09/5dtqabb8_broccoli_625x300_14_September_18.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
    category: 'Vegetables',
    stock: 20,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 18,
    name: 'Eggplant',
    description: 'Fresh and glossy eggplants, ideal for grilling and curries.',
    price: 35, // Price in rupees
    image: 'https://www.beaumont.org/images/default-source/news/eggplant-fotm.jpg?sfvrsn=3f0c7bef_2',
    category: 'Vegetables',
    stock: 40 ,
    rating: 4.4,
    isPopular: false
  },
  {
    id: 19,
    name: 'Ginger',
    description: 'Ginger seeds/Ginger plant seedsGinger may have potential uses for various conditions however, more human studies are needed to support its true extent in humans.This can be grown on variety of soils, including the well-drained lateritic soils of Goa. But the sandy loam is the best soil type for its cultivation. Season: Ginger can be grown both under rainfed and irrigated conditions.Fill the container with the prepared soil and plant the seeds. (Price in kilogram)',
    price: 45, // Price in rupees
    image: 'https://previews.123rf.com/images/prasannapatil/prasannapatil2102/prasannapatil210203942/164391362-ginger-in-indian-vegetable-market.jpg',
    category: 'Vegetables',
    stock: 70,
    rating: 4.5,
    isPopular: true
  },
  {
    id: 20,
    name: 'Garlic',
    description: 'Aromatic fresh garlic, essential for all cuisines.',
    price: 200, // Price per kg in rupees
    image: 'https://www.farmatma.in/wp-content/uploads/2017/12/garlic-cultivation.jpg',
    category: 'Vegetables',
    stock: 100,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 21,
    name: 'Zucchini',
    description: 'Tender and fresh zucchini, perfect for grilling and baking.',
    price: 90, // Price in rupees
    image: 'https://www.allthatgrows.in/cdn/shop/articles/Optimized-Feat_image-Zucchini_1_1100x1100.jpg?v=1708340775',
    category: 'Vegetables',
    stock: 15,
    rating: 4.2,
    isPopular: false
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