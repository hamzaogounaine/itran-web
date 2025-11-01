// components/mvpblocks/ProjectCard.jsx
'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  description,
  images = [],
  // We no longer need to pass 'features' to the card directly, 
  // as they'll be in the modal.
  // Add an onClick handler to open the modal
  onViewDetails, 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Helper functions for carousel (nextSlide, prevSlide)
  const nextSlide = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  // Auto-scrolling and cleanup for carousel
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (!isHovered) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, images.length]);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-800 cursor-pointer" // Added cursor-pointer
      style={{
        background: 'linear-gradient(180deg, #0e0e0e 0%, #181818 100%)',
      }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // Directly open modal on card click, or via button
      onClick={onViewDetails} 
    >
      {/* Carousel */}
      <div className="relative h-64 overflow-hidden bg-black">
        <div ref={carouselRef} className="flex h-full snap-x snap-mandatory overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="snap-start min-w-full h-full relative">
              <img
                src={src}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation & Dots (omitted for brevity, keep if you want them on the card) */}
        {/* You might want to remove these from the card to keep it cleaner, 
            or make them appear only on hover. For this example, let's keep them 
            but consider making them `opacity-0 group-hover:opacity-100`. */}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3> 
        {/* Use line-clamp for short description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Removed features from here */}

        {/* The button now triggers the modal. It will prevent default card click if uncommented. */}
        {/* <button 
          onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
          className="mt-auto w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
          <span>Voir les détails</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button> */}
      </div>
    </motion.div>
  );
}