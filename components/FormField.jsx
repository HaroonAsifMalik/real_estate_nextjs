
const FormField = ({ id, label, type = 'text', placeholder, isTextarea = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm mb-2">{label}</label>
      {isTextarea ? (
        <textarea id={id} name={id} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded bg-transparent text-white h-32"></textarea>
      ) : (
        <input type={type} id={id} name={id} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded bg-transparent text-white" />
      )}
    </div>
  );
};

export default FormField;
