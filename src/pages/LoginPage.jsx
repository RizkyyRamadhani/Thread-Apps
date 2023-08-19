// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";


function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({email, password}) => {
    dispatch(asyncSetAuthUser({email, password}));
  }
    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    
        <div className="mx-auto max-w-2xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl">Threads Kuy</h2>
              <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
          Start your journey with us.
          </p>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
             <LoginInput login={onLogin}/>

              <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
              Don&apos;t have an account?{' '}
                <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
              </p>
            </div>
          </div>
      </div>
    )
}

export default LoginPage;