import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

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
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
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
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
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
