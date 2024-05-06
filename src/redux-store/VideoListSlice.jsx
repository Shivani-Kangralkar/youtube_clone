import { createSlice, isPending } from "@reduxjs/toolkit"

const videoListSlice = createSlice({
    name: 'videoList',
    initialState: {
        videoLists: null,
        isPending: false,
        error: null
    },
    reducers:{
        initialRender:(state,action) => {
            state.videoLists = action.payload,
            state.error = null
        },
        searchByKeyword: (state,action) => {
            state.videoLists = action.payload,
            state.error = null
        },
        loadingMethod:(state,action) => {
            state.isPending = true,
            state.videoLists = null,
            state.error = null

        },
        errorMethod: (state,action) => {
          state.videoLists = [],
          state.error = action.payload
        }
    }

})

export const { initialRender,searchByKeyword, loadingMethod, errorMethod} = videoListSlice.actions
export default videoListSlice.reducer