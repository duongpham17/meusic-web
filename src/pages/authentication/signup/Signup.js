import React from 'react';

import { connect } from 'react-redux';
import { authSignupEmail, authSignupUsername } from 'redux/actions/authActions';

import Authentication from '../share/Authentication';
import EmailSent from '../share/EmailSent';
import Valiation from "../share/Validation";

import useForm from 'hooks/useForm';

export const Signup = (props) => {

  const {auth, authSignupEmail, authSignupUsername} = props;

  const initalState = {
    email: "",
    username: "unknown",
  };

  const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);

  async function callback(){
    if(!auth.signup) return await authSignupEmail(values);
    await authSignupUsername(values);
  };

  return (
    <Authentication>
      {auth.signup === "sent" 
        ?
          <EmailSent email={values.email}/>
        :
        <form onSubmit={onSubmit} noValidate>

          {!auth.signup && 
            <div>
              <input type="text" placeholder="Email" name="email" values={values.email} onChange={onChange} />
              {errors.email && <span>{errors.email} *</span>}
              {auth.error?.signup?.email && <span>{auth.error.signup.email} *</span>}
            </div>
          }

          {auth.signup === "available" && 
            <div>
              <h4>{values.email}</h4>

              <input type="text" placeholder="Username" name="username" values={values.username} onChange={onChange} />
              {errors.username && <span>{errors.username} *</span>}
              {auth.error?.signup?.username && <span>{auth.error.signup.username} *</span>}
            </div>
          }

          <button type={`${loading && "button"}`}>
            {!loading && <p>&#8594;</p>}
            {loading && <p className='loading-15 center' />}
          </button>

        </form>
      }
    </Authentication>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducers
});

const mapDispatchToProps = {
  authSignupEmail,
  authSignupUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);