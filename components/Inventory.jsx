import React from 'react'

const Inventory = () => {
    return (
        <div class="max-w-2xl mx-auto">
            <div className="inventory flex flex-col items-center py-3" >
                <h1 className="mb-4">INVENTORY</h1>
                <div className="inventory-items flex space-x-4">
                    <div className="inventory-item">
                        <h2>1 Bed</h2>
                    </div>
                    <div className="inventory-item">
                        <h2>2 Bed</h2>
                    </div>
                    <div className="inventory-item">
                        <h2>3 Bed</h2>
                    </div>
                    <div className="inventory-item">
                        <h2>Executive</h2>
                    </div>
                    <div className="inventory-item">
                        <h2>Penthouse</h2>
                    </div>
                </div>
            </div>

            <div id="default-carousel" class="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                <div class="relative h-80 md:h-96" data-carousel-inner>
                    {/* <!-- Item 1 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img  src={'assets/images/image.png'}
                            class="object-cover w-full h-full" alt="Slide 1" />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img  src={'assets/images/image.png'}
                            class="object-cover w-full h-full" alt="Slide 2" />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img  src={'assets/images/hero.png'}
                            class="object-cover w-full h-full" alt="Slide 3" />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button"
                    class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    data-carousel-prev>
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button type="button"
                    class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    data-carousel-next>
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            <p class="mt-5 text-center text-gray-700 dark:text-gray-300">
                This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
                by going to the official
                <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
                    target="_blank">
                    Flowbite Documentation
                </a>.
            </p>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

        </div>



    )
}

export default Inventory