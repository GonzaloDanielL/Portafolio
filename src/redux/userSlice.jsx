import { createSlice } from "@reduxjs/toolkit";

import images from "../data/images.json"

const initialState = {
    urlImages: images.jgya,
    titleModal: "Titulo"
};

export const userSlice = createSlice({
    name: "urls",
    initialState,
    reducers: {
        changeUrls: (state, action) =>{
            state.urlImages = action.payload;
        },

        changeTitle: (state, action) =>{
            state.titleModal = action.payload;
        }
    },
});

export const { changeUrls, changeTitle } = userSlice.actions

export default userSlice.reducer;