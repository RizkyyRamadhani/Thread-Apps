// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from "../components/ThreadList";
import TagsList from "../components/TagsList";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "../states/shared/action";


const ThreadPage = () => {
  const { threads = [], users = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

    return (
      <div className="py-5 px-3  min-w-fit gap-2 flex flex-col items-center justify-center">
      <TagsList threads={threads} />
      <ThreadList threads={threadList}/>
      </div>
    )
}

export default ThreadPage;