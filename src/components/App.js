import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // const [stateVariable, setStateVariable] = useState()

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const  [isDarkMode, setDarkMode] = useState();
  const appClass = isDarkMode? "App dark" : "App light"
  // {isDarkMode ?  "Dark Mode"  : "Light Mode"} //The actual functionality of changing our app's theme is handled in CSS, so all you have to do is set up the code to update the className of the div based on your state variable

  //DMT:update state when the button is clicked. look at onclick //DMT: You will also need to add an event handler to the dark mode button  <button
function handleClick(){
setDarkMode (!isDarkMode)
}
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}> {isDarkMode ?  "Light Mode"  : "Dark Mode"}</button>  
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
