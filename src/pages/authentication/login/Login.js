import React from 'react';

import {connect} from 'react-redux';
import {authLogin} from 'redux/actions/authActions';

import Authentication from '../components/Authentication';
import EmailSent from '../components/EmailSent';
import Valiation from "../components/Validation";

import useForm from 'hooks/useForm';

const Login = (props) => {

  const {auth, authLogin} = props;

  const initalState = {
    email: "",
    username: "unknown",
  };

  const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);

  async function callback(){
    await authLogin(values);
  };

  return (
    <Authentication>
        {auth.login
        ?
          <EmailSent email={values.email}/>
        :
        <form onSubmit={onSubmit} noValidate>

          <input type="text" placeholder="Email" name="email" values={values.email} onChange={onChange} />
          {errors.email && <span>{errors.email} *</span>}
          {auth.error?.login?.email && <span>{auth.error.login.email} *</span>}

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
  authLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);