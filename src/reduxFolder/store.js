import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import notesReducer from "./slices/notesSlice";

export default configureStore({
  reducer: {
    messageReducer: messageSlice,
    notesReducer,
  },
});
