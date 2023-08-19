// eslint-disable-next-line no-unused-vars
import React from "react";
import ThreadInput from "../components/ThreadInput";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";

function CreatePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onAddThread = ({ title, category, body }) => {
        dispatch(asyncAddThread({ title, category, body }));
        navigate('/');
    };

  return (
    <div>
      <h1 className="text-2xl font-bold my-5 text-center">Create New Thread</h1>
      <ThreadInput threads={onAddThread} />
    </div>
  );
}



export default CreatePage;
