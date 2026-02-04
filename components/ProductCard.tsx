import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="group flex flex-col bg-white dark:bg-[#2c241b] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f0ebe5] dark:border-[#3a3228] cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b]">
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md z-10">-{product.discount}%</span>
        )}
        {product.isHot && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">HOT</span>
        )}
        <img 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal" 
          src={product.image} 
          alt={product.name} 
        />
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
        <h3 className="text-background-dark dark:text-white font-bold leading-tight mb-2 line-clamp-2">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">R {product.originalPrice}</span>
            )}
            <span className="text-primary font-bold text-lg">R {product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
