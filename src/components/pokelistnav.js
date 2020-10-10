import React from "react";
import styled from "styled-components"
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  font-size: .8rem;
  font-weight: 600;
` 

const Page = styled.p`
  padding-top: 2%;
`

const Button = styled.div`
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.blue};
  width: min-content;
  padding: 1%;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`

const Nav = (props) => {
  const {fwd, back, page} = props;
  return (
    <ButtonContainer>
      <Button onClick={()=>back()}>Back</Button>
      <Page>{page}</Page>
      <Button onClick={()=>fwd()}>Next</Button>
    </ButtonContainer>
  )
}

export default Nav;