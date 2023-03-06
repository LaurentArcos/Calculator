import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import { Textfit} from 'react-textfit';

const Screen = () => {

  const { calc } = useContext(CalcContext)

  return (
    <Textfit className='screen'>0125845145</Textfit>
  )
}

export default Screen