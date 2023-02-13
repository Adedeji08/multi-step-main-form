/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/02/2023 - 16:55:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useSelector } from 'react-redux'
import './Steps.scss'

const steps = [
  {
    number: 1,
    description: 'YOUR INFO'
  },
  {
    number: 2,
    description: 'SELECT PLAN'
  },
  {
    number: 3,
    description: 'ADD-ONS'
  },
  {
    number: 4,
    description: 'SUMMARY'
  },
]

function Steps() {

  const currentDisplay = useSelector(state => state.currentDisplay?.currentNum + 1);

  return (
    <div className='header'>

      {steps.map((step) => {
        return <div className="flexit header-position" key={step.number}>
        <div className={` circle num-span ${step.number === currentDisplay? '': ''}`}>{step.number}</div>
        <div className="step__name">
          <p className='h-span'>STEP {step.number}</p>
          <h5>{step.description}</h5>
        </div>
      </div>
      })}

      
    </div>
  )
}

export default Steps