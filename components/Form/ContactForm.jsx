
import FormField from '../Input/FormField';

const ContactForm = () => {
  return (
    
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
  )
}

export default ContactForm
