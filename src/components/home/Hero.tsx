import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-green-50 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Fresh Groceries
              <span className="block text-green-600">Delivered to Your Door</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Shop for fresh vegetables, fruits, spices, and authentic Indian groceries. Quality products at affordable prices, delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/products?category=Popular" 
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-lg border border-green-600 transition-colors"
              >
                View Popular Items
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh Groceries" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg py-3 px-4 shadow-md">
                <p className="text-green-600 font-bold">Today's Offer</p>
                <p className="text-gray-800 font-medium">Get 20% off on fresh vegetables!</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-amber-500 text-white p-4 rounded-full shadow-lg transform rotate-12 hidden md:block">
              <p className="font-bold text-sm">Free Delivery</p>
              <p className="text-xs">On orders above ₹500</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 transform skew-x-12 translate-x-1/2 z-0 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full transform -translate-x-1/2 translate-y-1/4 z-0 opacity-70"></div>
    </div>
  );
};

export default Hero;