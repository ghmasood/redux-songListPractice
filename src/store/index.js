import { configureStore } from "@reduxjs/toolkit";
import { addSong, reomoveSong, songReducer } from "./slices/songsSlice";
import { addVideo, removeVideo, videoReducer } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer,
    videos: videoReducer,
  },
});

export { store, addVideo, removeVideo, addSong, reomoveSong, reset };
