import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import GALLERY_ITEMS from '../data/gallery';

const categories = ['All', ...new Set(GALLERY_ITEMS.map((item) => item.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ===== HERO SECTION - NO BACKGROUND IMAGE ===== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          >
            Our Work in Pictures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Browse through our collection of completed shade installations.
          </motion.p>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
          </div>
        </div>
      </div>

      {/* ===== GALLERY GRID - 3 COLUMNS WITH SAME SIZE IMAGES ===== */}
      <section className="py-24 md:py-32">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white/50 text-text-body hover:bg-primary/5 hover:text-primary border border-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid - 3 columns with fixed height images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all duration-300 h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full text-center">
                        <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-body text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
          </div>
        </div>
      </div>

      {/* ===== LIGHTBOX MODAL ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-3xl" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-bold text-2xl">{selectedImage.title}</h3>
                <p className="text-white/60 text-sm mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}