import styles from './Username.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { userUpdateUsername } from 'redux/actions/userActions';

import {MdEdit, MdClose, MdSend} from 'react-icons/md';

import useOpen from 'hooks/useOpen'
import useForm from 'hooks/useForm';
import Valiation from './Validation';

export const Username = ({User, userUpdateUsername}) => {

    const {user, errors: userErrors} = User;

    const {open, onOpen} = useOpen();

    const initalState = {
      username: ""
    }
    
    const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);
    
    async function callback(){
      await userUpdateUsername(values)
    }    

    return (
      <div className={styles.container}>
          <div>
            <p>{user.username}</p>
            <button onClick={onOpen}>{!open ? <MdEdit/> : <MdClose/>}</button>
          </div>

          {open &&
            <form noValidate onSubmit={onSubmit}>
              <div>
                <input type="text" name="username" placeholder="New username" value={values.username} onChange={onChange} />
                {errors.username && <p>* {errors.username} *</p>}
                {!loading && values.username.length >= 3 && <button><MdSend/></button>}
                {loading && <div className='loading-20' />}
              </div>

              {userErrors && <p>* {userErrors.username} *</p>}
            </form>
          }
      </div>
    )
}

const mapDispatchToProps = {
  userUpdateUsername
}

export default connect(null, mapDispatchToProps)(Username)