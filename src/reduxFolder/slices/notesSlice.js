import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notes: [
      //   {
      //     title: "hello",
      //     desc: "this is des",
      //     id: "1",
      //   },
    ],
  },
  reducers: {
    createNote: (state, action) => {
      //   state.notes = [...state.notes, action.payload];
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export default notesSlice.reducer;

export const { createNote, deleteNote } = notesSlice.actions;
