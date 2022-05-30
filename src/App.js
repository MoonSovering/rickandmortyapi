import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";





function App() {

  const [characters, setcharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fecthCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setcharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fecthCharacters(initialUrl);
  }, [])


  return (
    <Navbar brand="Home" />
  );
}

export default App;
