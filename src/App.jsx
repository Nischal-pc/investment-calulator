import Header from "./components/header";
import UserInput from "./components/userInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 199,
    annualInvestment: 44,
    expectedReturn: 5,
    duration: 2,
  });
  const isInputValidate = userInput.duration >= 1;
  const handleChange = (inputIdentifier, value) => {
    setUserInput((prevuserInput) => {
      return {
        ...prevuserInput,
        [inputIdentifier]: value,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValidate && <p className="center">Year must be great than 0</p>}
      {isInputValidate && <Result input={userInput} />}
    </>
  );
}

export default App;
