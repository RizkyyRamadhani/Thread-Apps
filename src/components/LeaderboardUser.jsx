// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function LeaderboardUser ({user, score}) {
    return (
        <div className="flex flex-row justify-between items-center w-full px-5 py-3 border-b border-gray-200">
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm font-bold text-gray-500">{user.name}</span>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                    <span className="text-sm font-bold text-gray-500">{score}</span>
                </div>
            </div>
        </div>
    )
}

LeaderboardUser.propTypes = {
    user: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
}
export default LeaderboardUser;