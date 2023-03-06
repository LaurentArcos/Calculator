import React from 'react'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9,"x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

const App = () => {
  return (
    <div>
      <Wrapper>
           <Screen/>
           <
      </Wrapper>
    </div>
  )
}

export default App