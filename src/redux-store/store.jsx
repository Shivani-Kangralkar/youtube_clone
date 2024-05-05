import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./ToggleSlice";
import searchSlice from "./SearchSlice";
import chatSlice from "./ChatSlice";

const store = configureStore({
    reducer:{
        toggle: toggleSlice,
        search: searchSlice,
        chat: chatSlice
    }
})

export default store;