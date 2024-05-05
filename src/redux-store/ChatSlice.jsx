import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT_MESSAGE_LIMIT } from "../constants/info";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // after 15 messages , later 1 message is removed from top.
      state.messages.splice(OFFSET_LIVECHAT_MESSAGE_LIMIT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
