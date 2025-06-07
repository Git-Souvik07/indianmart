import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
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

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {items.map(item => (
                  <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col sm:flex-row items-center">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
                        <Link to={`/products/${item.id}`}>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow mb-4 sm:mb-0 text-center sm:text-left">
                        <Link 
                          to={`/products/${item.id}`}
                          className="text-lg font-medium text-gray-800 hover:text-green-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="text-gray-500 text-sm mt-1">
                          Price: {formatCurrency(item.price)}
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="font-semibold text-gray-800 w-24 text-right">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                      
                      {/* Remove Button */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <ArrowRight className="h-5 w-5 mr-2 transform rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-800">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-gray-800">
                      {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (5%)</span>
                    <span className="font-medium text-gray-800">{formatCurrency(tax)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-semibold">Total</span>
                      <span className="font-bold text-xl text-gray-800">{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                {shipping > 0 && (
                  <div className="mt-4 text-sm text-gray-600 bg-green-50 p-3 rounded-md">
                    Add {formatCurrency(500 - subtotal)} more to get free shipping!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;