import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const videSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideo(state, action) {
      state.push(action.payload);
    },
    removeVideo(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addVideo, removeVideo } = videSlice.actions;
export const videoReducer = videSlice.reducer;
