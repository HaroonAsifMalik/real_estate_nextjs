import React from 'react';

const GetInTouch = () => {
    return (
        <div className="get-in-touch-container flex flex-col lg:flex-row justify-between items-center lg:items-start bg-white p-8">
            <div className="contact-details text-center lg:text-left lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold">GET IN TOUCH WITH SERENE TOWER TODAY!</h2>
                <p className="text-gray-700">
                    Our team is here to assist you. Whether you have questions about our apartments, amenities, or availability, we're just a message away. Reach out now to start your journey toward luxurious living.
                </p>
                <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <img src="/path/to/email-icon.svg" alt="Email Icon" className="w-5 h-5" />
                        <span>info@serenetower.com</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <img src="/path/to/phone-icon.svg" alt="Phone Icon" className="w-5 h-5" />
                        <span>+92 300 411 1110</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <img src="/path/to/location-icon.svg" alt="Location Icon" className="w-5 h-5" />
                        <span>Serene Tower, building # 223-C, C Block, Main Broadway Commercial, DHA Phase 8, Lahore.</span>
                    </div>
                </div>
            </div>

            <div className="contact-form bg-teal-800 text-white p-8 lg:w-1/2 mt-8 lg:mt-0">
                <h2 className="text-2xl font-semibold mb-6">GET IN TOUCH</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm mb-2">NAME</label>
                        <input type="text" id="name" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded bg-transparent text-white" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm mb-2">PHONE NO.</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone No." className="w-full p-2 border border-gray-300 rounded bg-transparent text-white" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm mb-2">EMAIL ADDRESS</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded bg-transparent text-white" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm mb-2">MESSAGE</label>
                        <textarea id="message" name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded bg-transparent text-white h-32"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-white text-teal-800 py-2 rounded font-semibold hover:bg-gray-200">SEND</button>
                </form>
            </div>
        </div>

    );
};

export default GetInTouch;