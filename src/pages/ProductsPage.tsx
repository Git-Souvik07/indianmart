import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories, getProductsByCategory, searchProducts } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    let result = products;
    
    // Apply category filter if selected
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }
    
    // Apply search filter if term exists
    if (searchTerm) {
      result = searchProducts(searchTerm);
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);
  
  // Update selected category when URL param changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
  
  // Update search term when URL param changes
  useEffect(() => {
    setSearchTerm(searchQuery || '');
  }, [searchQuery]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setIsMobileFilterOpen(false);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the useEffect
  };

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Products</h1>
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-300 shadow-sm"
            >
              <Filter className="h-5 w-5 mr-2 text-gray-600" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Sidebar - Categories */}
          <div 
            className={`lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-sm h-fit ${
              isMobileFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      selectedCategory === null
                        ? 'bg-green-100 text-green-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.name
                          ? 'bg-green-100 text-green-800 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mobile Close Button */}
            <div className="mt-6 lg:hidden">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-2 px-4 bg-gray-200 rounded-md text-gray-700"
              >
                Close Filters
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4 xl:w-4/5">
            {/* Desktop Title and Search */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedCategory ? selectedCategory : 'All Products'}
              </h1>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>
            
            {/* Mobile Search */}
            <div className="lg:hidden mb-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchTerm('');
                  }}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;