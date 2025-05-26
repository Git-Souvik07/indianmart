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
    id: 110,
    name: 'Cinnamon Sticks',
    description: 'Premium-quality cinnamon sticks for a rich aroma and taste.',
    price: 120, // Price in rupees per 100g
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ-tGPPOhnvBygRKYo_V1lQKFIhh3HFwqPLzekxB3fIqgHJJKDUJCe3R_1EwSVGvYM7xwYbtQBl_J0I7P_xaQIVUhHQFRXKV9OulAXxtL3rWK_WIPphkMjC',
    category: 'Spices',
    stock: 45,
    rating: 4.7,
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
    id: 112,
    name: 'Coriander Powder',
    description: 'Finely ground coriander powder for authentic taste.',
    price: 45, // Price in rupees per 100g
    image: 'https://m.media-amazon.com/images/I/71p4aYHucEL.jpg',
    category: 'Spices',
    stock: 100,
    rating: 4.3,
    isPopular: true
  },
  {
    id: 113,
    name: 'Cardamom Pods',
    description: 'Aromatic green cardamom pods for a unique and rich flavor.',
    price: 200, // Price in rupees per 100g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxIubH1hpqNCLxZLOPRXR-pcQg-YD5rL-b0nSXIo1Z1WaqBimHmC1MmxXYePnCKr-OczvugPUedkGj5M70DYJlfjg5GzhmmFvYNJyBhtbLLVkkpcsjqpijMg',
    category: 'Spices',
    stock: 30,
    rating: 4.9,
    isPopular: true
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
    id: 115,
    name: 'Cloves',
    description: 'High-quality cloves with a strong and aromatic flavor.',
    price: 150, // Price in rupees per 100g
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-3IaRSoBTPEjsDMwTuszuum9qlYz9ZlMvwE8UEY_oBneeW4vzkmDu4-QFM1qNbBiyDmvfwJxS6OdMOkYGT3oNAunLq13gRjvGZh5v563VIMCV-kHA13Ay',
    category: 'Spices',
    stock: 50,
    rating: 4.7,
    isPopular: false
  },
  {
    id: 116,
    name: 'Nutmeg',
    description: 'Whole nutmeg for a warm and spicy flavor.',
    price: 175, // Price in rupees per 100g
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPj3onOsrql_K5GSEOyoRhj3KNGLvbZ-uxtP8vU3V5uk7CbAECkKRUIXUQ2RU7y53skr5S2mOfOtFbJZUHWB9zIzwirQi-YnyurykQ5dhXXFejFht5gJOzVw',
    category: 'Spices',
    stock: 25,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 117,
    name: 'Mustard Seeds',
    description: 'Organic mustard seeds for a pungent and earthy taste.',
    price: 40, // Price in rupees per 100g
    image: 'https://m.media-amazon.com/images/I/712tuBuCmyL.jpg',
    category: 'Spices',
    stock: 150,
    rating: 4.2,
    isPopular: false
  },
  {
    id: 118,
    name: 'Fenugreek Seeds',
    description: 'High-quality fenugreek seeds for a bitter and earthy flavor.',
    price: 35, // Price in rupees per 100g
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBqqtTOme-aJK2yUVCbrJWkHK9PW3JE-KJJTABgOk9j04Uxfa26RmFDkDjOWekJyZR0WrY2mNrzuJD0oFhq-1m6jNq2fENesneGswSwf0',
    category: 'Spices',
    stock: 75,
    rating: 4.1,
    isPopular: false
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
    id: 120,
    name: 'Kasuri Methi',
    description: 'Dried fenugreek leaves for a unique aroma and flavor.',
    price: 60, // Price in rupees per 50g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROiFNwVSZTgT6Pya-Ap3SJBxVJnwSY343Q3XOmCo30vxeZ2_CCQj5_uxxqqhA0LsXXlzmByL2Z443zUFHqA3r0TjyiY2u4v6b83xnZVsdKaE1D7KpIK9aBufs',
    category: 'Spices',
    stock: 40,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 121,
    name: 'Ajwain Seeds',
    description: 'Aromatic ajwain seeds for digestive benefits and flavor.',
    price: 55, // Price in rupees per 100g
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVrFpqYf9qcTTe9ss3JbdXYn6hNrF9kkdwW0IWTmOfoswYjQV4ls2zCF2L5f6mQQm5H0kX9uGV0jXokVDKzJR25kfLkjZJ5g',
    category: 'Spices',
    stock: 110,
    rating: 4.4,
    isPopular: false
  },
  {
    id: 122,
    name: 'Dry Ginger Powder',
    description: 'Fine dry ginger powder for medicinal and culinary use.',
    price: 90, // Price in rupees per 100g
    image: 'https://m.media-amazon.com/images/I/81nKpe0VBPL.jpg',
    category: 'Spices',
    stock: 60,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 123,
    name: 'Saffron',
    description: 'Premium-grade saffron for a rich and exotic flavor.',
    price: 500, // Price in rupees per gram
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkxFcthFnkrjigWjVdxxOnOb2HzjDiTHOiIKxmmLqMldZjaJ_Ex-AT7H_QHWtVb0wXMn9RdH9xZvETDC6R08XbfgQO1q1i1yiKZLKiAgZPU6kR8NYyaLxgmw',
    category: 'Spices',
    stock: 15,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 124,
    name: 'Hing',
    description: 'Give your meals a strong flavour with just a pinch of goodness',
    price: 80, // Price in rupees per 50g
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdg6JVrG1iXwNw1flhTS8sLX_bJ6Woz2WvsCIzDur379aoVOM37GHUbMSelXPQmCDB3m8H23kIKPS6WzM13LGsVLxFohMhPGvnLhfSmbD27zap76UwdvW7oA',
    category: 'Spices',
    stock: 55,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 125,
    name: 'Cumin Powder',
    description: 'Ground cumin powder for an earthy and warm flavor.',
    price: 70, // Price in rupees per 100g
    image: 'https://m.media-amazon.com/images/I/81Y4dOt-V1L.jpg',
    category: 'Spices',
    stock: 85,
    rating: 4.6,
    isPopular: true
  },
  {
    id: 126,
    name: 'Fennel Seeds',
    description: 'Sweet and aromatic fennel seeds for cooking and digestion.',
    price: 45, // Price in rupees per 100g
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSC0RbngtVeGPKGLmhWlaItFp6ULVxaySjdrHR6So_0kpcxGtoPnciuRWtzcu3weW_0vGh2ZUMfR2cZp3_U6d1quqXgBzMA_hhOsedxT9PwQdaEMgHDYQAN',
    category: 'Spices',
    stock: 70,
    rating: 4.3,
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
    id: 72,
    name: 'Strawberries',
    description: 'Fresh and sweet strawberries, perfect for desserts.',
    price: 250, // Price in rupees per box
    image: 'https://thumbs.dreamstime.com/b/trawberries-fresh-juicy-tasty-natural-strawberries-fresh-juicy-tasty-natural-background-greenery-wicker-149454664.jpg',
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
    image: 'https://plantsguru.com/cdn/shop/files/plantsguru-fruitplants-litchi.jpg?v=1735618378',
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
    image: 'https://img3.exportersindia.com/product_images/bc-full/2022/1/9832697/guava-1643117751-6173467.jpeg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBqslzd3b1_nAsY9YUO2tMyfYBH0wykH3hw&s',
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
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322052/blackberries-in-a-bowl.jpg',
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
    image: 'https://articles-1mg.gumlet.io/articles/wp-content/uploads/2017/08/rsz_shutterstock_297863489.jpg?compress=true&quality=80&w=640&dpr=2.6',
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
    image: 'https://m.media-amazon.com/images/I/91FS9nT6g2L._AC_UF1000,1000_QL80_.jpg',
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
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/07/Raspberries-02-4bc2ac6.jpg?quality=90&resize=440,400',
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
    image: 'https://static.scientificamerican.com/sciam/cache/file/37BE56C7-BAA4-4100-9FCF2AE1097F0722_source.jpg?w=1200',
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
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/cantaloupe-cut.jpg.rend.hgtvcom.476.317.85.suffix/1715547262006.webp',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsUAxF79MEGHByHO8eKr5axaKjDZuIgIB3hm5dJP2IIIuXS8hOOAs6NLV1jlViegZMXo&usqp=CAU',
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
    stock: 40,
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
    id: 89,
    name: 'Milk',
    description: 'Fresh and pure cows milk essential for a healthy diet.',
    price: 50, // Price in rupees per liter
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSc2ZWKFC1rsFIF4jHkASrQMqL13bS0vqEkVV2cP3YfN5saKQcwpP-     WP7QrQfmIWQ6cnRh2IU4QsY2vYEqcmlKu1MOemOlSsrezS_tcFxCBNhjXWqmmnymV',
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
    id: 92,
    name: 'Yogurt',
    description: 'Creamy and healthy yogurt, great for digestion and immunity.',
    price: 40, // Price in rupees per 500g
    image: 'https://www.bigbasket.com/media/uploads/p/xxl/40327716_1-mother-dairy-plain-greek-yoghurt.jpg',
    category: 'Dairy',
    stock: 80,
    rating: 4.5,
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
    id: 94,
    name: 'Ghee',
    description: 'Traditional clarified butter, great for cooking and frying.',
    price: 500, // Price in rupees per kg
    image: 'https://www.tatanutrikorner.com/cdn/shop/files/Ghee500ML-1-removebg-preview_7bc4ffa3-e708-40ca-bf2d-8c92414940d5.png?v=1734663818',
    category: 'Dairy',
    stock: 25,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 95,
    name: 'Ice Cream',
    description: 'Delicious and creamy ice cream, available in various flavors.',
    price: 100, // Price in rupees per 500ml
    image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg',
    category: 'Dairy',
    stock: 40,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 96,
    name: 'Condensed Milk',
    description: 'Sweetened condensed milk, perfect for desserts and beverages.',
    price: 90, // Price in rupees per 400g
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/milk/g/y/9/78-sweetened-condensed-milk-78g-tin-condensed-rainbow-original-imagr2c5asrcgthu.jpeg?q=20&crop=false%27',
    category: 'Dairy',
    stock: 35,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 97,
    name: 'Whey Powder',
    description: 'High-protein whey powder, great for fitness enthusiasts.',
    price: 2000, // Price in rupees per kg
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/l/c/s/-original-imagquzavjnqthnj.jpeg?q=20&crop=false',
    category: 'Dairy',
    stock: 15,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 98,
    name: 'Buttermilk',
    description: 'Cool and refreshing buttermilk, ideal for hot days.',
    price: 20, // Price in rupees per 500ml
    image: 'https://kalonasupernatural.com/wp-content/uploads/Organic-Buttermilk-Low-Temp-Pasteurized-.jpg',
    category: 'Dairy',
    stock: 70,
    rating: 4.5,
    isPopular: true
  },
  {
    id: 99,
    name: 'Cottage Cheese',
    description: 'Soft and creamy cottage cheese, rich in protein and flavor.',
    price: 90, // Price in rupees per 200g
    image: 'https://goodculture.com/wp-content/uploads/2023/06/Renders_Simply_LotFatMilk_MultiServe.jpg',
    category: 'Dairy',
    stock: 45,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 100,
    name: 'Sour Cream',
    description: 'Tangy and creamy sour cream, perfect for dips and baking.',
    price: 120, // Price in rupees per 200g
    image: 'https://www.bigbasket.com/media/uploads/p/xxl/30008580_1-amul-sour-cream.jpg',
    category: 'Dairy',
    stock: 20,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 101,
    name: 'Ricotta Cheese',
    description: 'Light and fluffy ricotta cheese, ideal for pasta and desserts.',
    price: 150, // Price in rupees per 250g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4I9E7taUBpOvHwBUWNjEV8JyPluMc9lJo3ZWp6cPlR4Kee9hXorhNW27bgo2vYTfykV_SbmiU7OO-DiP7rsXQl-4RKOSCnw1zdCAXGWfWm--cpEvpK8EUUQ',
    category: 'Dairy',
    stock: 15,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 102,
    name: 'Skimmed Milk',
    description: 'Low-fat skimmed milk, great for health-conscious individuals.',
    price: 40, // Price in rupees per liter
    image: 'https://www.bigbasket.com/media/uploads/p/xl/40012988_4-amul-slim-n-trim-skimmed-milk.jpg',
    category: 'Dairy',
    stock: 60,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 103,
    name: 'Mozzarella Cheese',
    description: 'Soft and stretchy mozzarella cheese, perfect for pizzas.',
    price: 200, // Price in rupees per 250g
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQcq3RmFXgJrfHxN9fMeAAWMTedwzzMb9jM91jMGHd0Q_2O7UpkIepNUwAMrk8ZZI0OFiGgPOauO05uNUKh7A3rEH4H7jjCIgFd8CrcmAa52AJ4XBNHevPfw',
    category: 'Dairy',
    stock: 35,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 104,
    name: 'Goat Milk',
    description: 'Rich and nutritious goat milk, great for overall health.',
    price: 70, // Price in rupees per liter
    image: 'https://images.squarespace-cdn.com/content/v1/63b4aea059cc603938fb252a/1737400984939-3AXS8FVDSDUMJKXXY9U1/ErinScott_meyenberg_August2019-4693.jpg',
    category: 'Dairy',
    stock: 25,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 105,
    name: 'Probiotic Yogurt',
    description: 'Healthy and probiotic-rich yogurt for better digestion.',
    price: 60, // Price in rupees per 400g
    image: 'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-04-01/Epigamia_Probiotic_Yogurt_-_Alphonso_Mango_75_g.jpg',
    category: 'Dairy',
    stock: 40,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 106,
    name: 'Milk Powder',
    description: 'Convenient and long-lasting milk powder for multiple uses.',
    price: 95, // Price in rupees per kg
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/milk-powder/w/d/f/200-dairy-whitener-pouch-1-amulya-original-imagnwe2trzdsxg4.jpeg?q=90&crop=false',
    category: 'Dairy',
    stock: 20,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 107,
    name: 'Cream Cheese',
    description: 'Smooth and creamy cheese, perfect for bagels and desserts.',
    price: 250, // Price in rupees per 200g
    image: 'https://images-cdn.ubuy.co.in/6682dc52977dca09f90f61e4-philadelphia-original-cream-cheese.jpg',
    category: 'Dairy',
    stock: 30,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 108,
    name: 'Curd',
    description: 'Fresh and homemade curd, essential for traditional meals.',
    price: 30, // Price in rupees per 500g
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC14sEaVSzfUpeTQIFJFlQ-2rmbf7JhVAkN_jem0pcmrLQWb6aQMzWWynhalPl6OPiyFOSEpR37YqYtUcodkGo8eJG6AXYzduQqg4lKyJzOs0ArDnw9GXXqw',
    category: 'Dairy',
    stock: 80,
    rating: 4.7,
    isPopular: true
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
  id: 131,
  name: 'Foxtail Millet',
  description: 'Gluten-free and nutrient-rich foxtail millet, perfect for porridge, pilafs, and healthy snacks. Known for its high fiber content and low glycemic index, making it ideal for health-conscious diets.',
  price: 100, // Price in rupees per kg
  image: 'https://example.com/images/foxtail_millet.jpg',
  category: 'Grains',
  stock: 50,
  rating: 4.5,
  isPopular: true
},
{
  id: 132,
  name: 'Quinoa',
  description: 'Protein-packed and gluten-free quinoa, a superfood grain perfect for salads, soups, and bowls. Known for its light, fluffy texture and rich nutrient profile, including iron and magnesium.',
  price: 400, // Price in rupees per kg
  image: 'https://example.com/images/quinoa.jpg',
  category: 'Grains',
  stock: 40,
  rating: 4.8,
  isPopular: true
},
{
  id: 133,
  name: 'Maize Flour',
  description: 'Finely ground maize flour, ideal for making traditional cornbread, rotis, and porridge. Naturally gluten-free and rich in dietary fiber and essential nutrients.',
  price: 50, // Price in rupees per kg
  image: 'https://example.com/images/maize_flour.jpg',
  category: 'Grains',
  stock: 60,
  rating: 4.2,
  isPopular: false
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