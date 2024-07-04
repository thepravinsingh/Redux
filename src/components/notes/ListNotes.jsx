import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../reduxFolder/slices/notesSlice";

const ListNotes = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  return (
    <div>
      {notes.map((data) => {
        return (
          <div>
            <p>{data.id}</p>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <button onClick={() => dispatch(deleteNote(data.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListNotes;
