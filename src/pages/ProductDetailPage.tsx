import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, Minus, Plus, Star, Truck, Clock, Shield, Heart, Share2, MessageCircle } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { getProductById, getProductsByCategory, Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'shipping'>('description');
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
          
        setRelatedProducts(related);
      } else {
        // Product not found, redirect to products page
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= (product?.stock || 10)) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }, quantity);
      
      // Show a temporary success message (in a real app)
      // Toast or notification would be shown here
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  if (!product) {
    return (
      <div className="pt-28 pb-12 flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg w-full max-w-6xl">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 h-96 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mock additional images for demonstration
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="pt-28 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Products
          </Link>
        </div>
        
        {/* Product Detail Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-green-500 ring-2 ring-green-200 dark:ring-green-800' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col space-y-6">
              <div>
                <Link 
                  to={`/products?category=${encodeURIComponent(product.category)}`}
                  className="text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 uppercase tracking-wide transition-colors"
                >
                  {product.category}
                </Link>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
                  {product.name}
                </h1>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
                    {product.rating.toFixed(1)} (127 reviews)
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <span className={`font-medium ${
                  product.stock > 0 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-baseline gap-4">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(product.price)}
                </div>
                <div className="text-lg text-gray-500 dark:text-gray-400 line-through">
                  {formatCurrency(product.price * 1.2)}
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                  17% OFF
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-6">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity:</span>
                <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 border-x-2 border-gray-200 dark:border-gray-600 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                    className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-4 rounded-xl border-2 transition-all ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-red-300 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-green-300 hover:text-green-500 transition-all"
                >
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
              
              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <Truck className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Free Delivery</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">On orders above ₹500</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Same Day</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Order before 2 PM</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Quality Guarantee</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Fresh & premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-colors duration-200">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex">
              {[
                { id: 'description', label: 'Description', icon: MessageCircle },
                { id: 'reviews', label: 'Reviews (127)', icon: Star },
                { id: 'shipping', label: 'Shipping Info', icon: Truck }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center px-8 py-6 font-medium transition-colors ${
                    activeTab === id
                      ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Product Description</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {product.description} This premium quality product is carefully selected and sourced from the best suppliers to ensure freshness and quality. Perfect for daily consumption and cooking needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Premium quality guaranteed</li>
                      <li>• Fresh and natural</li>
                      <li>• Carefully sourced</li>
                      <li>• Nutritious and healthy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Storage Instructions:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Store in a cool, dry place</li>
                      <li>• Keep away from direct sunlight</li>
                      <li>• Use within recommended time</li>
                      <li>• Refrigerate if necessary</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {[
                    { name: "Priya S.", rating: 5, comment: "Excellent quality! Fresh and exactly as described. Will order again.", date: "2 days ago" },
                    { name: "Rajesh K.", rating: 4, comment: "Good product, fast delivery. Satisfied with the purchase.", date: "1 week ago" },
                    { name: "Anita M.", rating: 5, comment: "Amazing quality and packaging. Highly recommended!", date: "2 weeks ago" }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                            <span className="text-green-600 dark:text-green-400 font-semibold">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Shipping Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Delivery Options:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <Truck className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">Standard Delivery</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">2-3 business days • Free on orders ₹500+</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">Express Delivery</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Same day • Order before 2 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Return Policy:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 7-day return policy</li>
                      <li>• Items must be in original condition</li>
                      <li>• Free return pickup</li>
                      <li>• Refund processed within 3-5 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">You might also like</h2>
              <Link 
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium flex items-center group"
              >
                View all in {product.category}
                <ChevronLeft className="ml-1 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;