import React, { useState } from 'react';

const Input = ({placeholder}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <input
        type="text"
        className="rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-opacity-50   ml-auto mr-auto "
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

  );
};

export default Input;