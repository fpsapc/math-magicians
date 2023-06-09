import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [currentState, setState] = useState({ total: 0, next: null, operation: null });

  const mouseClick = (e) => {
    setState((currentState) => calculate(currentState, e.target.textContent));
  };
  return (
    <>
      <div className="calcPage">
        <h2 className="calcText">Lets do some math!</h2>
        <div className="calculator">
          <div className="resultBar" role="none">
            {currentState.total}
            {currentState.operation}
            {currentState.next}
          </div>
          <div className="keypad">
            <button type="button" onClick={mouseClick} className="singleButton">AC</button>
            <button type="button" onClick={mouseClick} className="singleButton">+/-</button>
            <button type="button" onClick={mouseClick} className="singleButton">%</button>
            <button type="button" onClick={mouseClick} className="singleButton">÷</button>
            <button type="button" onClick={mouseClick} className="singleButton">7</button>
            <button type="button" onClick={mouseClick} className="singleButton">8</button>
            <button type="button" onClick={mouseClick} className="singleButton">9</button>
            <button type="button" onClick={mouseClick} className="singleButton">x</button>
            <button type="button" onClick={mouseClick} className="singleButton">4</button>
            <button type="button" onClick={mouseClick} className="singleButton">5</button>
            <button type="button" onClick={mouseClick} className="singleButton">6</button>
            <button type="button" onClick={mouseClick} className="singleButton">-</button>
            <button type="button" onClick={mouseClick} className="singleButton">1</button>
            <button type="button" onClick={mouseClick} className="singleButton">2</button>
            <button type="button" onClick={mouseClick} className="singleButton">3</button>
            <button type="button" onClick={mouseClick} className="singleButton">+</button>
            <button type="button" onClick={mouseClick} className="doubleButton">0</button>
            <button type="button" onClick={mouseClick} className="singleButton">.</button>
            <button type="button" onClick={mouseClick} className="singleButton">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
