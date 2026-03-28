import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const registerUser = createAsyncThunk(
    "/auth/register",
    async (formData) => {
        const response = await axios.post(
            "http://localhost:5000/api/user/register",
            formData,
            {
                withCredentials: true,
            },
        );
        return response.data;
    },
);

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => { })
            .addCase(registerUser.fulfilled, (state) => { })
            .addCase(registerUser.rejected, (state) => { });
    },
});

export default authSlice.reducer;
