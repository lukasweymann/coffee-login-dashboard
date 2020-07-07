import React, { useState } from 'react';

import './App.css';

function App() {
const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);

function handleUsername(event){
  setUsername(event.target.value);
}
function handlePassword(event){
  setPassword(event.target.value);
}


  return (
    <div className="App">
    <img className="login-logo" src={require("../src/images/welovecaffeine-logo.png")} alt="company's logo"/>
     <form >
     <input onChange={handleUsername} type="text" placeholder="Username" name="username"/>
 
     <input onChange={handlePassword} type="password" placeholder="Password" name="password"/>
     <button  type="submit">LOG IN</button>
     </form>
    </div>

  );
} 

export default App;
