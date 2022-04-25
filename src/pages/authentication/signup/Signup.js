import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { authSignupEmail, authSignupUsername, authSignupClear } from 'redux/actions/authActions';

import Authentication from '../components/Authentication';
import EmailSent from '../components/EmailSent';
import Valiation from "../components/Validation";

import useForm from 'hooks/useForm';

export const Signup = (props) => {

  const {authSignupEmail, authSignupUsername, authSignupClear} = props;

  const {signup, error} = props.authReducers;

  const initalState = {
    email: "",
    username: "unknown",
  };

  const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);

  async function callback(){
    if(!signup) return await authSignupEmail(values);
    await authSignupUsername(values);
  };

  useEffect(() => {
    return () => authSignupClear();
  }, [authSignupClear]);

  return (
    <Authentication title="Signup">
      {signup === "sent" 
        ?
          <EmailSent email={values.email}/>
        :
        <form onSubmit={onSubmit} noValidate>

          {!signup && 
            <div>
              <input type="text" placeholder="Email" name="email" values={values.email} onChange={onChange} />
              {errors.email && <span>{errors.email} *</span>}
              {error?.signup?.email && <span>{error.signup.email} *</span>}
            </div>
          }

          {signup === "available" && 
            <div>
              <input type="text" value={values.email} onChange={()=>{}}/>

              <input type="text" placeholder="Username" name="username" values={values.username} onChange={onChange} />
              {errors.username && <span>{errors.username} *</span>}
              {error?.signup?.username && <span>{error.signup.username} *</span>}
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
  authReducers: state.authReducers
});

const mapDispatchToProps = {
  authSignupEmail,
  authSignupUsername,
  authSignupClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);