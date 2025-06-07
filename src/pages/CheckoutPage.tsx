import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreditCard, Home, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

interface ShippingForm {
  fullName: string;
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
}

const CheckoutPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [shippingInfo, setShippingInfo] = useState<ShippingForm>({
    fullName: user?.name || '',
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
    cvv: ''
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
    return <Navigate to="/login" state={{ from: { pathname: '/checkout' } }} />;
  }
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random order ID
    const randomOrderId = 'ORD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderId(randomOrderId);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      window.scrollTo(0, 0);
    }, 1500);
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
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
      <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
                <Check className="h-10 w-10" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
              <p className="text-gray-600 mb-6">
                Your order has been placed and will be delivered soon.
              </p>
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <p className="text-gray-600 mb-2">Order ID: <span className="font-medium text-gray-800">{orderId}</span></p>
                <p className="text-gray-600 mb-2">Total Amount: <span className="font-medium text-gray-800">{formatCurrency(total)}</span></p>
                <p className="text-gray-600">Shipping Address: <span className="font-medium text-gray-800">{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}</span></p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
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
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        
        {/* Checkout Steps */}
        <div className="flex mb-8">
          <div className={`flex-1 text-center py-2 ${step === 1 ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'border-b-2 border-gray-200'}`}>
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-sm leading-6">1</span>
            Shipping
          </div>
          <div className={`flex-1 text-center py-2 ${step === 2 ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'border-b-2 border-gray-200'}`}>
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-sm leading-6">2</span>
            Payment
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {step === 1 ? (
                <>
                  <div className="flex items-center mb-6">
                    <Home className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
                  </div>
                  
                  <form onSubmit={handleShippingSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={shippingInfo.fullName}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={shippingInfo.phone}
                          onChange={handleShippingChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={shippingInfo.address}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={shippingInfo.pincode}
                          onChange={handleShippingChange}
                          required
                          pattern="[0-9]{6}"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-800">Payment Information</h2>
                  </div>
                  
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="space-y-6 mb-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={paymentInfo.cardName}
                          onChange={handlePaymentChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg transition-colors"
                      >
                        Back to Shipping
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                      <div>
                        <div className="text-gray-800 font-medium">{item.name}</div>
                        <div className="text-gray-500 text-sm">
                          {formatCurrency(item.price)} x {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-gray-800">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;