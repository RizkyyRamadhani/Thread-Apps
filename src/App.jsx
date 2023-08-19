// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";

import ThreadPage from "./pages/ThreadPage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
  dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
      <Loading/>
      <div>
      <Routes>
        <Route path="/*" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      </div>
      </>
  
    );
  }

  return (
    <>
    <Loading/>
    <div>
    <Navbar authUser={authUser} logout={onLogout}/>
    <Routes>
      
    <Route path="/" element={<ThreadPage/>}/>
    <Route path="/threads" element={<CreatePage/>}/>
    <Route path="/leaderboard" element={<LeaderboardPage/>}/>
    <Route path="/threads/:id" element = {<DetailPage />}/>
    </Routes>
    </div>
  </>
  )
}

export default App;
