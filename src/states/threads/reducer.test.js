/**
* test scenario for threadsReducer
*
* - threadReducers function
*  - should return the initial state when given by unknown action
*  - should return the talks when given by RECEIVE_THREAD action
*  - should return the talks with the new talk when given by ADD_THREAD action
*  - should return the talks with the toggled like talk when given by TOGGLE_LIKE_TALK action
*
*/


import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";

describe('threadReducer function', () => {
    it ('should return the initial state when given by unknown action', () => {

        const initialState = [];
        const action = {type: 'UNKNOWN'};

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it ('should return threads when given by RECEIVE_THREAD action', () => {

        const initialState = [];
        const action = {
            type: 'RECEIVE_THREAD',
            payload: {
                threads: [
                   { 
                    id : "thread-1",
                    title : "Thread 1",
                    body : "Thread 1 body",
                    createdAt : "2019-01-01T00:00:00.000Z",
                    ownerId : "user-1",
                    upVotesBy : [],
                    downVotesBy : [],
                    totalComments : 0,
                },
                {
                    id : "thread-2",
                    title : "Thread 2",
                    body : "Thread 2 body",
                    createdAt : "2019-01-01T00:00:00.000Z",
                    ownerId : "user-2",
                    upVotesBy : [],
                    downVotesBy : [],
                    totalComments : 0,
                }
                ]
            }
        }

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threads);
    });

    it ('should return threads when given by ADD_THREAD action', () => {
        const initialState = [
            {
                id : "thread-1",
                title : "Thread 1",
                body : "Thread 1 body",
                category: "general",
                createdAt : "2019-01-01T00:00:00.000Z",
                ownerId : "user-1",
                upVotesBy : [],
                downVotesBy : [],
                totalComments : 0,
            },
        ];

        const action = {
            type: 'ADD_THREAD',
            payload: {
                thread: {
                    id : "thread-2",
                    title : "Thread 2",
                    body : "Thread 2 body",
                    category: "general",
                    createdAt: "2019-01-01T00:00:00.000Z",
                    ownerId : "user-2",
                    upVotesBy : [],
                    downVotesBy : [],
                    totalComments : 0,
                },
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it('should return the threads with the toggled like thread when given by UP_VOTE_THREAD action', () => {
        
        const initialState = [
            {
                id : "thread-1",
                title : "Thread 1",
                body : "Thread 1 body",
                category: "general",
                createdAt: "2019-01-01T00:00:00.000Z",
                ownerId : "user-1",
                upVotesBy : [],
                downVotesBy : [],
                totalComments : 0,
            },
        ];

        const action = {
            type: 'UP_VOTE_THREAD',
            payload : {
                threadId: "thread-1",
                userId: "user-1",

            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
            },
        ]);

        const nextState2 = threadsReducer(nextState, action);

        expect(nextState2).toEqual(initialState);
    });
});