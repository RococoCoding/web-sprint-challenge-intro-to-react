import React from "react";
import styled from "styled-components";

const PokeName = styled.p`
  text-transform: capitalize;
`

const PokeList = (props) => {
  const {list, onclick} = props;
  if (list) {
    return (
      <div className="list">
        {list.map((el, idx) => {
          return <PokeName key={idx} onClick={()=>onclick(idx+1)}>{el.name}</PokeName>
        })}
      </div>
    )
  } else return <div>Loading...</div> 
}

export default PokeList;