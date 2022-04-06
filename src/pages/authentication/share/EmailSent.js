import styles from './EmailSent.module.scss';
import React, {useState} from 'react';

import { connect } from 'react-redux';
import { authConfirmCode } from 'redux/actions/authActions';

import InputCode from './InputCode';

const EmailSent = ({email, auth, authConfirmCode}) => {

  const {error} = auth;

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState([...Array(6)].map(() => ""));

  const [enterCode, setEnterCode] = useState(false);

  const onAuthenticate = async () => {
    setLoading(true);
    const data = {
      email,
      code: code.join("")
    };
    await authConfirmCode(data);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {!enterCode ? 

          <div className={styles.emailSent}>
            <p>Login link and code has been sent to your email</p>
            <button onClick={() => setEnterCode(true)}>use code instead</button>
          </div>

          :
          
          <div className={styles.enterCode}>
            <p>Enter code</p>
            <InputCode label="Code Label" code={code} setCode={setCode} />
            {error?.confirm?.code && <p className={styles.error}>&#x2715; {error.confirm.code}</p>}
            {code.join("").length === 6 && !loading && <button onClick={onAuthenticate}>&#8594;</button>}
            {loading && <button className="fade">&#8594;</button>}
          </div>

        }

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducers
});

const mapDispatchToProps = {
  authConfirmCode
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSent);