import React from "react";
import Button from "./Button";

const App = () => {
  const handleClickAction=()=>{
    console.log("I was clicked")
  }
  return (
    <Button clickAction={handleClickAction}>Click Me</Button>
    // <Button children="Click Me" />
  );
};

export default App;
