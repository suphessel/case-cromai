import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import pythagoras from "../assets/pythagoras.png";
import { CalculatorContainer, ContainerTheory, ContainerText, Title, Image, ContainerCalculate, OppositeLeg, AdjacentLeg, ContainerButton, Result} from "./styled";

const CalculatorHypotenuse = () => {
  const [oppositeLeg, setOppositeLeg] = useState();
  const [adjacentLeg, setAdjacentLeg] = useState();
  const [result, setResult] = useState();
  const [hypo, setHypo] = useState();
  const [resultOppositeLeg, setResultOppositeLeg] = useState();
  const [resultAdjacentLeg, setResultAdjacentLeg] = useState();

  const onClickHypotenuse = () => {
    const hypotenuse = Math.sqrt(
      Math.pow(oppositeLeg, 2) + Math.pow(adjacentLeg, 2)
    )
      .toFixed(2)
      .replace(".", ",");
    setResult(hypotenuse);

    if (oppositeLeg === 0 && adjacentLeg === 0) {
      alert("Preencha os campos com números maiores que 0 ");
      return;
    }
  };

  const onClickOppositeLeg = () => {
    const leg = Math.sqrt(Math.pow(hypo, 2) + Math.pow(adjacentLeg, 2)).toFixed(
      2
    );
    setResultOppositeLeg(leg);

    if (hypo === 0 && adjacentLeg === 0) {
      alert("Preencha os campos com números maiores que 0 ");
      return;
    }
  };

  const onClickAdjacentLeg = () => {
    const leg = Math.sqrt(Math.pow(hypo, 2) + Math.pow(oppositeLeg, 2)).toFixed(
      2
    );
    setResultAdjacentLeg(leg);
    if (hypo === 0 && adjacentLeg === 0) {
      alert("Preencha os campos com números maiores que 0 ");
      return;
    }
  };

  const clearInputs = () => {
    setOppositeLeg("");
    setAdjacentLeg("");
    setHypo("");
    setResult("");
    setResultOppositeLeg("");
    setResultAdjacentLeg("");
  };

  return (
    <CalculatorContainer>
      <ContainerTheory>
      <ContainerCalculate>
        <ContainerText>
      <p>
          O teorema de Pitágoras relaciona as medidas dos lados de um triângulo
          retângulo da seguinte maneira: 
          Em um triângulo retângulo, o quadrado
          da hipotenusa é igual à soma dos quadrados dos catetos.
          Observe a seguinte fórmula: c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>, onde c = hipotenusa, a e b = catetos
        </p>
      <p>Insira os valores dos catetos e descubra o valor da hipotenusa.</p>
      </ContainerText>
          <OppositeLeg>
      <p>Cateto Oposto = </p>
        <TextField
          placeholder=" valor cateto oposto"
          value={oppositeLeg}
          onChange={(event) => setOppositeLeg(event.target.value)}
          type="number"
        />
        </OppositeLeg>
        <AdjacentLeg>
        <p>Cateto Adjacente = </p>
        <TextField
          placeholder="valor cateto adjacente"
          value={adjacentLeg}
          onChange={(event) => setAdjacentLeg(event.target.value)}
          type="number"
        />
        </AdjacentLeg>
        <ContainerButton>
        <Button
          variant="contained"  color="primary"
          onClick={() => {
            onClickHypotenuse();
            onClickOppositeLeg();
            onClickAdjacentLeg();
          }}
        >
          Calcular
        </Button>
        <Button variant="outlined" color="inherit" onClick={clearInputs}>
          Limpar
        </Button>
        </ContainerButton>
        <Result>
        <p>Hipotenusa = </p>
        <TextField
          placeholder="resultado hipotenusa"
          onChange={(e) => setAdjacentLeg(e.target.value)}
          value={hypo > 0 ? hypo : result}
        />
        </Result>
      </ContainerCalculate>
      <Image>
      <img src={pythagoras} alt="pythagoras" />
        </Image>
      </ContainerTheory>
    </CalculatorContainer>
  );
};
export default CalculatorHypotenuse;
