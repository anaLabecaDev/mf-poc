import React from 'react';

export const Login = () => {
  const handleLogin = () => console.log('Login');

  return (
    <article className='w-full h-full'>
      <button
        className='bg-green-400 text-white font-bold py-4 w-80 min-w-max'
        type='button'
        onClick={handleLogin}
      >
        Log In
      </button>
    </article>
  );
};
