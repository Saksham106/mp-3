import { useState } from "react";
import styled from "styled-components";
import { StyledH3 } from "../StyledComponents";


const CalculatorInput = styled.input`
  width: 80%;
  padding: 1vw;
  margin: 1vw;
  font-size: calc(8px + 1vw);
  text-align: center;
`;

const CalculatorButton = styled.button`
  padding: 1vw 2vw;
  margin: 1vw;
  font-size: calc(8px + 1vw);
  background: #8b0000;
  color: white;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;

  &:hover {
    background: #a52a2a;
  }
`;

const OutputH4 = styled.h4`
  font-size: calc(10px + 1vw);
  margin-top: 1vw;
  padding: 1vw;
  min-height: 2vw;
  text-align: center;
  width: 50%;
  border-radius: 0.5vw;
  background: #ffc6c6;
`;

export function Calculator() {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [answer, setAnswer] = useState(0);

    function mySum() {
        setAnswer(first + second);
    }

    function mySubtraction() {
        setAnswer(first - second);
    }

    function myMultiplication() {
        setAnswer(first * second);
    }

    function myDivision() {
        setAnswer(first / second);
    }

    function myPower() {
        let final = first;
        for (let i = 1; i < second; i++) {
            final *= first;
        }
        setAnswer(final);
    }

    function myClear() {
        setFirst(0);
        setSecond(0);
        setAnswer(0);
    }

    return (
        <>
            <StyledH3>JavaScript Calculator</StyledH3>
                <label htmlFor="first-number">First Number:</label>
                 <CalculatorInput type="text" id="first-number" value={first} onChange={(e) => setFirst(Number(e.target.value))}></CalculatorInput>
    
                <label htmlFor="second-number">Second Number:</label>
                <CalculatorInput type="text" id="second-number" value={second} onChange={(e) => setSecond(Number(e.target.value))}></CalculatorInput>
    
                <CalculatorButton>
                    <button onClick={mySum}>+</button>
                    <button onClick={mySubtraction}>-</button>
                    <button onClick={myMultiplication}>*</button>
                    <button onClick={myDivision}>/</button>
                    <button onClick={myPower}>**</button>
                    <button onClick={myClear}>Clear</button>
                </CalculatorButton>
    
                <OutputH4 style={{ color: answer < 0 ? "red" : "white" }}>{answer}</OutputH4>
        </>
    );
}