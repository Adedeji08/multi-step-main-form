/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/02/2023 - 12:12:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStep } from '../currentDisplay/CurrentDisplaySlice'


function Summary() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const addOns = useSelector(state => state.addOns?.selectedAddOns);

  const getTotal = () => {
    let addOnsTotal = 0;

    addOns?.forEach((addOn) => {
      plan.frequency==='monthly'? addOnsTotal += addOn.monthly: addOnsTotal += addOn.yearly
    })
     console.log('plan', plan)
     console.log('addons', addOns)
    return addOnsTotal + plan.type.rate
  }
  return (
    <div className='info1'>
      <div className='info'>
          <h2>
          Finishing up
          </h2>
          <p className='top-para'>Double-check everything looks OK before confirming.</p>
          <div className='box-add'>
                <div className='summary'>
                    <h6>{plan.type.name} ({plan.frequency})<br/> 
                    <p 
                    className='change'
                    onClick={() => {
                      dispatch(selectStep(1))
                    }}>change</ p>  
                    </h6>
                    <span className='sum'>+$9/mo</span>
                </div>
                <div>
            ${plan.type.rate}/{`${plan.frequency==='monthly'? 'mo': 'yr'}`}
          </div>
                <div className='summary'>
                            {addOns?.map(addOn => {
                      return <div key={addOn.name}>
                        <p  className='fade'>{addOn.name}</p>
                        <h5>+{plan.frequency==='monthly'? `${addOn.monthly}/mo`: `${addOn.yearly}/yr`}</h5>
                      </div>
                    })}
                    {/* <h6>
                         <p className='fade'>Online service</p>  
                         <p className='fade'>Larger Storage</p>  
                    </h6>
                    <p className='parent'>
                    <span className='fixed'>+$2/mo</span><br/>
                    <span className='fixed'>+$2/mo</span>
                    </p> */}
                </div>
                <div className='summary1'>
                   <p className='fade1'>Total (per {plan.frequency==='monthly'? 'month': 'year'})</p>  
                    <span className='amount'>${getTotal()}</span>
                </div>
        </div>
          
      </div>
    </div>
  )
}

export default Summary