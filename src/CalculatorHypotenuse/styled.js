import styled from "styled-components";

export const CalculatorContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
  color: white;
  background-color: white;

  @media (max-width: 667px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    background-color: white;
  }
`;

export const ContainerTheory = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  color: white;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    color: white;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    margin-top: 5%;
    position: relative;
    right: 10%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  color: #1c86ee;
  text-align: justify;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;

  p {
    font-size: 15px;
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    color: #1c86ee;
    text-align: justify;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;

    p {
      font-size: 15px;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: auto;
  color: white;
  align-items: flex-end;
  position: relative;
  top: 10%;
  right: 7%;

  img {
    width: 60%;
    height: 55vh;
  }

  @media (max-width: 667px) {
    display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  color: white;
  align-items: flex-end;
  margin-top: 20%;
  margin-bottom: 20%;


  img {
    width: 95%;
    height: 40vh;
    position: relative;
    left: 20%;
  }

  }
`;

export const ContainerCalculate = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: white;
  color: #1c86ee;
  box-shadow: 0 0 30px #aaaaaa;
  border-radius: 20px;
  margin-top: 3%;
  padding: 2%;
  position: relative;
  left: 10%;

  input {
    width: 100%;
    color: #1c86ee;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    background-color: white;
    color: #1c86ee;
    box-shadow: 0 0 30px #aaaaaa;
    border-radius: 20px;
    margin-top: 3%;
    padding: 5%;

    input {
      width: 100%;
      color: #1c86ee;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
      text-align: center;
    }
  }
`;

export const OppositeLeg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export const AdjacentLeg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 5%;
  margin-top: 5%;
  justify-content: center;

  button {
    &:hover {
      transform: scale(1.07);
      border: none;
    }
  }

  @media (max-width: 667px) {
    display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 5%;
  margin-top: 5%;
  justify-content: center;

  button {
    &:hover {
      transform: scale(1.07);
      border: none;
    }
  }
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: aquamarine;
  border-radius: 10px;
  color: #1c86ee;
  font-weight: bold;
  margin-top: 5%;
  opacity: 80%;

  @media (max-width: 667px) {
    display: flex;
  flex-direction:column;
  width: 100%;
  height: 20vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: aquamarine;
  border-radius: 10px;
  color: #1c86ee;
  font-weight: bold;
  margin-top: 10%;
  opacity: 80%;

  }
`;
