import { createSlice } from "@reduxjs/toolkit";
import mockLoginApi from "../app/fakeApi";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        status: "idle",
    },

    reducers: {
        LOGIN_INIT: (state) => {
            state.status = "pending";
        },
        LOGIN_FAIL: (state, response) => {
            state.status = "fail";
            state.response = response.payload;
        },
        LOGIN_SUCCESS: (state, response) => {
            state.status = "success";
            state.response = response.payload;
        },
    },
});

export const { LOGIN_INIT, LOGIN_FAIL, LOGIN_SUCCESS } = loginSlice.actions;

export const loginThunk = (username, password) => (dispatch) => {
    dispatch(LOGIN_INIT());
    mockLoginApi({ username, password })
        .then((response) => {
            dispatch(LOGIN_SUCCESS(response.data));
        })
        .catch((error) => {
            dispatch(LOGIN_FAIL(error));
        });
};

export default loginSlice.reducer;
