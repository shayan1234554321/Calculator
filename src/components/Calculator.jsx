import React, { useEffect, useRef, useState } from 'react';
import calculate from '../logic/calculate';

export default function CalculatorContainer() {
  const [obj, setObj] = useState({
    total: '0',
    next: '',
    operation: '',
  });
  const buttonsRef = useRef(null);
  const [mousePos, setMousePos] = useState({});
  const [insideButtons, setInsideButtons] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = buttonsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePos({ x, y });
    };

    buttonsRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      buttonsRef.current?.removeEventListener(
        'mousemove',
        handleMouseMove,
      );
    };
  }, []);

  const operations = (symbol) => {
    if (symbol === '=') {
      if (obj.total && obj.next && obj.operation) {
        const res = calculate(obj, symbol);
        setObj({ operation: res.operation ? res.operation : '', next: res.next ? res.next : '', total: res.total ? res.total : '0' });
      }
    } else {
      const res = calculate(obj, symbol);
      setObj({ operation: res.operation ? res.operation : '', next: res.next ? res.next : '', total: res.total ? res.total : '0' });
    }
  };

  const valueHandler = (value) => {
    if (!obj.operation) {
      let currentValue = obj.total + value;
      if (currentValue[0] === '0') currentValue = currentValue.slice(1);
      setObj({ ...obj, total: currentValue });
    } else {
      const currentValue = obj.next + value;
      setObj({ ...obj, next: currentValue });
    }
  };

  const simpleOperation = (symbol) => {
    if (obj.total && obj.next && obj.operation) {
      const res = calculate(obj, symbol);
      setObj({ operation: res.operation ? res.operation : symbol, next: res.next ? res.next : '', total: res.total ? res.total : '0' });
    } else {
      setObj({ ...obj, operation: symbol });
    }
  };

  return (
    <div className="calContainer">
      <div className="display">
        <input value={obj.next || obj.total} />
      </div>
      <div className="buttons" ref={buttonsRef} onMouseEnter={() => setInsideButtons(true)} onMouseLeave={() => setInsideButtons(false)}>
        {insideButtons && <div className="cursor" style={{ top: mousePos?.y, left: mousePos?.x }} />}
        <button type="button" onClick={() => operations('AC')}>AC</button>
        <button type="button" onClick={() => operations('+/-')}>+/-</button>
        <button type="button" onClick={() => simpleOperation('%')}>%</button>
        <button type="button" onClick={() => simpleOperation('÷')}>÷</button>
        <br />
        <button type="button" onClick={() => valueHandler('7')}>7</button>
        <button type="button" onClick={() => valueHandler('8')}>8</button>
        <button type="button" onClick={() => valueHandler('9')}>9</button>
        <button type="button" onClick={() => simpleOperation('x')}>x</button>
        {' '}
        <br />
        <button type="button" onClick={() => valueHandler('4')}>4</button>
        <button type="button" onClick={() => valueHandler('5')}>5</button>
        <button type="button" onClick={() => valueHandler('6')}>6</button>
        <button type="button" onClick={() => simpleOperation('-')}>-</button>
        {' '}
        <br />
        <button type="button" onClick={() => valueHandler('1')}>1</button>
        <button type="button" onClick={() => valueHandler('2')}>2</button>
        <button type="button" onClick={() => valueHandler('3')}>3</button>
        <button type="button" onClick={() => simpleOperation('+')}>+</button>
        {' '}
        <br />
        <button type="button" onClick={() => valueHandler('.')}>.</button>
        <button type="button" onClick={() => valueHandler('0')}>0</button>
        <button type="button" onClick={() => operations('=')}>=</button>
      </div>
    </div>
  );
}
