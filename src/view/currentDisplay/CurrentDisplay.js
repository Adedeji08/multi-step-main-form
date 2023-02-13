/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/02/2023 - 17:10:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import '../auth/SignUp'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep,  previousStep, selectStep  } from './CurrentDisplaySlice';
import './CurrentDisplay.scss'


function CurrentDisplay() {
  const auth = useSelector(state => state.auth)
  const selectedPlan = useSelector(state => state?.plan?.type?.name)

  const currentDisplay = useSelector(state => state?.currentDisplay)

  const dispatch = useDispatch()

  const nextHandler = () => {
    const num = currentDisplay?.currentNum

    if (num===0) {
      if (auth.name.length>0 && auth.email.includes('@') && auth.phoneNum?.length>=10) {
        dispatch(nextStep())
        return
      } else { alert('Please fill all the info correctly')
    return
    }
    }

    if (num===1) {
      if (selectedPlan) {
        dispatch(nextStep())
      return } else {
          alert('Please select your plan')
          return
        }
    }
    
    if (num >= 1) dispatch(nextStep())
  }

  const backHandler = () => {
    dispatch(previousStep())
  }
  console.log('data', selectedPlan)
  return (
    <div className='currentDisplay'>
     {currentDisplay?.options[currentDisplay.currentNum]}
      <div className="currentDisplay__buttons"
      style={{
        display: currentDisplay?.currentNum===4 ? 'none': 'flex'
      }}
      >
        
        <div><button className={`previous-button ${currentDisplay?.currentNum===0? 'hidden': ''}`} onClick={backHandler}>Go back</button></div>
        <div><button className='next-button' onClick={nextHandler}
        style={{
          display: currentDisplay?.currentNum===3? 'none': 'initial'
        }}
        >Next</button>
        <button className="confirm-button"
        style={{
          display: currentDisplay?.currentNum!==3? 'none': 'initial'
        }}
        onClick={nextHandler}
        >Confirm</button></div>
        
      </div>
    </div>
  )
}

export default CurrentDisplay