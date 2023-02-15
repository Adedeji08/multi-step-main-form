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
import tick from "../../assets/images/icon-thank-you.svg"

function Final() {
  return (
    <div className='info1'>
    <div className='info'>
    <div className='confirmation'>
      <img src={tick} alt="thank you logo" />
      <h3>Thank you!</h3>
      <p>Thanks for confirming your subscription! 
        We hope you have fun using our platform. 
        If you ever need support, please feel free to email 
        us at support@loremgaming.com.</p>
    </div>
       
    </div>
         
  </div>
    
  )
}

export default Final