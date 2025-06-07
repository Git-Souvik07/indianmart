import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, ArrowLeft, Heart, Package } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { useAuth } from '../contexts/AuthContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    }
  };
  
  // Calculate order summary values
  const subtotal = cartTotal;
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shipping + tax;
  const savings = subtotal * 0.15; // Mock savings

  return (
    <div className="pt-28 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Shopping Cart</h1>
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
        </div>
        
        {items.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center transition-colors duration-200">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <ShoppingCart className="h-16 w-16 text-gray-400 dark:text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Start shopping to fill it up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold transition-colors shadow-lg"
              >
                <Package className="mr-2 h-5 w-5" />
                Browse Products
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 py-4 px-8 rounded-xl font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-200">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    Cart Items ({items.length})
                  </h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.map(item => (
                    <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        {/* Product Image */}
                        <div className="w-full sm:w-32 h-32 flex-shrink-0">
                          <Link to={`/products/${item.id}`}>
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-grow min-w-0">
                          <Link 
                            to={`/products/${item.id}`}
                            className="text-lg font-semibold text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors block mb-2"
                          >
                            {item.name}
                          </Link>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {formatCurrency(item.price)}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              {formatCurrency(item.price * 1.2)}
                            </span>
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                              17% OFF
                            </span>
                          </div>
                          
                          {/* Quantity and Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 border-x-2 border-gray-200 dark:border-gray-600 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {formatCurrency(item.price * item.quantity)}
                              </span>
                              <button 
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                title="Add to Wishlist"
                              >
                                <Heart className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                title="Remove from Cart"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="xl:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-32 transition-colors duration-200">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Order Summary</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal ({items.length} items)</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {shipping === 0 ? (
                        <span className="text-green-600 dark:text-green-400">Free</span>
                      ) : (
                        formatCurrency(shipping)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Tax (GST 5%)</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{formatCurrency(tax)}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                    <span>You Save</span>
                    <span className="font-semibold">-{formatCurrency(savings)}</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800 dark:text-white">Total</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl mb-4"
                >
                  {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
                
                {shipping > 0 && (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                      Add {formatCurrency(500 - subtotal)} more to get free shipping!
                    </p>
                  </div>
                )}

                {/* Promo Code */}
                <div className="mt-6 p-4 border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Have a promo code?</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure checkout with SSL encryption
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;