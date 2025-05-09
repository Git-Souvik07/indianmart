import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Package, ChevronRight, ShoppingBag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';

interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: number;
}

// Mock order data for demonstration
const mockOrders: Order[] = [
  {
    id: 'ORD123456',
    date: '2025-04-15',
    status: 'Delivered',
    total: 1250.50,
    items: 4
  },
  {
    id: 'ORD123455',
    date: '2025-04-10',
    status: 'Shipped',
    total: 650.75,
    items: 2
  },
  {
    id: 'ORD123454',
    date: '2025-04-01',
    status: 'Delivered',
    total: 850.25,
    items: 3
  }
];

const OrdersPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/orders' } }} />;
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-amber-100 text-amber-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
        
        {mockOrders.length === 0 ? (
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
            {mockOrders.map((order, index) => (
              <div 
                key={order.id} 
                className={`p-6 ${index !== mockOrders.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start md:items-center mb-4 md:mb-0">
                    <div className="bg-gray-100 p-3 rounded-md mr-4">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Order #{order.id}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Placed on {new Date(order.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">{formatCurrency(order.total)}</div>
                      <div className="text-sm text-gray-500">{order.items} items</div>
                    </div>
                    <Link 
                      to={`/orders/${order.id}`} 
                      className="ml-4 p-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </div>
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