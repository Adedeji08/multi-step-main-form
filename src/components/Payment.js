/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/02/2023 - 17:04:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import Steps from '../view/Steps/Steps'
import CurrentDisplay from '../view/currentDisplay/CurrentDisplay'
import './Payment.scss'

function Payment() {
    return (
        <div>
            <Steps />
            <CurrentDisplay />
        </div>
    )
}

export default Payment
