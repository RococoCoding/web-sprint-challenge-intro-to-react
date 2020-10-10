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
  const [poke, setPoke] = useState("bulbasaur"); //name only of selected pokemon
  const [pokeData, setPokeData] = useState(null); //selected pokemon's data
  const [offset, setOffset] = useState(0); //offset for paging through api
  const [page, setPage] = useState(1); //current page number

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
        .then(res => setPokeList(res.data.results.filter(el => {
          let id = el.url.split("/");
            if (Number(id[6]) < 900) { //no pokemon between 893 and 1000?? pokemon after 1000 have no back sprites so img is broken, also need to change slice in pokelist.js, mapping through the list to get id #
              return true;
            }
        })))
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
          selectPoke={selectPoke}
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
