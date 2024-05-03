import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./ToggleSlice";
import searchSlice from "./SearchSlice";

const store = configureStore({
    reducer:{
        toggle: toggleSlice,
        search: searchSlice
    }
})

export default store;