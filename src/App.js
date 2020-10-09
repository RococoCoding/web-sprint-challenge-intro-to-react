import React, {useState, useEffect} from 'react';
import './App.css';
import PokeInfo from "./components/pokeinfo";
import PokeList from "./components/pokelist";
import axios from "axios";
import styled from "styled-components;"

const Header = styled.div`
  background-color: ${props => props.theme.red};
`

const App = () => {
  const [pokeList, setPokeList] = useState("");
  const [poke, setPoke] = useState("bulbasaur");
  const [pokeData, setPokeData] = useState(null);

  function selectPoke(selected) {
    setPoke(selected);
  }

  useEffect(()=>{
    const getData = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(res => setPokeData(res.data))
        .catch(err => alert("+++OUT OF CHEESE+++"))
    }
    getData();
  }, [poke]);

  useEffect(()=>{
    const getData = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3`)
        .then(res => setPokeList(res.data.results))
        .catch(err => alert("+++OUT OF CHEESE+++"));
    }
    getData();
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Pokédex</h1>
      <PokeInfo pokeData={pokeData}/>
      <PokeList 
        list={pokeList}
        onclick={selectPoke}
      />
    </div>
  );
}

export default App;
