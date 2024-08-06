import React, { useState } from 'react';
import { useStore } from '../../store/StoreContext';

function LoginForm() {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Extract login function and error state from the store context
  const { login, error, setError } = useStore();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(''); 
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(''); 
  };

  return (
    <div className="flex items-center justify-center m-4">
      <div className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-4 text-center text-black">Login</h1>
        
        {/* Display error message if any */}
        {error ? <p className="text-red-500 text-center mb-4">{error}</p> : <p className='mb-14'></p>}
        
        {/* Login form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          {/* Email input field */}
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password input field */}
          <div className="mb-6 w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          
          {/* Submit button and Create New Account link */}
          <div className='w-full flex flex-row justify-center gap-12 items-center'>
            <button
              type="submit"
              className="w-1/4 bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
            <div
              className="w-2/5 text-md bg-white border-2 border-violet-500 text-violet-500 py-2 px-4 rounded-md hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create New Account
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;