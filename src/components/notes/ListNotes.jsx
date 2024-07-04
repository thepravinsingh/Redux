import React from "react";
import { useSelector } from "react-redux";

const ListNotes = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  return (
    <div>
      {notes.map((data) => {
        return (
          <div>
            <p>{data.id}</p>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListNotes;
