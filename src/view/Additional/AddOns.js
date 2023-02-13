/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/02/2023 - 10:06:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddOn, removeAddOn } from './AdditionalSlice'
import tick from "../../assets/images/icon-checkmark.svg"
const addonsData = [
  {
    name: 'Online Service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10
  },
  {
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20
  }
]
function AddOns() {
  const dispatch = useDispatch()
  const frequencySelected = useSelector(state => state.plan.frequency)
  const selectedAddOns = useSelector(state => state.addOns?.selectedAddOns)
  const toggleAddOn = (addOn) => {
    let alreadySelected = false;
    console.log('this', selectedAddOns)

    selectedAddOns.forEach((name) => {
      if (addOn.name===name.name) {
        alreadySelected = true 
        return
      }
    })

    alreadySelected ? dispatch(removeAddOn(addOn)) : dispatch(addAddOn(addOn));

  }
  return (
    <div className='info1'>
      <div className='info'>
          <h2>
          Pick add-ons
          </h2>
          <p className='top-para'>Add-ons help enhance your gaming experience.</p>
              {
            addonsData.map((addOn) => {

          let isSelected = false;

          selectedAddOns?.forEach((name) => {
          if (addOn.name===name.name) {
            isSelected = true 
            return
          }
          })
         return  <div key={addOn.name} className={`add-on ${isSelected? 'selected': ''}`}>
         <div className={`add-on__tick ${isSelected? 'selected': ''}`} onClick={
           () => { return toggleAddOn(addOn)}
         }>
           <img src={tick} alt="nothing important" />
         </div>
         <div className="add-on__info">
           <h4>{addOn.name}</h4>
           <p>{addOn.description}</p>
         </div>
         <div className="add-on__price">
         {
           frequencySelected==='monthly'? <p>{`$${addOn.monthly}/mo`}</p> : <p>{`$${addOn.yearly}/yr`}</p>
         }
         </div>
       </div>
         })
       }
         
      </div>
            <section className='footer'>
                    <div className='footer-split'>
                        <button className='btn1'>Go Back</button>
                        <button className='btn'>Next Step</button>
                    </div>
            </section>
    </div>
  )
}

export default AddOns

/* <div className='box-add'>
                <div className='box-add-options'>
                    <input type='checkbox' className='add-checkbox'/>
                    <h6>Online service <br/> <p className='add-para'>Access to multiplayer games</p>  
                    </h6>
                    <span className='add-span'>+$1/mo</span>
                </div>
                <div className='box-add-options'>
                    <input type='checkbox' className='add-checkbox'/>
                    <h6>Larger storage<br/> <p className='add-para'>Extra 118 of cloud save</p>  
                    </h6>
                    <span className='add-span'>+$2/mo</span>
                </div>
                <div className='box-add-options'>
                    <input type='checkbox' className='add-checkbox'/>
                    <h6>Customizable Profile<br/> <p className='add-para'>Custom theme on your profile</p>  
                    </h6>
                    <span className='add-span'>+$2/mo</span>
                </div>
        </div> */