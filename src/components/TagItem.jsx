// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function TagItem ({ text }) {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{text}</span>
    )
}

TagItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TagItem;