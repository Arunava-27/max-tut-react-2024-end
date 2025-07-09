import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1 && userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0;

  function handleChange(inputIdentifier, newValue) {
    // Function to handle input changes
    setUserInput((prevState) => {
      // Update the state with the new value for the specific input
      // Using the inputIdentifier to update the specific field in the state
      return {
        ...prevState, // Spread the previous state
        [inputIdentifier]: +newValue, // Update the specific field with the new value
      };
    });
    // console.log(`Updated ${inputIdentifier} to ${newValue}`);
    
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      {!inputIsValid && (
        <p className="center">
          <strong>Please enter valid values for all fields.</strong>
          <br />
          Duration must be at least 1 year, and all other values must be greater than 0.
        </p>
      )}
      {
        inputIsValid && <Results userInput={userInput} />
      }
    </>
  )
}

export default App
