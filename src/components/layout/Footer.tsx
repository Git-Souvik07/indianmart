import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 mr-2 text-green-500" />
              <span className="text-2xl font-bold text-white">Fresh Cart</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for fresh groceries and authentic Indian products delivered right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-green-500 transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-green-500 transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-green-500 transition-colors">My Account</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-green-500 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Vegetables" className="text-gray-300 hover:text-green-500 transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fruits" className="text-gray-300 hover:text-green-500 transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products?category=Dairy" className="text-gray-300 hover:text-green-500 transition-colors">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Spices" className="text-gray-300 hover:text-green-500 transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link to="/products?category=Grains" className="text-gray-300 hover:text-green-500 transition-colors">
                  Grains & Pulses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                <span className="text-gray-300">123 Grocery Street, Bangalore, Karnataka, India - 560001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-300">support@freshcart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fresh Cart. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-green-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-green-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-green-500 transition-colors">Shipping Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;