"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Input from "@components/input/Input"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        console.log('Successfully logged in!');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded">
          {error}
        </div>
      )}
      <div className="mb-4">
        <Input placeholder={"email"} />
      </div>

      <div className="mb-6">
      <Input placeholder={"Password"} />

      </div>

      <button
        type="submit"
        className=" black_btn w-2/4 font-bold py-3 px-4 ml-auto mr-auto "
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
