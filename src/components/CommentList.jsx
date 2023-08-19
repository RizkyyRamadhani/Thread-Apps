// eslint-disable-next-line no-unused-vars
import React from "react";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

function CommentList ({ addComment, comments, authUser}) {
    return (
        <div>
            <CommentInput addComment={addComment} />
            <h1>
                Comment
            </h1>
            {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} authUser={authUser} {...comment} />
        ))
      ) : (
        <p>there is no comments</p>
      )}
        </div>
    )
}

CommentList.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
  
}

export default CommentList;