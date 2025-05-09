import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => {
  return (
    <Link 
      to={`/products?category=${encodeURIComponent(name)}`}
      className="group relative overflow-hidden rounded-lg shadow-md aspect-square"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-center">
        <h3 className="text-white font-semibold text-xl transition-transform duration-300 group-hover:translate-y-[-5px]">
          {name}
        </h3>
        <span className="inline-block text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;