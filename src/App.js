import React from "react";
import CalculatorHypotenuse from "./CalculatorHypotenuse/CalculatorHypotenuse"
import styled from "styled-components"


const Header = styled.div`
width: 100%;
height: 10vh;
display: flex;
flex-direction: column;
background-image: linear-gradient(blueviolet, cyan);
color: white;
justify-items: center;
justify-content: center;
align-content: center;
align-items: center;
font-size: 15px;

@media (max-width: 667px) {
  width: 100%;
height: 10vh;
display: flex;
flex-direction: column;
background-image: linear-gradient(blueviolet, cyan);
color: white;
justify-items: center;
justify-content: center;
align-content: center;
align-items: center;
font-size: 10px;

}


`
const ContainerApp = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;

`
const Footer = styled.div`
width: 100%;
height: 10vh;
display: flex;
/* flex-direction: column;
background-image: linear-gradient(cyan, blueviolet); */
justify-items: center;
justify-content: center;
align-content: center;
align-items: center;
color: #1C86EE;
font-weight: bold;
font-size: 18px;
border-top: 1px solid #1C86EE;
`

const App = () => {

  
  return (
    <ContainerApp>
      <Header>
      <h1>Calculadora | Teorema de Pitágoras</h1>
      </Header>
     <CalculatorHypotenuse/>
     <Footer>Suzana P. Hessel © 2021</Footer>
    </ContainerApp>
  );
};
export default App;
