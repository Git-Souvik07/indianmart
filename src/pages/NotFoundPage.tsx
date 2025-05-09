import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <div className="flex justify-center mb-6">
          <ShoppingBag className="h-20 w-20 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          <Home className="h-5 w-5 mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;