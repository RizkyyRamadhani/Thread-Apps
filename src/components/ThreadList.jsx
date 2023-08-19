// eslint-disable-next-line no-unused-vars
import React from "react";
import ThreadItem from "./ThreadItem";
import PropTypes from "prop-types";

function ThreadsList ({threads = []}) {
    return (
        <div>
        {threads.map((thread) => (
            <ThreadItem key={thread.id} {...thread} />
        ))}
        </div>
    );
}

ThreadsList.propTypes = {
    threads: PropTypes.array.isRequired,
}

export default ThreadsList;
