/**
 * skenario test
 *
 * - asyncReceiveThreadDetails thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, it, vi, expect } from "vitest";
import api from "../../utils/api";
import { asyncReceiveThreadDetail, receiveDetailThreadActionCreator } from "./action";
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const fakeThreadDetailResponse = [
    {
    id: 1,
    title: 'title',
    body: 'ini adalah body',
    category: 'category',
    createdAt: '2020-01-01T00:00:00.000Z',
    ownerId: 'user-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
    },
];

const fakeErrorResponse = new Error ('Ups, Error');

describe('asyncReceiveThreadDetails thunk', () => {
    beforeEach(() => {
        api._getThreadDetail = api.getThreadDetail;
    });

    afterEach(() => {
        api.getThreadDetail = api._getThreadDetail;
    });

    delete api._getThreadDetail;

    it('should dispatch action correctly when data fetching success', async () => {
        // arrang
        // stub implementation
        api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncReceiveThreadDetail()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveDetailThreadActionCreator(fakeThreadDetailResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());

    });

    it ('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

        // mock dispatch
        const dispatch = vi.fn();

        window.alert = vi.fn();

        // action
        await asyncReceiveThreadDetail()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
});