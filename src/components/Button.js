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

  const handleButtonClick = () => {
    const results = {
      ',': commaClick,
      'C': resetClick,
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