// components/ProjectModal.jsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from "next-intl";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null; // Don't render if no project is passed

  const t = useTranslations('projectModal'); // Assuming you'll add translations for the modal
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const thumbnailCarouselRef = useRef(null);

  const nextSlide = () => setCurrentIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));

  // Sync main carousel with current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Sync thumbnail carousel with current index, keeping current thumbnail visible
  useEffect(() => {
    if (thumbnailCarouselRef.current) {
      const thumbnailWidth = thumbnailCarouselRef.current.children[0]?.offsetWidth || 0;
      thumbnailCarouselRef.current.scrollTo({
        left: Math.max(0, currentIndex * (thumbnailWidth + 10) - (thumbnailCarouselRef.current.offsetWidth / 2) + (thumbnailWidth / 2)),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);


  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close when clicking outside modal content
        >
          <motion.div
            className="relative bg-[#0e0e0e] rounded-xl shadow-2xl w-full max-w-7xl h-full max-h-[90vh] grid grid-cols-1 lg:grid-cols-3 overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="lg:col-span-2 relative bg-black p-4 flex flex-col">
                {/* Main Image Carousel */}
                <div className="relative flex-grow overflow-hidden mb-4 rounded-lg">
                    <div ref={carouselRef} className="flex h-full snap-x snap-mandatory overflow-x-auto scrollbar-hide">
                        {project.images.map((src, index) => (
                            <div key={index} className="snap-start min-w-full h-full flex items-center justify-center">
                                <img
                                    src={src}
                                    alt={`${project.title} ${index + 1}`}
                                    className="max-w-full max-h-full object-contain" // Use object-contain
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons for main carousel */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                </div>

                {/* Thumbnail Carousel */}
                {project.images.length > 1 && (
                    <div ref={thumbnailCarouselRef} className="flex-shrink-0 flex gap-2 overflow-x-auto scrollbar-hide p-2 bg-gray-900 rounded-lg">
                        {project.images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-24 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                                    index === currentIndex ? 'border-2 border-primary scale-105' : 'border border-gray-700 opacity-70 hover:opacity-100'
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Details Section */}
            <div className="lg:col-span-1 p-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <h2 className="text-3xl font-bold text-white mb-4 pr-10">{project.title}</h2>
              
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{t('featuresTitle') || 'Fonctionnalités principales'}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 bg-gray-800 text-primary text-xs font-medium rounded-full">
                        <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}