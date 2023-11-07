import React from "react";
import Button from "./Button";
import Text from "./Text"

const App = () => {

const data=[
  {id:'a' , text:"text 1"},
  {id:'b' , text:"text 2"},
  {id:'c' , text:"text 3"},
  {id:'d' , text:"text 4"},
  {id:'e' , text:"text 5"},
]

  const handleClickAction=()=>{
    console.log("I was clicked")
  }
  return (
    <>
    {data.map((item)=><Text key={item.id}>{item.text}</Text>)}
    </>
    // <Button data={{a:{b:{c:'d'}}}} clickAction={handleClickAction}>Click Me</Button>
    // // <Button children="Click Me" />
  );
};

export default App;
