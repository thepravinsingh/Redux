import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../reduxFolder/slices/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        title: title,
        desc: desc,
        id: nanoid(5),
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description here"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateNote;
