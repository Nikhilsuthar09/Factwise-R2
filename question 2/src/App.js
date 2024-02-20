import React, {userState} from "react" 

  const counter = () => {
    const [value, setValue] = userState(0);
  


  // implement this function to increment the count 
  const incrementCount = () => {
    setValue(value +1);
    
  }
  // implement this function to decrement the count 

  const decrementCount = () => {
    setValue(value -1);
  }
  
  return (
    <div>

      {/* remove the harded coded zero and use state the show the value of count */}
      <div id="value">{value}</div>
      {/*  */}
      <button id="increment" onClick={incrementCount}>incrememt</button>
      
      <button id="decrement" onClick={decrementCount}>decrement</button>
    </div>
  );
};

export default counter;
