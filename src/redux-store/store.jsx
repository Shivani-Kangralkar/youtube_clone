import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./ToggleSlice";
import searchSlice from "./SearchSlice";
import chatSlice from "./ChatSlice";
import VideoListSlice from "./VideoListSlice";

const store = configureStore({
    reducer:{
        toggle: toggleSlice,
        search: searchSlice,
        chat: chatSlice,
        videoLists: VideoListSlice
    }
})

export default store;