"use client"
import { useEffect, useRef, useState } from 'react';

const useOnScreen = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// GalleryItem Component with Scroll Detection
const GalleryItem = ({ imgSrc, subtitle, title, description }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      className={`lg:w-1/3 sm:w-1/2 p-4 gallery-item ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={imgSrc}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-primary-orange-50 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-primary-orange mb-1">
            {subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
