import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Award, Leaf, Star, ShoppingCart } from 'lucide-react';
import Hero from '../components/home/Hero';
import CategoryCard from '../components/home/CategoryCard';
import ProductCard from '../components/product/ProductCard';
import { categories, getPopularProducts } from '../data/products';

const HomePage: React.FC = () => {
  const popularProducts = getPopularProducts();

  return (
    <div className="pt-16 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Fresh Cart?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the best in grocery shopping with our premium services and quality products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Free Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">On orders above ₹500 across all categories</p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Same-day delivery in select metro areas</p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Best Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Handpicked fresh items with quality guarantee</p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-emerald-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">100% Organic</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Farm-fresh organic products directly sourced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Discover fresh products across all categories</p>
            </div>
            <Link 
              to="/products" 
              className="hidden md:flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold text-lg group transition-colors"
            >
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.id} 
                id={category.id} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
            >
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Products</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Customer favorites and trending items</p>
            </div>
            <Link 
              to="/products" 
              className="hidden md:flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold text-lg group transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Fresh Cart for their grocery needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                comment: "Amazing quality vegetables and fruits! The delivery is always on time and the products are fresh. Highly recommended!"
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5,
                comment: "Best grocery shopping experience online. The variety of products and competitive prices make it my go-to choice."
              },
              {
                name: "Anita Patel",
                location: "Bangalore",
                rating: 5,
                comment: "Love the organic section! Fresh Cart has made healthy eating so much easier for my family."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 p-8 lg:p-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Fresh & Healthy
                  <span className="block text-green-200">Organic Collection</span>
                </h2>
                <p className="text-white/90 text-xl mb-8 leading-relaxed">
                  Discover our premium range of organic vegetables and fruits sourced directly from certified organic farms across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products?category=Vegetables" 
                    className="inline-flex items-center justify-center bg-white text-green-700 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Shop Organic
                    <ShoppingCart className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/products" 
                    className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-green-700 transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img 
                  src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fresh Organic Vegetables" 
                  className="w-full h-auto object-cover lg:h-96"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl py-4 px-6 shadow-lg">
                  <p className="text-green-600 font-bold text-lg">Special Offer</p>
                  <p className="text-gray-800 font-semibold">Get 25% off on organic vegetables!</p>
                  <p className="text-gray-600 text-sm">Valid until stocks last</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Fresh Deals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new products, special offers, and seasonal deals.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;