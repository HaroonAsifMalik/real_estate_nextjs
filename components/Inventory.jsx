"use client"
import  { useState } from 'react';
import InventoryItems from './InventoryItem';
import ImageCarousel from './ImageCarousel';

const inventoryData = {
  "1 Bed": ['assets/images/auth_bg.png', 'assets/images/auth_image.png', 'assets/images/hero.png'],
  "2 Bed": ['assets/images/2bed1.png', 'assets/images/2bed2.png', 'assets/images/2bed3.png'],
  "3 Bed": ['assets/images/3bed1.png', 'assets/images/3bed2.png', 'assets/images/3bed3.png'],
  Executive: ['assets/images/executive1.png', 'assets/images/executive2.png', 'assets/images/executive3.png'],
  Penthouse: ['assets/images/penthouse1.png', 'assets/images/penthouse2.png', 'assets/images/penthouse3.png'],
};

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState("1 Bed");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const images = inventoryData[selectedItem] || [];

  return (
    <div id='inventory' className="max-w-2xl mx-auto p-4 bg-white">
      <h1 className="text-center text-2xl font-semibold mb-6">INVENTORY</h1>
      <InventoryItems items={Object.keys(inventoryData)} selectedItem={selectedItem} onItemSelect={handleItemClick} />
      <ImageCarousel
        images={images}
        currentImageIndex={currentImageIndex}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        onDotClick={setCurrentImageIndex}
      />
    </div>
  );
};

export default Inventory;
