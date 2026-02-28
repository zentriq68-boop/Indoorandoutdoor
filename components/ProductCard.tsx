import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      onClick={() => navigate(`/product/${product.id}`)}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col bg-white dark:bg-[#2c241b] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#f0ebe5] dark:border-[#3a3228] cursor-pointer h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b]">
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm">-{product.discount}%</span>
        )}
        {product.isHot && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm">HOT</span>
        )}
        <div className="w-full h-full p-4">
          <motion.img 
            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
        <h3 className="text-background-dark dark:text-white font-bold leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">R {product.originalPrice}</span>
            )}
            <span className="text-primary font-bold text-lg">
              {product.price === 0 ? "Inquire for price" : `R ${product.price}`}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
