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
    id: 5,
    name: 'Garam Masala',
    description: 'Authentic blend of ground spices used in Indian cuisine.',
    price: 75, // Price in rupees per 100g
    image: 'https://sunrisespices.in/content/dam/sunrise/product-detail/garam_masala-removebg-preview.png/jcr:content/renditions/web-small.webp',
    category: 'Spices',
    stock: 60,
    rating: 4.8,
    isPopular: true
  },
 {
    id: 109,
    name: 'Turmeric Powder',
    description: 'Natural turmeric powder for cooking and medicinal purposes.',
    price: 50, // Price in rupees per 100g
    image: 'https://images.meesho.com/images/products/304801372/qjzx6_512.webp',
    category: 'Spices',
    stock: 120,
    rating: 4.5,
    isPopular: false
  },
{
    id: 114,
    name: 'Red Chili Powder',
    description: 'Fiery red chili powder to spice up your dishes.',
    price: 65, // Price in rupees per 100g
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQME0Drd-y7o4ZXcm67SfaQrl1oONntLPo1TEVEvEZJQzJZ0iclpdU5Vk8brsQTrW5bvJJmmnhIiKVSu0UisV26JDr083hX4sOKt3LLtgRuMXrcvrXytxNmVA',
    category: 'Spices',
    stock: 90,
    rating: 4.4,
    isPopular: true
  },
{
    id: 119,
    name: 'Bay Leaves',
    description: 'Dried bay leaves for enhancing the flavor of your dishes.',
    price: 50, // Price in rupees per 100g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgifDkFXO8u_qvjZZDEdMTnDhF9ZeiyR8NUVTFAKcp9La46HW0OuPOeTAGsx_NXxOuzmitRI9yi94P7_bExY1FINKwYsvs3wl4pNjOf4VAy5JcXh14EKNn',
    category: 'Spices',
    stock: 95,
    rating: 4.3,
    isPopular: true
  },
{
    id: 111,
    name: 'Black Pepper',
    description: 'Whole black peppercorns for bold and sharp flavor.',
    price: 100, // Price in rupees per 100g
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1arwXWA4jYpo-2umzBXvyGeQ1e0CO1t3cvHLa6ofV5ePGVdR_YLuzG3ZukQ0I6IkZ9-zAgcfbqZj4e06MwilRU_uHAYgTz1C5Eu77DHZwq0o7PDMOeCA-',
    category: 'Spices',
    stock: 80,
    rating: 4.6,
    isPopular: false
  },


{  
 id: 137,
    name: 'Mixed Nuts',
    description: 'A wholesome mix of cashews, almonds, and pistachios.',
    price: 400, // Price in rupees per 500g
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQE22EzSqPAZFhrTu7V9A1oz3d2NqObcbJsgegPHwGFhlIPokQ52o4_vHSCCbVnzhCEKW3sAlT2QgYGwj_GV0D3mFjX85wgxDEtQQQjVJszy_V8pvgo-alig',
    category: 'Snacks',
    stock: 20,
    rating: 4.9,
    isPopular: true
  },
{
    id: 135,
    name: 'Salted Pistachios',
    description: 'Delicious salted pistachios for a healthy snack.',
    price: 320, // Price in rupees per 250g
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/nut-dry-fruit/m/v/d/450-premium-californian-roasted-salted-1-pouch-happilo-original-imah9dduzf5mqfgs.jpeg?q=90&crop=false',
    category: 'Snacks',
    stock: 30,
    rating: 4.6,
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
    id: 134,
    name: 'Almonds',
    description: 'Healthy and crunchy almonds, perfect for every occasion.',
    price: 300, // Price in rupees per 250g
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgeZlqOQq1SdWePvDdF2IThFgeecO9fLQfholmwBCcGCNEftYcvbbZ_NKZZcdr7hGBfKZmreD3-0X0ZuWElcPGF4jMolwDH9_gbpzd4c_0EWDQ-HN9QvNc',
    category: 'Snacks',
    stock: 50,
    rating: 4.7,
    isPopular: false
  },
{
    id: 136,
    name: 'Dried Cranberries',
    description: 'Sweet and tangy dried cranberries, perfect for salads or snacking.',
    price: 200, // Price in rupees per 250g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVG1qQRYbriC1kbg4tZSpX3ES2Gwcahxuz3Z3BWkw7qIor_QFycGRGYqe_Ago_3o8ai1mNaC3QoS29O1KyRzjbCJekYHhn8HnBIbY7HILbUU-AxPiygk5Xwg',
    category: 'Snacks',
    stock: 60,
    rating: 4.5,
    isPopular: false
  },




{
  id: 129,
  name: 'Sona Masoori Rice',
  description: 'Lightweight and aromatic medium-grain rice, ideal for everyday cooking. Known for its delicate texture and versatility in preparing dishes like idlis, dosas, and fried rice.',
  price: 90, // Price in rupees per kg
  image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7szPEnqDwDemCfwGr0PXj63BfRgWKPPS6_dJ2Mh1O-_GU8kA0Es4HzORxwBsZywDn4jDDFVSUBQ6lqxeryoMmZ6VbcfYpyeGl_krcxa-NItyY3MxyvF5TSw',
  category: 'Grains',
  stock: 120,
  rating: 4.6,
  isPopular: true
},
{
  id: 130,
  name: 'Barley',
  description: 'Whole grain barley with a mild nutty flavor. Highly nutritious and versatile, suitable for soups, salads, and making barley water. Packed with dietary fiber and essential nutrients.',
  price: 65, // Price in rupees per kg
  image: 'https://m.media-amazon.com/images/I/81SAY-bwdtL._AC_UF1000,1000_QL80_.jpg',
  category: 'Grains',
  stock: 75,
  rating: 4.3,
  isPopular: false
},
{
  id: 133,
  name: 'Maize Flour',
  description: 'Finely ground maize flour, ideal for making traditional cornbread, rotis, and porridge. Naturally gluten-free and rich in dietary fiber and essential nutrients.',
  price: 50, // Price in rupees per kg
  image: 'https://m.media-amazon.com/images/I/71VXSqgvvcL.jpg',
  category: 'Grains',
  stock: 60,
  rating: 4.2,
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