import InfoRow from './InfoRow';
import ContactForm from './Form/ContactForm';

const GetInTouch = () => {
  return (
    <div id='contact' className="get-in-touch-container flex flex-col lg:flex-row justify-between items-center lg:items-start bg-white p-8 " >
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

    <ContactForm/>
    </div>
  );
};

export default GetInTouch;
