import React from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import CreateNote from "./components/notes/CreateNote";
import ListNotes from "./components/notes/ListNotes";

const App = () => {
  return (
    <div>
      <Child1 />
      <Child2 />
      <br /> <hr /> <br />
      <CreateNote />
      <ListNotes />
    </div>
  );
};

export default App;
