// Write your Character component here
import React from "react"

const PokeInfo = (props) => {
  const {pokeData} = props;
  if (pokeData) {
    console.log(pokeData)
    return (
      <div className="info-container">
        <p className="name">{pokeData.name}</p>
        <img className="sprite" src={pokeData.sprites.front_default} alt={pokeData.name + " sprite"}/>
        <div className="stats">
          <p>Height: {pokeData.height}</p>
          <p>Weight: {pokeData.weight}</p>
          <p>Types: {pokeData.types.map((el, idx) => {
            return <span key={idx}>{el.type.name} </span>
          })}</p>
        </div>
      </div>
    )
  } else return <div>Loading...</div>
}

export default PokeInfo