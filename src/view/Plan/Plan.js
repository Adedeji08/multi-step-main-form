/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/02/2023 - 15:39:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFrequency, changeType } from '../../features/planSlice'
import Arcade from "../../assets/images/icon-arcade.svg"
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg';

const planData = [
  {
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
    logo: Arcade
  },
  {
    name: 'Advanced',
    monthly: 12,
    yearly: 120,
    logo: Advanced
  },
  {
    name: 'Pro',
    monthly: 15,
    yearly: 150,
    logo: Pro
  }
]
function Plan() {
  const dispatch = useDispatch()
  const planSelected = useSelector(state => state.plan)

  const toggleFrequency = () => {
    dispatch(changeType( {
      name: '',
      rate: undefined
    }))
    return dispatch(changeFrequency())
  }

  const selectOption = (plan) => {
    dispatch(changeType( {
      name: plan.name,
      rate: planSelected.frequency==='monthly' ? plan.monthly: plan.yearly
    }))
  }

  return (
    <div className='info1'>
    <div className='info'>
        <h2>
        Select your plan
        </h2>
        <p className='top-para'>You have the option of monthly or yearly billing.</p>
        <div className='box'>
        {
          planData.map((plan) => {
            return <div key={plan.name} className={`box-options option ${plan.name===planSelected?.type?.name? 'selected': ''}`} onClick={() => {
            selectOption(plan)
          }}>
            <img src={plan.logo} alt="advanced-logo" className='img-icon' />
            <h4>{plan.name}</h4>
          {planSelected?.frequency==='monthly' ?
          <p className='plan-span'>{`$${plan.monthly}/mo`}</p>
          : 
          <div>
            <p className='plan-span'>{`$${plan.yearly}/yr`}</p>
            <p className='free plan-span'>2 months free</p>
          </div> }
          </div>
          })
        }
        </div>
        <div className='switch-div'>
           <p className='season'>Monthly</p>
           <label className="switch">
            <input type="checkbox" onClick={toggleFrequency} />
            <span className="slider round"></span>
          </label>
           <p className='season'>Yearly</p>
        </div>
    </div>
  </div>
  )
}

export default Plan