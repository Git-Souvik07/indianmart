import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Award, Leaf } from 'lucide-react';
import Hero from '../components/home/Hero';
import CategoryCard from '../components/home/CategoryCard';
import ProductCard from '../components/product/ProductCard';
import { categories, getPopularProducts } from '../data/products';

const HomePage: React.FC = () => {
  const popularProducts = getPopularProducts();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <Truck className="h-10 w-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Free Delivery</h3>
                <p className="text-gray-600">On orders above ₹500</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <Clock className="h-10 w-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Quick Delivery</h3>
                <p className="text-gray-600">Same-day in select areas</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <Award className="h-10 w-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Best Quality</h3>
                <p className="text-gray-600">Handpicked fresh items</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <Leaf className="h-10 w-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">100% Organic</h3>
                <p className="text-gray-600">Farm-fresh products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Shop by Category</h2>
            <Link 
              to="/products" 
              className="text-green-600 hover:text-green-700 font-medium flex items-center"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.id} 
                id={category.id} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popular Products</h2>
            <Link 
              to="/products" 
              className="text-green-600 hover:text-green-700 font-medium flex items-center"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fresh & Healthy</h2>
                <p className="text-white/90 text-lg mb-6">
                  Discover our wide range of organic vegetables and fruits sourced directly from local farmers.
                </p>
                <Link 
                  to="/products?category=Organic" 
                  className="inline-block bg-white text-green-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Shop Organic
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fresh Vegetables" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;