import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = button => {

  const className = {
    '=':'equals',
    'x': 'opt',
    '+': 'opt',
    '-': 'opt',
    '/': 'opt',
  }
  return className[button];
}

const Button = ({ value }) => {

  const {calc, setCalc} = useContext(CalcContext);

  // User clicks comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(',') ? calc.num + value : calc.num,
    })
  }

  // User clicks C
  const resetClick = () => {
    setCalc({
      sign:"",
      num: 0,
      res: 0,
    })
  }

  // User click on a number
  const handleClickNumber = () => {
    
    const numberString = value.toString();
    
    let numberValue;
    
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else{
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num : numberValue,
    })
  }

  // User clicks on an operation button
  const signClick = () => {
    setCalc({
      sign:value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

    // User clicks on equal
    const equalsClick = () => {
      if(calc.res && calc.num){
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '*': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sign](a, b);
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign:'',
        num:0,
      })
    }
    }

  const handleButtonClick = () => {
    const results = {
      ',': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
    }
    if(results[value]){
      return results[value]()
  } else {
    return handleClickNumber();
  }
  }

  return (
    <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button