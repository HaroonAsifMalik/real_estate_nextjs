
const ImageCarousel = ({ images, currentImageIndex, onPrevClick, onNextClick, onDotClick }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-80 md:h-96">
        {images.length > 0 ? (
          <img src={images[currentImageIndex]} className="object-cover w-full h-full" alt={`Slide ${currentImageIndex + 1}`} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No images available
          </div>
        )}
      </div>

      <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'} hover:bg-gray-400 transition`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-3 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        onClick={onPrevClick}
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-3 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        onClick={onNextClick}
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
