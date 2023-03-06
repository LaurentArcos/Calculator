import React from 'react'

const getStyleName = name => {
  const className = {
    '=':'equals',
    'x': 'opt',
    '+': 'opt',
    '-': 'opt',
    '/': 'opt',
  }
}

const Button = ({ value }) => {
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button