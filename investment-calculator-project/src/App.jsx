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

  function handleChange(inputIdentifier, newValue) {
    // Function to handle input changes
    setUserInput((prevState) => {
      // Update the state with the new value for the specific input
      // Using the inputIdentifier to update the specific field in the state
      return {
        ...prevState, // Spread the previous state
        [inputIdentifier]: newValue, // Update the specific field with the new value
      };
    });
    // console.log(`Updated ${inputIdentifier} to ${newValue}`);
    
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
