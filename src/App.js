import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [yob, setYearOfBirth] = useState("")
  let year =2022
  const [status,setStatus] = useState("")

  const eligibility = ()=>{

    let age = year-yob;
    if (age>=18){
      setStatus("Your eligible to vote.")
    }else{
      setStatus("Your ineligible to vote.")
    }
  }

  const clear = () =>{
    setYearOfBirth("")
    setStatus("")
  }

  return (
    <div className="App">
      
        <label>Enter your year of birth:
        <input type="text" value={yob} onChange={(e) => setYearOfBirth(e.target.value)}/>
        </label>
        <button onClick={eligibility}>Submit</button>
        <button onClick={clear}>Reset</button>

        <h1>{status}</h1>

      

    </div>
  );
}

export default App;
