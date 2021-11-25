import React from 'react';

export const Login = () => {
  const handleLogin = () => console.log('Login');

  return (
    <article className="w-full h-full bg-gray-200 flex justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 py-6 max-w-s">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <button className="bg-green-400 text-white font-bold py-2 px-4" type="button" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </form>
    </article>
  );
};
