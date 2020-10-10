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
  text-shadow: 1px 1px ${props => props.theme.yellow};
  padding: 1% 0;
  width: 100%;
  color: ${props => props.theme.blue};
`
const PokeContainer = styled.div`
  display: flex;
`

const App = () => {
  const [pokeList, setPokeList] = useState("");
  const [poke, setPoke] = useState("bulbasaur");
  const [pokeData, setPokeData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  function selectPoke(selected) {
    setPoke(selected);
  }

  function pageFwd() {
    if (page + 1 < 91) {
      setOffset(offset + 10);
      setPage(page + 1);
    }
  }
  function pageBack() {
    if (page-1 > 0) {
      setOffset(offset - 10);
      setPage(page - 1);
    }
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
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(res => setPokeList(res.data.results))
        .catch(err => alert("+++OUT OF CHEESE+++"));
    }
    getData();
  }, [offset]);


  return (
    <div className="App">
      <Header className="header">Pokédex</Header>
      <PokeContainer>
        <PokeInfo pokeData={pokeData}/>
        <PokeList 
          list={pokeList}
          onclick={selectPoke}
          fwd={pageFwd}
          back={pageBack}
          page={page}
          selected={poke}
        />
      </PokeContainer>
    </div>
  );
}

export default App;
