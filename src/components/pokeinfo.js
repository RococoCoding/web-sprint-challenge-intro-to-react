// Write your Character component here
import React from "react"
import styled from "styled-components";

const PokeInfoContainer = styled.div`
  width: 49.5%;
  border: 3px solid black;
  border-radius: 5px;
  margin-top: 1px;
`
const Name = styled.h2`
  text-transform: capitalize;
  font-size: 1.4rem;
  margin-top: 1%;
  font-weight: 700;
`
const Stats = styled.div`
  padding-bottom: 5%;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 600;
`

const PokeInfo = (props) => {
  const {pokeData} = props;
  if (pokeData) {
    return (
      <PokeInfoContainer>
        <Name>{pokeData.name}</Name>
        <img src={pokeData.sprites.front_default} alt={pokeData.name + " sprite"}/>
        <img src={pokeData.sprites.back_default} alt={pokeData.name + " back sprite"}/>
        <Stats>
          <p>Height: {pokeData.height}</p>
          <p>Weight: {pokeData.weight}</p>
          <p>Types: {pokeData.types.map((el, idx, arr) => {
            if (idx === arr.length-1) { //last element doesn't need a comma after
              return <span key={idx}>{el.type.name}</span>
            }
            return <span key={idx}>{el.type.name}, </span>
          })}</p>
        </Stats>
      </PokeInfoContainer>
    )
  } else return <div>Loading...</div>
}

export default PokeInfo