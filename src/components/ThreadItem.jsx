// eslint-disable-next-line no-unused-vars
import React from "react";
import TagItem from "./TagItem";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils";
import HTMLReactParser from "html-react-parser";
import PropTypes from "prop-types";


function ThreadItem ({  id,  title,  body, category,createdAt, upVotesBy, downVotesBy, totalComments, user})

{
const navigate = useNavigate();


  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if(event.key === 'enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  }

  return (
    <div role="button" tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress} className="max-w-6xl mb-5 rounded overflow-hidden shadow-xl">

        <div className="px-6 py-4 flex items-center">
          <img src={user.avatar} alt="avatar" className="rounded-full w-10" />
            <div className="ml-2">
              <h3 className="text-base font-semibold">{user.name}</h3>
              <span className="font-normal text-slate-400 text-xs">{postedAt(createdAt)}</span>
            </div>
        </div>
        
        <div className="px-6 pb-2">
          <h3 className="text-2xl text-white-200 font-bold dotsTitle">{title}</h3>
          <div className="text-gray-700 text-base">{HTMLReactParser(body)}</div>
        </div>

        <div className="flex px-6 pb-2 items-center gap-3">
          <span className="inline-block bg-gray-200 rounded-full px-6 py-1 text-lg font-semibold text-gray-700 mr-3 mb-3 mt-5">
            <TagItem text={category} />
          </span>
          <button><svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></button>
          <span className="text-2xl " >{upVotesBy.length}</span>

          <button><svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg></button>
          <span className="text-2xl " >{downVotesBy.length}</span>

          <button><svg className="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg></button>
          <span className="text-2xl">{totalComments}</span>
          
        </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,

}

export default ThreadItem;
