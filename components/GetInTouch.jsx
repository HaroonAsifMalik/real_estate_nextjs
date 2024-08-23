import InfoRow from './InfoRow';
import FormField from './FormField';

const GetInTouch = () => {
  return (
    <div id='contact' className="get-in-touch-container flex flex-col lg:flex-row justify-between items-center lg:items-start bg-white p-8 " >
      {/* Contact Details Section */}
      <div className="contact-details text-center lg:text-left lg:w-1/2 space-y-6 p-12">
        <h2 className="text-3xl font-semibold">GET IN TOUCH WITH SERENE TOWER TODAY!</h2>
        <p className="text-gray-700">
          Our team is here to assist you. Whether you have questions about our apartments, amenities, or availability, we're just a message away. Reach out now to start your journey toward luxurious living.
        </p>
        <div className="space-y-4">
          <InfoRow icon="assets/images/mail.svg" text="info@serenetower.com" />
          <InfoRow icon="assets/images/contact.svg" text="+92 300 411 1110" />
          <InfoRow icon="assets/images/location.svg" text="Serene Tower, building # 223-C, C Block, Main Broadway Commercial, DHA Phase 8, Lahore." />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form bg-primary-orange-200 text-white p-8 lg:w-1/2 mt-8 lg:mt-0 shadow-lg rounded-lg ">
        <h2 className="text-2xl font-semibold mb-6">GET IN TOUCH</h2>
        <form>
          <FormField id="name" label="NAME" placeholder="Name" />
          <FormField id="phone" label="PHONE NO." placeholder="Phone No." />
          <FormField id="email" type="email" label="EMAIL ADDRESS" placeholder="Email Address" />
          <FormField id="message" label="MESSAGE" placeholder="Message" isTextarea />
          <button type="submit" className="w-full bg-white text-teal-800 py-2 rounded font-semibold hover:bg-gray-200 transition-all">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
