"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Passwords do not match");
    }
    else {
      try {
        await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
        console.log('Signed in');
      } catch (error) {
        setError(error.message);
      }
    }
  };



  return (
    <>
      <h4 className="block font-sans text-2xl font-semibold leading-snug text-white tracking-normal text-blue-gray-900 antialiased">
        Sign Up
      </h4>
      <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
        Enter your details to register.
      </p>
      <form className="mt-8 mb-2 w-full max-w-screen-sm sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-white text-sm   bg-transparent rounded-lg border border-primary-orange  appearance-none focus:outline-none focus:ring-0 focus:border-primary-orange peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floating_outlined" className="absolute text-sm text-gray-300  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-white text-sm   bg-transparent rounded-lg border border-primary-orange  appearance-none focus:outline-none focus:ring-0 focus:border-primary-orange peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute text-sm text-gray-300  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Password
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-white text-sm   bg-transparent rounded-lg border border-primary-orange  appearance-none focus:outline-none focus:ring-0 focus:border-primary-orange peer"
              placeholder=" "
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="absolute text-sm text-gray-300  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Confirm Passord
            </label>
          </div>

        </div>
        <button
          className="home_btn w-full"
          type="button"
          onClick={handleSubmit}
        >
          Register
        </button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
          Already have an account?
          <a
            className="font-semibold transition-colors text-primary-orange"
            href="/login"
          >
            Login
          </a>
        </p>
      </form>
      {/* <div className="w-full pt-5 px-4 mb-8 items-center ">
       <div className="text-sm text-gray-700 py-1">
         Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/form?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
       </div>
     </div> */}
    </>
  );
};

export default SignUpForm;
