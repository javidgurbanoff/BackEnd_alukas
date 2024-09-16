import React from 'react';

const Subscribe = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-[20px] text-gray-600 text-center mb-6">Sign up to our newsletter and receive a discount code directly to your inbox.</p>
      <div className="flex justify-center">
        <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-4 py-2 border 2px solid black  w-[510px] h-[50px]"
            required
          />
          <button 
            type="submit" 
            className="bg-gray-900 text-white px-4 py-2  hover:bg-gray-700 w-[156px] h-[50px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
