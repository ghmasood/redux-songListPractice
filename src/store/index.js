import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    reomoveSong(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

export { store };

export const { addSong } = songSlice.actions;
