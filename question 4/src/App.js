import React, {useState} from 'react'
import "./App.css";
function App() {
  // implemnt this function and create respective states that are required to you to hide and show the paragrah tag
  const [showParagraph, setShowParagraph]= useState(false);
  const onClickHandler = () => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  };

  return (
    <div className="App">
      <a href="/" onClick={onClickHandler}>
        want to buy a new car?
      </a>

      {/* the below paragrah showed be conditionaly rendered based on how many times the user the has clicked on above link */}
      {showParagraph && <p>call +11 22 33 44 now!</p>}
    </div>
  );
}

export default App;
