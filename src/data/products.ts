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
    image: '',
    category: 'Fruits',
    stock: 40,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 72,
    name: 'Strawberries',
    description: 'Fresh and sweet strawberries, perfect for desserts.',
    price: 250, // Price in rupees per box
    image: 'https://images.pexels.com/photos/158251/strawberries-frisch-ripe-sweet-158251.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 30,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 73,
    name: 'Pineapples',
    description: 'Tropical and juicy pineapples, great for snacks and smoothies.',
    price: 100, // Price in rupees per piece
    image: 'https://i0.wp.com/nextcashandcarry.com.ng/wp-content/uploads/2022/06/image.webp?fit=1080%2C607&ssl=1',
    category: 'Fruits',
    stock: 25,
    rating: 4.6,
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
    id: 75,
    name: 'Pomegranates',
    description: 'Rich and antioxidant-packed pomegranates.',
    price: 200, // Price in rupees per kg
    image: 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-pomegranates-on-table-royalty-free-image-1701801291.jpg?crop=0.655xw:0.985xh;0.148xw,0&resize=640:*',
    category: 'Fruits',
    stock: 35,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 76,
    name: 'Papayas',
    description: 'Nutritious and sweet papayas, great for digestion.',
    price: 60, // Price in rupees per piece
    image: 'https://m.media-amazon.com/images/I/616aZ4SMIHL._AC_UF1000,1000_QL80_.jpg',
    category: 'Fruits',
    stock: 40,
    rating: 4.4,
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
    id: 78,
    name: 'Kiwi',
    description: 'Tangy and nutrient-packed kiwi, great for immunity.',
    price: 30, // Price in rupees per piece
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',
    category: 'Fruits',
    stock: 30,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 79,
    name: 'Lychee',
    description: 'Exotic and sweet lychees, perfect for desserts and drinks.',
    price: 180, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/5926/food-fruit-lychee.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 25,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 80,
    name: 'Guavas',
    description: 'Juicy and fiber-rich guavas, ideal for snacks and juices.',
    price: 70, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/4061526/pexels-photo-4061526.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 50,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 81,
    name: 'Cherries',
    description: 'Sweet and succulent cherries, great for snacking and baking.',
    price: 300, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/1092744/pexels-photo-1092744.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 15,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 82,
    name: 'Blackberries',
    description: 'Rich and juicy blackberries, perfect for smoothies and desserts.',
    price: 250, // Price in rupees per box
    image: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 20,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 83,
    name: 'Peaches',
    description: 'Soft and juicy peaches, ideal for snacking and baking.',
    price: 150, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 35,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 84,
    name: 'Plums',
    description: 'Tangy and sweet plums, great for snacking and preserves.',
    price: 120, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/41957/plums-fruits-garden-healthy-41957.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 40,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 85,
    name: 'Raspberries',
    description: 'Delicate and tangy raspberries, perfect for desserts and jams.',
    price: 300, // Price in rupees per box
    image: 'https://images.pexels.com/photos/1161567/pexels-photo-1161567.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 15,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 86,
    name: 'Cranberries',
    description: 'Tart and tangy cranberries, great for sauces and baking.',
    price: 350, // Price in rupees per box
    image: 'https://images.pexels.com/photos/1920163/pexels-photo-1920163.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 10,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 87,
    name: 'Cantaloupe',
    description: 'Juicy and refreshing cantaloupe, perfect for summer snacks.',
    price: 50, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/718751/pexels-photo-718751.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 60,
    rating: 4.4,
    isPopular: false
  },
  {
    id: 88,
    name: 'Starfruit',
    description: 'Exotic and tangy starfruit, ideal for garnishing and snacking.',
    price: 100, // Price in rupees per kg
    image: 'https://images.pexels.com/photos/1675216/pexels-photo-1675216.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fruits',
    stock: 20,
    rating: 4.5,
    isPopular: false
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
    image: 'https://www.jiomart.com/images/product/original/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202408132028.jpg?im=Resize=(1000,1000)',
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
    image: 'https://www.jiomart.com/images/product/original/590000145/yellow-capsicum-200-g-product-images-o590000145-p590000145-0-202412031940.jpg?im=Resize=(1000,1000)',
    category: 'Vegetables',
    stock: 30,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 40,
    name: 'Capsicum (Red)',
    description: 'Bright red capsicums, great for salads and pasta.',
    price: 70, // Price in rupees
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPu7Cgt16UbPNrZjI3D5chHVR0P9CS6WBDuQ&s',
    category: 'Vegetables',
    stock: 30,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 37,
    name: 'Mushrooms',
    description: 'Fresh and earthy mushrooms, perfect for stir-fries and soups.',
    price: 120, // Price in rupees
    image: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2020/03/brown-mushroom-53494-scaled.jpg',
    category: 'Vegetables',
    stock: 20,
    rating: 4.8,
    isPopular: true
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
    id: 35,
    name: 'Spring Onions',
    description: 'Crisp and flavorful spring onions, perfect for garnishing and stir-fries.',
    price: 20, // Price in rupees
    image: 'https://kdahweb-static.kokilabenhospital.com/kdah-2019/tips/1606543206.png',
    category: 'Vegetables',
    stock: 60,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 34,
    name: 'Turnip',
    description: 'Sweet and crunchy turnips, great for soups and roasting.',
    price: 25, // Price in rupees
    image: 'https://www.farmersstop.com/cdn/shop/products/29049712083027_859x700.jpg?v=1744444908',
    category: 'Vegetables',
    stock: 35,
    rating: 4.3,
    isPopular: false
  },
  {
    id: 33,
    name: 'Okra',
    description: 'Fresh and tender okra, ideal for stir-fries and curries.',
    price: 30, // Price in rupees
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/SS/EY/PL/31131351/fresh-okra-lady-finger.jpg',
    category: 'Vegetables',
    stock: 40,
    rating: 4.4,
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
    id: 31,
    name: 'Pumpkin',
    description: 'Bright and tender pumpkins, great for soups and pies.',
    price: 40, // Price in rupees
    image: 'https://www.healthyfood.com/wp-content/uploads/2017/03/What-to-do-with-pumpkin.jpg',
    category: 'Vegetables',
    stock: 20,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 18,
    name: 'Eggplant (Brinjal)',
    description: 'Fresh and glossy eggplants, ideal for grilling and curries.',
    price: 35, // Price in rupees
    image: 'https://www.beaumont.org/images/default-source/news/eggplant-fotm.jpg?sfvrsn=3f0c7bef_2',
    category: 'Vegetables',
    stock: 40 ,
    rating: 4.4,
    isPopular: false
  },
  {
    id: 47,
    name: 'Celery',
    description: 'Crunchy and fresh celery, perfect for soups and salads.',
    price: 60, // Price in rupees
    image: 'https://media.npr.org/assets/img/2016/06/13/celery_custom-8f0a770aa8a6091316802b63fb7a0f8e9edcc6ec.jpg',
    category: 'Vegetables',
    stock: 20,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 54,
    name: 'Bitter Gourd',
    description: 'Fresh and nutritious bitter gourd, perfect for health-conscious recipes.',
    price: 45, // Price in rupees
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSkZvJXnl7X7qv2W4e_Ewlsf08vid7WFyBg&s',
    category: 'Vegetables',
    stock: 35,
    rating: 4.3,
    isPopular: false
  },
  {
    id: 29,
    name: 'Peas',
    description: 'Fresh green peas, great for curries and side dishes.',
    price: 35, // Price in rupees
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT02qjx8I12R1aouaJvkbIRzvCucMJ3DqWCCzZFTPb4rcyKBXPdD9PTKQNv2JfXr8LF_b6wNLOvKByQPSKAGvwLDQ',
    category: 'Vegetables',
    stock: 40,
    stock  : 'not available',
    rating: 4.6,
    isPopular: true
  },
  {
    id: 60,
    name: 'Swiss Chard',
    description: 'Vibrant and nutritious Swiss chard, ideal for steaming and sautés.',
    price: 55, // Price in rupees
    image: 'https://green-connect.com.au/wp-content/uploads/2023/01/Swiss-Chard.jpg',
    category: 'Vegetables',
    stock: 25,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 28,
    name: 'Sweet Corn',
    description: 'Juicy and sweet corn, perfect for roasting and soups.',
    price: 40, // Price in rupees
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHjMyMpw4cHKUYBAmF5oKlnT0gk90Os9Zi8qTmmIIbmbs7okyQblfvbkrMxgz6D-mGr098kXhtz0nfMncYHl2Fc1tdbKai1I0LtSUldco',
    category: 'Vegetables',
    stock: 60,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 27,
    name: 'Cabbage',
    description: 'Fresh green cabbage, great for salads and cooking.',
    price: 30, // Price in rupees
    image: 'https://images.squarespace-cdn.com/content/v1/60d5fe5c9e25003cd4b3b2ed/1634316438635-27FNWQSMMPRHWXB0MLGJ/green-cabbage-envato.jpg',
    category: 'Vegetables',
    stock: 35,
    rating: 4.5,
    isPopular: true
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
    id: 32,
    name: 'Bottle Gourd',
    description: 'Fresh and light bottle gourd, ideal for soups and curries.',
    price: 35, // Price in rupees
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyp_4kQNySMqfRagb_Tb5aCNoVw2Ltz7ibG83a-KpHtZKm_Iz2ej_h5Kut4tle2ZMJw3T5qH8y8nDuPhlCd_F6dg',
    category: 'Vegetables',
    stock: 30,
    rating: 4.5,
    isPopular: true
  },
   {
    id: 26,
    name: 'Green Beans',
    description: 'Crisp and tender green beans, ideal for stir-fries and steaming.',
    price: 50, // Price in rupees
    image: 'https://www.jiomart.com/images/product/original/590000157/french-beans-500-g-product-images-o590000157-p590000157-0-202411061150.jpg?im=Resize=(1000,1000)',
    category: 'Vegetables',
    stock: 45,
    rating: 4.7,
    isPopular: true
  },
   {
    id: 24,
    name: 'Beetroot',
    description: 'Rich and earthy beetroots, perfect for soups and salads.',
    price: 40, // Price in rupees
    image: 'https://hips.hearstapps.com/hmg-prod/images/beetroof-health-benefits-1637616232.jpg?crop=0.668xw:1.00xh;0.224xw,0&resize=640:*',
    category: 'Vegetables',
    stock: 25,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 22,
    name: 'Cucumber',
    description: 'Cool and crunchy cucumbers, great for salads and hydration.',
    price: 25, // Price in rupees
    image: 'https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg',
    category: 'Vegetables',
    stock: 50,
    rating: 4.4,
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