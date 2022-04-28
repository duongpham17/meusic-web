import styles from './Username.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { userUpdateUsername } from 'redux/actions/userActions';

import useOpen from 'hooks/useOpen'
import useForm from 'hooks/useForm';
import Valiation from './Validation';

import Box from '../components/Box';

export const Username = (props) => {

    const {userUpdateUsername} = props;

    const {user, errors: userErrors} = props.userReducers;

    const {open, onOpen} = useOpen();

    const initalState = {
      username: ""
    };
    
    const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);
    
    async function callback(){
      const usernameUpdated = await userUpdateUsername(values);
      if(usernameUpdated) onOpen();
    };

    return (
      <Box title="Username" titleValue={user.username} onOpen={onOpen} open={open}>
          <div className={styles.container}>

          {open &&
            <form noValidate onSubmit={onSubmit}>
              <div>
                <input type="text" name="username" placeholder="New username" value={values.username} onChange={onChange} />
                {errors.username && <p>* {errors.username} *</p>}
                {!loading && values.username.length >= 3 && <button>UPDATE</button>}
                {loading && <div className='loading-20' />}
              </div>

              {userErrors?.username && <p className={styles.error}>* {userErrors.username} *</p>}
            </form>
          }
          </div>

      </Box>
    )
}

const mapDispatchToProps = {
  userUpdateUsername
}

export default connect(null, mapDispatchToProps)(Username)