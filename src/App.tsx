import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import { PersonList } from "./components/PersonList";
import Button from "./components/Button";
const nameList = [
  { fName: "Josh", id: 1 },
  { fName: "Mark", id: 2 },
];

function App() {
  return (
    <div className="App">
      {/* <Hello name="TYPESCRIPT" />
      <PersonList names={nameList} /> */}
      <Button
        handleClick={(event, id) => {
          console.log("Booked", event, id);
        }}
      ></Button>
    </div>
  );
}

export default App;
