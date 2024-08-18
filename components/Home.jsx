const Home = () => {
    return (
        <section id="Home" className="bg-neutral-100 lg:py-52 w-full hero_image">
            <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p class="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                    <p class="text-4xl text-gray-200 font-bold md:text-7xl">SUMMER SALE</p>
                    <p class="mt-2 text-gray-200 text-sm md:text-lg">For limited time only!</p>
                    <button type="button" href="/login" className="home_btn py-2 px-5 mt-10 text-lg md:text-2xl">
                       Button 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home;
