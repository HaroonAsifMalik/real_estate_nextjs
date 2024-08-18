// components/Amenities.js
export default function Amenities() {
    return (
      <section className="bg-yellow-200 py-12">
         <div>
         <h1 className="text-center text-5xl font-bold mt-10">Welcome to Serene Tower</h1>


        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-8">AMENITIES</h2>
          <div className="flex flex-wrap justify-center gap-8">
            
            {/* Retail Center */}
            <div className="amenity-item text-center max-w-xs">
              <div className="mb-4">
                <img src="/path/to/icon1.svg" alt="Retail Center" className="w-20 h-20 mx-auto"/>
              </div>
              <h3 className="text-2xl font-semibold">RETAIL CENTER</h3>
              <p className="text-lg text-gray-700 mt-2">
                Ignite your culinary creativity and savor delectable moments with friends and family in our inviting retail center.
              </p>
            </div>
  
            {/* Kids Play Area */}
            <div className="amenity-item text-center max-w-xs">
              <div className="mb-4">
                <img src="/path/to/icon2.svg" alt="Kids Play Area" className="w-20 h-20 mx-auto"/>
              </div>
              <h3 className="text-2xl font-semibold">KIDS PLAY AREA</h3>
              <p className="text-lg text-gray-700 mt-2">
                Watch your little ones embark on endless adventures in a safe and exciting play area designed just for them.
              </p>
            </div>
  
            {/* Rooftop Lounge */}
            <div className="amenity-item text-center max-w-xs">
              <div className="mb-4">
                <img src="/path/to/icon3.svg" alt="Rooftop Lounge" className="w-20 h-20 mx-auto"/>
              </div>
              <h3 className="text-2xl font-semibold">ROOFTOP LOUNGE</h3>
              <p className="text-lg text-gray-700 mt-2">
                Delight in the soothing symphony of cascading water, where multiple features create an oasis of serenity and elegance.
              </p>
            </div>
            {/* Rooftop Lounge */}
            <div className="amenity-item text-center max-w-xs">
              <div className="mb-4">
                <img src="/path/to/icon3.svg" alt="Rooftop Lounge" className="w-20 h-20 mx-auto"/>
              </div>
              <h3 className="text-2xl font-semibold">ROOFTOP LOUNGE</h3>
              <p className="text-lg text-gray-700 mt-2">
                Delight in the soothing symphony of cascading water, where multiple features create an oasis of serenity and elegance.
              </p>
            </div>
  
            {/* Additional Amenities - Add more items here if needed */}
  
          </div>
        </div>
        </div>
      </section>
    );
  }
  