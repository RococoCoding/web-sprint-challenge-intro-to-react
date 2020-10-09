// Write your Character component here
import React from "react"
import styled from "styled-components";

const PokeInfoContainer = styled.div`
  width: 48%;
`

const PokeInfo = (props) => {
  const {pokeData} = props;
  if (pokeData) {
    console.log(pokeData)
    return (
      <PokeInfoContainer>
        <p className="name">{pokeData.name}</p>
        <img className="sprite" src={pokeData.sprites.front_default} alt={pokeData.name + " sprite"}/>
        <div className="stats">
          <p>Height: {pokeData.height}</p>
          <p>Weight: {pokeData.weight}</p>
          <p>Types: {pokeData.types.map((el, idx) => {
            return <span key={idx}>{el.type.name} </span>
          })}</p>
        </div>
      </PokeInfoContainer>
    )
  } else return <div>Loading...</div>
}

export default PokeInfo