import React from 'react';
import CalculatorContainer from '../components/Calculator';

export default function Calculator() {
  return (
    <section className="calculator" >
      <div className="calculatorCont">
        <CalculatorContainer/>
      </div>
      <div className="top">
        <div className="extraCon">
          <h3>
            Everyday
          </h3>
          <h2>CALCULATOR</h2>
        </div>
      </div>
      <div className="bottom">
        <div className="extraCon">
          <h4>Let's Do Some Math!</h4>
        </div>
      </div>
    </section>
  );
}
