/* eslint-disable no-unused-vars */
import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function CommentInput ({ addComment }) {
    const [comment, setComment] = useInput("");

    return (
        <div className="border border-slate-500 flex justify-around rounded my-2">
            <input type="text" value={comment} onChange={setComment} className="py-1 px-2 outline-none bg-transparent h-10 w-11/12"/>
            <button  onClick={() => addComment({content : comment})} className="text-3xl">
            <svg className="h-8 w-8 text-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"  fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /> </svg>
            </button>
        </div>
    )
}

CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default CommentInput;