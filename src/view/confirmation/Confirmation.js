/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/02/2023 - 14:21:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'

function Final() {
  return (
    <div className='info1'>
    <div className='info'>
        <h2>
        Pick add-ons
        </h2>
        <p className='top-para'>Add-ons help enhance your gaming experience.</p>
        <div className='box-add'>
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
      </div>
       
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

export default Final