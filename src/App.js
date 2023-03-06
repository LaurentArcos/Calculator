import React from 'react'
import Button from './components/Button'
import ButtonBox from './components/ButtonBox'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'
import CalcProvider from './context/CalcContext'

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9,"x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ",", "="],
]

const App = () => {
  return (
    <div>
      <CalcProvider>
        <Wrapper>
          <Screen/>
          <ButtonBox>
            {buttonValues.flat().map((button,i) => (         
            <Button
              value={button}
              key={i}
            />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  )
}

export default App