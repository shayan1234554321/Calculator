import React, { useState } from 'react'
import calculate from '../logic/calculate'

export default function Calculator() {
  const [ obj , setObj ] = useState({
    total: '0' , 
    next: '' , 
    operation: '' 
  })

  const operations = (symbol) => {
    if(symbol === "="){
        if(obj.total && obj.next && obj.operation){
            let res = calculate(obj ,symbol )
            setObj({operation: res.operation? res.operation : '' , next: res.next? res.next: '' , total: res.total? res.total : '0'})
        }
    }else{
        let res = calculate(obj ,symbol)
        setObj({operation: res.operation? res.operation : '' , next: res.next? res.next: '' , total: res.total? res.total : '0'})
    }
  }

  const valueHandler = (value) => {
    if(!obj.operation){
        let currentValue = obj.total + value
        if(currentValue[0] === '0' ) currentValue = currentValue.slice(1)
        setObj({...obj,total:currentValue })
    }else{
        let currentValue = obj.next + value
        setObj({...obj,next:currentValue })
    }
  }

  const simpleOperation = (symbol) => {
    if(obj.total && obj.next && obj.operation){
        let res = calculate(obj ,symbol)
        setObj({operation: res.operation? res.operation : symbol , next: res.next? res.next: '' , total: res.total? res.total : '0'})
    }else{
        setObj({ ...obj, operation: symbol})
    }
  }

  return (
    <div className='calContainer' >
        <div className="display">{obj.next || obj.total}</div>
        <div className="buttons">
            <button onClick={()=>operations('AC')} >AC</button>
            <button onClick={()=>operations('+/-')} >+/-</button>
            <button onClick={()=>simpleOperation('%')} >%</button>
            <button onClick={()=>simpleOperation('÷')} >÷</button>
            <button onClick={()=>valueHandler('7')} >7</button>
            <button onClick={()=>valueHandler('8')} >8</button>
            <button onClick={()=>valueHandler('9')} >9</button>
            <button onClick={()=>simpleOperation('x')} >x</button>
            <button onClick={()=>valueHandler('4')} >4</button>
            <button onClick={()=>valueHandler('5')} >5</button>
            <button onClick={()=>valueHandler('6')} >6</button>
            <button onClick={()=>simpleOperation('-')} >-</button>
            <button onClick={()=>valueHandler('1')} >1</button>
            <button onClick={()=>valueHandler('2')} >2</button>
            <button onClick={()=>valueHandler('3')} >3</button>
            <button onClick={()=>simpleOperation('+')} >+</button>
            <button onClick={()=>valueHandler('0')} >0</button>
            <button onClick={()=>valueHandler('.')} >.</button>
            <button onClick={()=>operations('=')} >=</button>
        </div>
    </div>
  )
}
