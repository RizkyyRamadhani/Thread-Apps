/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreadsAndLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, it, vi , expect} from "vitest";
import api from "../../utils/api";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "./action";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadActionCreator } from "../threads/action";
import { receiveLeaderboardsActionCreator } from "../leaderboards/action";

const fakeThreadResponse = [
    {
        id: "thread-1",
        title: "Thread 1",
        category: "category-1",
        createdAt: "2020-01-01T00:00:00.000Z",
        ownerId: "user-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
    },
];

const fakeUsersResponse = [
    {
        id: "user-1",
        name: "User 1",
        email : "rizky@example.com",
        avatar: "https://www.gravatar.com/avatar/1",
    },
];

const fakeLeaderboardsResponse = [
    {
        user: {
            id: "user-1",
            name: "User 1",
            email : "testing1@example.com",
            avatar: "https://www.gravatar.com/avatar/1",
        },
        score : 10,
    },
];

const fakeErrorResponse = new Error ('ups, something went wrong');

describe ('asyncPopulateUsersAndThreadsAndLeaderboards thunk', () => {

    beforeEach(() => {
        api._getAllUsers = api.getAllUsers;
        api._getAllThreads = api.getAllThreads;
        api._getAllLeaderboards = api.getAllLeaderboards;
    });

    afterEach(() => {
        api.getAllUsers = api._getAllUsers;
        api.getAllThreads = api._getAllThreads;
        api.getAllLeaderboards = api._getAllLeaderboards;

        delete api._getAllUsers;
        delete api._getAllThreads;
    });

    it ('should dispatch action correctly when data fetching success', async () => {
         // arrange
    // stub implementation
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadResponse);
        api.getAllLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncPopulateUsersAndThreadsAndLeaderboards()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveThreadActionCreator(fakeThreadResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    });

    it ('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getAllUsers = () => Promise.reject(fakeErrorResponse);
        api.getAllTalks = () => Promise.reject(fakeErrorResponse);
        api.getAllLeaderboards = () => Promise.reject(fakeErrorResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // mock alert
        window.alert = vi.fn();

        // action
        await asyncPopulateUsersAndThreadsAndLeaderboards()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);

    });
});