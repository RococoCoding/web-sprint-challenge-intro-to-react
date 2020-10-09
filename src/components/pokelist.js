import React from "react";
import styled from "styled-components";
const PokeListContainer = styled.div`
  width: 48%;
  border-radius: 5px;
  border: 3px solid black;
  margin: 1px;
`
const PokeName = styled.p`
  text-transform: capitalize;
`

const PokeList = (props) => {
  const {list, onclick} = props;
  if (list) {
    return (
      <PokeListContainer>
        {list.map((el, idx) => {
          return <PokeName key={idx} onClick={()=>onclick(idx+1)}>{el.name}</PokeName>
        })}
      </PokeListContainer>
    )
  } else return <div>Loading...</div> 
}

export default PokeList;