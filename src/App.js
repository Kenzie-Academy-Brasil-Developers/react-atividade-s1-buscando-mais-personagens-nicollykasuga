import { useState } from "react";
import { useEffect } from "react";
import { Characters } from "./components/Characters/index";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );

  useEffect(() => {
    fetch(next)
      .then(response => response.json())
      .then(response => {
        setCharacterList(
          [...characterList, ...response.results],
          setNext(response.info.next)
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, [next]);
  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList}></Characters>
      </header>
    </div>
  );
}

export default App;
