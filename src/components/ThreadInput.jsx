// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function ThreadInput({ threads }) {
  const [title, setTitle] = useInput("");
  const [category, setCategory] = useInput("");
  const [body, setBody] = useState("");


  function setBodyhandler(e) {
    if (e.target.value.length <= 320 ) {
        setBody(e.target.value);
    }
  }

  return (
    <form className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Title 
            </label>
            <div className="mt-2.5">
              <input type="text" value={title} onChange={setTitle}  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Title ..."/>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900"> Category </label>
            <div className="mt-2.5">
              <input type="text" value={category} onChange={setCategory} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Category (Optional) ..."/>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Body
            </label>
            <div className="mt-2.5">
              <textarea type="text" value={body} onChange={setBodyhandler} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="What do you think..."/>
              <p className="talk-input__char-left">
                <strong>{body.length}</strong>
                /320
            </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="button" onClick={() => threads({title, category, body})}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Add Thread
          </button>
        </div>
      </form>
  );
}

ThreadInput.propTypes = {
    threads: PropTypes.func.isRequired,
}

export default ThreadInput;
