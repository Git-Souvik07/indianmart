import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Package, ChevronRight, ShoppingBag, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';
import { supabase } from '../lib/supabase';

interface OrderItem {
  id: string;
  product_id: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  product: {
    name: string;
    image: string;
  };
}

interface Order {
  id: string;
  created_at: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shipping_address: string;
}

const OrdersPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    try {
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select(`
          *,
          items:order_items(
            *,
            product:products(name, image)
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (ordersError) {
        throw ordersError;
      }

      setOrders(ordersData || []);
    } catch (err) {
      console.error('Error loading orders:', err);
      setError('Failed to load orders. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/orders' } }} />;
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-amber-100 text-amber-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="animate-pulse space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6">
                  <div className="flex items-start md:items-center mb-4 md:mb-0">
                    <div className="bg-gray-200 h-12 w-12 rounded-md mr-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-48"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-6 bg-gray-200 rounded w-24"></div>
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Orders</h1>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {orders.map((order) => (
              <div 
                key={order.id} 
                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start md:items-center mb-4 md:mb-0">
                    <div className="bg-gray-100 p-3 rounded-md mr-4">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Order #{order.id.slice(0, 8)}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(order.created_at).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">{formatCurrency(order.total)}</div>
                      <div className="text-sm text-gray-500">{order.items.length} items</div>
                    </div>
                    <button 
                      onClick={() => {
                        // Implement order details view
                        console.log('View order details:', order.id);
                      }}
                      className="ml-4 p-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="mt-4 pl-14">
                  <div className="flex flex-wrap gap-4">
                    {order.items.slice(0, 4).map((item) => (
                      <div key={item.id} className="relative">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="h-16 w-16 object-cover rounded-md"
                        />
                        {item.quantity > 1 && (
                          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {item.quantity}
                          </span>
                        )}
                      </div>
                    ))}
                    {order.items.length > 4 && (
                      <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 font-medium">
                        +{order.items.length - 4}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Delivery Address: {order.shipping_address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;