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
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectStep } from '../currentDisplay/CurrentDisplaySlice'

function Summary() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const addOns = useSelector(state => state.addOns?.selectedAddOns);

  const getTotal = () => {
    let addOnsTotal = 0;

    addOns.forEach((addOn) => {
      plan.frequency==='monthly'? addOnsTotal += addOn.monthly: addOnsTotal += addOn.yearly
    })

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
                    <h6>Arcade (Monthly) <br/> <p className='change'>change</p>  
                    </h6>
                    <span className='sum'>+$9/mo</span>
                </div>
                <div className='summary'>
                    <h6>
                         <p className='fade'>Online service</p>  
                         <p className='fade'>Larger Storage</p>  
                    </h6>
                    <p className='parent'>
                    <span className='fixed'>+$2/mo</span><br/>
                    <span className='fixed'>+$2/mo</span>
                    </p>
                </div>
                <div className='summary1'>
                   <p className='fade1'>Total (per month)</p>  
                    <span className='amount'>+$2/mo</span>
                </div>
        </div>
          
      </div>
            <section className='footer'>
                    <div className='footer-split'>
                        <button className='btn1'>Go Back</button>
                        <button className='btn2'>  Confirm</button>
                    </div>
            </section>
    </div>
  )
}

export default Summary