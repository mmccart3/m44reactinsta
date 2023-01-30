import './App.css';
import Box from "./components/box";
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState("Harry");

  return (
    <div className="App">
      <h1>{user}</h1>
      <Box name={user} />
      <Box name="George"/>
      <Box name="Hermione"/>
      <Box name="Mafalda"/>
      <Box name="Percy"/>
    </div>
  );
}

export default App;
