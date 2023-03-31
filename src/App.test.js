import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Calculator from './pages/calculator';
import Home from './pages/home';
import Quote from './pages/quote';
import operate from './logic/operate';
import calculate from './logic/calculate';

describe('Operate Tests', () => {
  it('4 + 5 equals 9', () => {
    const result = operate(4, 5, '+');
    expect(result).toBe('9');
  });
  it('4 - 5 equals -1', () => {
    const result = operate(4, 5, '-');
    expect(result).toBe('-1');
  });
  it('4 x 5 equals 20', () => {
    const result = operate(4, 5, 'x');
    expect(result).toBe('20');
  });
  it('4 ÷ 5 equals 0.8', () => {
    const result = operate(4, 5, '÷');
    expect(result).toBe('0.8');
  });
  it('4 % 5 equals 4', () => {
    const result = operate(4, 5, '%');
    expect(result).toBe('4');
  });
});

describe('Calculate Tests', () => {
  it('5 + 5 equal 10', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('10');
  });
  it('5 - 5 equal 0', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '-',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('0');
  });
  it('5 x 5 equal 25', () => {
    const object = {
      total: '5',
      next: '5',
      operation: 'x',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('25');
  });
  it('5 ÷ 5 equal 1', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '÷',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('1');
  });
  it('5 % 5 equal 0', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '%',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('0');
  });
  it('equal function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = calculate(object, '=');
    expect(newObj.total).toBe('10');
  });
  it('AC Function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '%',
    };
    const newObj = calculate(object, 'AC');
    expect(newObj.total).toBe(null);
  });
  it('+/- Function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = calculate(object, '+/-');
    expect(newObj.next).toBe('-5');
  });
});

describe('Components render Correctly', () => {
  it('App renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calculator renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
