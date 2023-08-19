// eslint-disable-next-line no-unused-vars
import React from "react";
import TagItem from "./TagItem";
import PropTypes from "prop-types";

function TagsList({ threads = [] }) {
  return (
    <div className="py-5 px-3  min-w-fit gap-2">
      {
        threads.map((thread, index) => (
            <TagItem key={index} text={thread.category} />
        ))
      }
    </div>
  );
}

TagsList.propTypes = {
  threads: PropTypes.array.isRequired,
}

export default TagsList;