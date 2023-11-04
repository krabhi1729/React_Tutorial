import React from "react";
import ReactDOM from "react-dom/client";

const isMorning = true;
const morningText = "Good Morning";
const afternoonText = "Good Afternoon";
const handleClick=(state)=> {
 return console.log("Clicked",state);
}

const morningElement = (
  <>
    {morningText}
    <span onClick={()=>handleClick(morningText)}>Its 8 am</span>
  </>
);
const afternoonElement = (
  <>
    {afternoonText}
    <span >Its 8 pm</span>
  </>
);
const div = <div>{isMorning ? morningElement : afternoonElement}</div>;
// console.log(div);
function GreetingComponent() {
  return <div>{isMorning ? morningElement : afternoonElement}</div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GreetingComponent />);
