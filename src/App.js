import React, {useState, useEffect} from 'react';
import './App.css';
import PokeInfo from "./components/pokeinfo";
import PokeList from "./components/pokelist";
import axios from "axios";
import styled from "styled-components"

const Header = styled.h1`
  background-color: ${props => props.theme.red};
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  text-shadow: 1px 1px ${props => props.theme.white};
  padding: 1% 0;
`
const PokeContainer = styled.div`
  display:flex;
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
      <Header className="header">Pokédex</Header>
      <PokeContainer>
        <PokeInfo pokeData={pokeData}/>
        <PokeList 
          list={pokeList}
          onclick={selectPoke}
        />
      </PokeContainer>
    </div>
  );
}

export default App;
