// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import { asyncAddComment } from "../states/threadComment/action";
import ThreadDetail from "../components/ThreadDetail";
import CommentList from "../components/CommentList";



function DetailPage () {
    const {id} = useParams();
    const {detailThread = null, authUser } = useSelector((states) => states);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
    }, [id, dispatch]);

    const addComment = ({ content }) => {
        dispatch(asyncAddComment({ content}));
        dispatch(asyncReceiveThreadDetail(id));
    };

    if (!detailThread) {
        return null;
    }

    return (
<div className="py-5 px-3  min-w-fit gap-2 flex flex-col items-center justify-center ">
  <div className="w-5/6 border flex flex-col p-5 shadow-2xl rounded ">
    <ThreadDetail {...detailThread} authUser={authUser.id} />
    <div className="w-full" id="commentList">
      <CommentList
        addComment={addComment}
        comments={detailThread.comments}
        threadId={detailThread.id}
        authUser={authUser ? authUser.id : null}
      />
    </div>
  </div>
</div>
    )
}

export default DetailPage;