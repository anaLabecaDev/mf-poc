import React from 'react';
import { useGetAccessTokenMutation } from '../../api/api';
import { AuthRequest, AuthResponse } from '../../api/types';

function Loader() {
  return <div>Loading...</div>;
}

export const Login = () => {
  const [formState, setFormState] = React.useState<AuthRequest>({
    username: '',
    password: ''
  });

  const [getAccessToken, { isLoading }] = useGetAccessTokenMutation();

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async () => {
    try {
      const token: AuthResponse = await getAccessToken(formState).unwrap();
      sessionStorage.setItem('TOKEN', token.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="w-full h-full bg-gray-200 flex justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 py-6 max-w-s">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            onChange={handleChange}
          />
          <button className="bg-green-400 text-white font-bold py-2 px-4" type="button" onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </form>

      {isLoading ? <Loader /> : <p>Done</p>}
    </article>
  );
};
