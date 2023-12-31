// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from '../hooks/useInput';


function RegisterInput({ register }) {

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

    return (
        <form className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Name 
            </label>
            <div className="mt-2.5">
              <input type="text" value={name} onChange={onNameChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name"/>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900"> Email </label>
            <div className="mt-2.5">
              <input type="email" value={email} onChange={onEmailChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email"/>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input type="password" value={password} onChange={onPasswordChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="button" onClick={() => register({name, email, password})}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Register
          </button>
        </div>
      </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;