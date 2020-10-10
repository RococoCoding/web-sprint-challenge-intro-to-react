import React from "react";
import styled from "styled-components";
import "./pokelist.css";
import Nav from "./pokelistnav";

const PokeListContainer = styled.div`
  width: 49.5%;
  border-radius: 5px;
  border: 3px solid black;
  margin-top: 1px;
  height: max-content;
`
const Entry = styled.div` 
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
`
const Pokeball = styled.img`
  width: 17%;
  background-color: ${props => props.theme.red};
  padding: 2% 3%;
  background-clip:  border-box;
 `

const PokeNum = styled.div`
  width: max-content;
  padding: 6% 2% 5% 8%;
  &:hover {
    cursor: pointer;
  }
`
const PokeName = styled.div`
  text-transform: capitalize;
  padding: 6% 2%;
  text-align: center;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const PokeList = (props) => {
  const {list, selectPoke, fwd, back, page, selected} = props;
  if (list) {
    return (
      <PokeListContainer>
        <Nav
          fwd={fwd}
          back={back}
          page={page}
        />
        {list.map((el, idx) => {
          const urlArray = el.url.split("/"); //getting id number from url since it's not provided in the list api 
          let num = "00" + urlArray[6];
          let strNum = num.slice(-3);
          return (
            <Entry key={"div" + idx} >
              <Pokeball src="pokeball.png"></Pokeball>
              <PokeNum key={idx} onClick={()=>selectPoke(el.name)} className={el.name === selected ? "selected": ""}>{strNum}</PokeNum>
              <PokeName key={el.name} onClick={()=>selectPoke(el.name)} className={el.name === selected ? "selected-name": ""}>{el.name}</PokeName>
            </Entry>
          )
        })}
      </PokeListContainer>
    )
  } else return <div>Loading...</div> 
}

export default PokeList;