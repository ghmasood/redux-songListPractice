import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    reomoveSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

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
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    videos: videSlice.reducer,
  },
});

export { store };

export const { addSong, reomoveSong } = songSlice.actions;
export const { addVideo, removeVideo } = videSlice.actions;
