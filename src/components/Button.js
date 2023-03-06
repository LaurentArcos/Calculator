import React from 'react'

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
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button