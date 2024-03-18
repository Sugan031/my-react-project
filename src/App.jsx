import Card from "./Card"
import Button from "./Button/Button";
import Student from "./Student";
import UserGreetings from "./UserGreetings";
import List from "./List";

import React from "react";

import MyComponent from "./MyComponent";
import ColorPicker from "./ColorPicker";
function App() {
  // const fruits = [{id :1,name : 'Apple', calories : 95},
  // {id :2,name : 'Orange', calories :80},
  // {id :3,name : 'Banana', calories : 70},
  // {id :4,name : 'Kiwi', calories:60}];
return(
 <>
  {/* <Card/> */}
  {/* <Button/> */}
  {/* <Student name="SpongeBob" age={30} isStudent ={true}/>
  <Student name="Patrick" age={42} isStudent ={false}/>
  <Student name="Squidward" age={50} isStudent ={false}/>
  <Student name="Sandy" age={23} isStudent ={true}/>
  <Student></Student> */}

  {/* <UserGreetings isLoggedIn={false} username = "Mark"></UserGreetings> */}
{/* 
   <List items={fruits} category="Fruits"/> */}

  {/* <MyComponent></MyComponent> */}
  <ColorPicker/>
 </>
);


  // return (
  //   <>
  //       <Header></Header>
  //       <Food></Food>
  //       <Footer></Footer>
  //    </>
  // );
}

export default App
