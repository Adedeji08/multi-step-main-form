/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/02/2023 - 15:42:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
// import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <div className='flexit'>
        <section className='header-position'>
             <div className='circle'>
             <span className='num-span'>1</span>
             </div>
             <h5>
                <span className='h-span'>STEP 1</span><br/>
                YOUR INFO
            </h5>
        </section>
        <section className='header-position'>
             <div className='circle'>
           <span className='num-span'>2</span>
             </div>
             <h5>
                <span className='h-span'>STEP 2</span><br/>
                SELECT PLAN
            </h5>
        </section>
        <section className='header-position'>
             <div className='circle'>
            <span className='num-span'>3</span>
             </div>
             <h5>
                <span className='h-span'>STEP 3</span><br/>
                ADD-ONS
            </h5>
        </section>
        <section className='header-position'>
             <div className='circle'>
           <span className='num-span'>4</span>
             </div>
             <h5>
                <span className='h-span'>STEP 4</span><br/>
                SUMMARY
            </h5>
        </section>
        </div>
    </div>
  )
}

export default Header