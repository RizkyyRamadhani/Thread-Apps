/* eslint-disable no-unused-vars */
import React from "react";
import { postedAt } from "../utils";
import HTMLReactParser from "html-react-parser";
import PropTypes from "prop-types";


function CommentItem ({ owner, content, createdAt, upVotesBy, downVotesBy, authUser}) {
    return (
        <div className="my-5">
        {/* profile */}
        <div className="flex items-center gap-2 pt-2">
          <img src={owner.avatar} alt="halo" className="rounded-full w-8" />
          <h3 className="text-base font-semibold">{owner.name}</h3>
          <span className="font-normal text-slate-400 text-xs">
            ▫ {postedAt(createdAt)}
          </span>
        </div>
   
        <div className="mt-2">
          <p>{HTMLReactParser(content)}</p>
        </div>

        <div className="flex items-center gap-5">
        <button><svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></button>
        <span className="text-2xl " >{upVotesBy.length}</span>

        <button><svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg></button>
        <span className="text-2xl " >{downVotesBy.length}</span>


        </div>

      </div>
    )
}

CommentItem.propTypes = {
    owner: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    authUser: PropTypes.object.isRequired,
}

export default CommentItem;