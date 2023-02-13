/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/02/2023 - 16:43:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : 
    * - Modification    : 
**/

import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeEmail, changePhoneNum } from '../../features/authSlice'
function SignUp() {
 const dispatch = useDispatch()
 const auth = useSelector(state => state.auth)
  return (
    <div className='info1'>
      <div className='info'>
          <h2>
              Personal Info
          </h2>
          <p className='top-para'>Please provide your name, email address, and phone number.</p>
          <div>
              <form action=''>
                <div className='form-space'>
                  <label>Name</label>
                  <input
                  className='user-info'
                  placeholder='e.g. Touch James'
                  id="form-id"
                  type='name'
                  name='name'
                  value={auth.name}
                  onChange={(e) => dispatch(changeName(e.target.value))}
                  required
                  />
                  </div>
                  <div className='form-space'>
                  <label>Email Address</label>
                  <input
                  className='user-info'
                  placeholder='e.g. touch@gmail.com'
                  id="form-id"
                  type='eamil'
                  name='email'
                  required
                  value={auth.email}
                  onChange={(e) => dispatch(changeEmail(e.target.value))}
                
                  />
                  </div>
                  <div className='form-space'>
                  <label>Phone Number</label>
                  <input
                  className='user-info'
                  placeholder='e.g. +234 904 900 2343'
                  type='number'
                  id="form-id"
                  name='number'
                  value={auth.changePhoneNum}
                  onChange={(e) => dispatch(changePhoneNum(e.target.value))}
                  required
                  />
                  </div>
                      <section className='footer'>
                          <div className='footer-split'>
                            <button className='btn1'></button>
                          <button type='submit' className='btn'>Next Step</button>
                        </div>
                  </section>
              </form>
          </div>
      </div>
            
    </div>
  )
}

export default SignUp