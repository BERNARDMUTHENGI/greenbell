import React, { useEffect, useRef, useState } from 'react';
import { testimonialsData } from '../../data/content';

const avatarColors = ['#1e88e5', '#e53935', '#43a047', '#8e24aa', '#fb8c00', '#00897b'];

const TestimonialCard = ({ testimonial }) => {
  const initial = testimonial.name.charAt(0).toUpperCase();
  const avatarColor = avatarColors[testimonial.id % avatarColors.length];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col h-full">
      {/* Header: profile + Google logo */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</p>
          <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
        </div>
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      {/* Google stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        "{testimonial.content}"
      </p>
    </div>
  );
};

const MobileSlider = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const total = testimonialsData.length;

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const onTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };

  const onTouchEnd = () => {
    if (dragOffset < -40) {
      setIndex((prev) => (prev + 1) % total);
    } else if (dragOffset > 40) {
      setIndex((prev) => (prev - 1 + total) % total);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const onMouseStart = (e) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const onMouseEnd = () => {
    if (dragOffset < -40) {
      setIndex((prev) => (prev + 1) % total);
    } else if (dragOffset > 40) {
      setIndex((prev) => (prev - 1 + total) % total);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="md:hidden">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onMouseDown={onMouseStart}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseEnd}
        onMouseLeave={onMouseEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out cursor-grab select-none"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`
          }}
        >
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-greenbell-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-primary mt-2">What Our Clients Say</h2>
        </div>

        {/* Mobile: auto-advancing slider with swipe */}
        <MobileSlider />

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
