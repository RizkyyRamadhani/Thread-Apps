/**
* test scenario for leaderboardReducer
*
* - leaderboardsReducers function
*  - should return the initial state when given by unknown action
*  - should return the talks when given by RECEIVE_LEADERBOARDS action
*
*/

import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";

describe('leaderboardsReducer function', () => {
    it ('should return the initial state when given by unknown action', () => {

        const initialState = [];
        const action = {type: 'UNKNOWN'};

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it ('should return the talks when given by RECEIVE_LEADERBOARDS action', () => {

        const initialState = [];
        const action = {
            type : 'RECEIVE_LEADERBOARDS',
            payload: {
                leaderboards: [
                    {
                        user: {
                        id : "user-1",
                        name : "User 1",
                        email: "testing@example.com",
                        avatar : "https://www.gravatar.com/avatar/1", 
                        },
                        score: 10,
                    },
                    {
                        user: {
                        id : "user-2",
                        name : "User 2",
                        email: "halo@example.com",
                        avatar : "https://www.gravatar.com/avatar/2",
                        },
                        score: 20,
                    },
                ],
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.leaderboards);
    });
});