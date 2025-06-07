import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreditCard, Home, Check, MapPin, Phone, User, Mail, Lock, Calendar, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

interface ShippingForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

interface PaymentForm {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  saveCard: boolean;
}

const CheckoutPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingForm>({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentForm>({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    saveCard: false
  });
  
  // Calculate order summary values
  const subtotal = cartTotal;
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shipping + tax;
  
  useEffect(() => {
    // If cart is empty and order not placed, redirect to products
    if (items.length === 0 && !orderPlaced) {
      navigate('/products');
    }
  }, [items, navigate, orderPlaced]);
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login\" state={{ from: { pathname: '/checkout' } }} />;
  }
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Generate a random order ID
    const randomOrderId = 'ORD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderId(randomOrderId);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      setIsProcessing(false);
      clearCart();
      window.scrollTo(0, 0);
    }, 3000);
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPaymentInfo(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };
  
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };
  
  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2');
  };

  // Order Success Screen
  if (orderPlaced) {
    return (
      <div className="pt-28 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 text-center transition-colors duration-200">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-8">
              <Check className="h-12 w-12" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Thank you for your order! We'll send you a confirmation email shortly and keep you updated on your delivery status.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-8 rounded-xl mb-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Order ID:</span>
                <span className="font-bold text-gray-800 dark:text-white">{orderId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                <span className="font-bold text-gray-800 dark:text-white">{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Estimated Delivery:</span>
                <span className="font-bold text-gray-800 dark:text-white">2-3 business days</span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Shipping Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/orders')}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold transition-colors shadow-lg"
              >
                Track Your Order
              </button>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 py-4 px-8 rounded-xl font-semibold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-8">
            <div className={`flex items-center ${step >= 1 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 1 ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 dark:border-gray-600'
              }`}>
                {step > 1 ? <Check className="h-5 w-5" /> : '1'}
              </div>
              <span className="ml-3 font-medium hidden sm:block">Shipping</span>
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'} rounded`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 2 ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 dark:border-gray-600'
              }`}>
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  '2'
                )}
              </div>
              <span className="ml-3 font-medium hidden sm:block">Payment</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="xl:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-200">
              {step === 1 ? (
                <>
                  <div className="flex items-center mb-8">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl mr-4">
                      <Home className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Shipping Information</h2>
                  </div>
                  
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={shippingInfo.fullName}
                            onChange={handleShippingChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={shippingInfo.email}
                            onChange={handleShippingChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={shippingInfo.phone}
                            onChange={handleShippingChange}
                            required
                            pattern="[0-9]{10}"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="10-digit mobile number"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          PIN Code *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={shippingInfo.pincode}
                            onChange={handleShippingChange}
                            required
                            pattern="[0-9]{6}"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="6-digit PIN code"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Street Address *
                        </label>
                        <div className="relative">
                          <Home className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={shippingInfo.address}
                            onChange={handleShippingChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="House no, Building, Street, Area"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Enter state"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-6">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold transition-colors shadow-lg"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-8">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                      <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Payment Information</h2>
                  </div>
                  
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Card Number *
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={(e) => {
                              const formatted = formatCardNumber(e.target.value);
                              if (formatted.length <= 19) { // 16 digits + 3 spaces
                                setPaymentInfo(prev => ({ ...prev, cardNumber: formatted }));
                              }
                            }}
                            required
                            maxLength={19}
                            placeholder="1234 5678 9012 3456"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Cardholder Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={paymentInfo.cardName}
                            onChange={handlePaymentChange}
                            required
                            placeholder="Name as on card"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Expiry Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              id="expiry"
                              name="expiry"
                              value={paymentInfo.expiry}
                              onChange={(e) => {
                                const formatted = formatExpiry(e.target.value);
                                if (formatted.length <= 5) { // MM/YY
                                  setPaymentInfo(prev => ({ ...prev, expiry: formatted }));
                                }
                              }}
                              required
                              placeholder="MM/YY"
                              maxLength={5}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            CVV *
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              value={paymentInfo.cvv}
                              onChange={(e) => {
                                if (/^\d{0,3}$/.test(e.target.value)) {
                                  setPaymentInfo(prev => ({ ...prev, cvv: e.target.value }));
                                }
                              }}
                              required
                              maxLength={3}
                              placeholder="123"
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="saveCard"
                          name="saveCard"
                          checked={paymentInfo.saveCard}
                          onChange={handlePaymentChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded"
                        />
                        <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Save this card for future purchases
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Your payment information is encrypted and secure
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 py-4 px-8 rounded-xl font-semibold transition-colors"
                      >
                        Back to Shipping
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold transition-colors shadow-lg disabled:opacity-75"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          `Place Order • ${formatCurrency(total)}`
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-32 transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white truncate">{item.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatCurrency(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-white">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">Free</span>
                    ) : (
                      formatCurrency(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax (GST 5%)</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{formatCurrency(tax)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-gray-800 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;