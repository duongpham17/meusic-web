import styles from './Email.module.scss';
import React, {useState} from 'react';

import useOpen from 'hooks/useOpen'
import useForm from 'hooks/useForm';
import Valiation from './Validation';

import Box from '../components/Box';

const Email = (props) => {

    const {userRequestEmailChange, userEmailConfirm} = props;

    const {user, errors: userErrors} = props.userReducers;

    const {open, onOpen} = useOpen();

    const [emailSent, setEmailSent] = useState(false);

    const initalState = {
      email: "",
      code: ""
    };
    
    const {values, onChange, onSubmit, errors, loading} = useForm(initalState, callback, Valiation);
    
    async function callback(){

        if(!emailSent) {
            const sent = await userRequestEmailChange(values);
            if(sent) setEmailSent(true);
        };

        if(emailSent) {
            const correct = await userEmailConfirm(values);
            if(correct) {
                setEmailSent(false);
                onOpen();
            }
        };

    };

    return (
        <Box title="Email" titleValue={user.email} onOpen={onOpen} open={open}>
            <div className={styles.container}>
                {open &&
                    <form noValidate onSubmit={onSubmit}>
                        {!emailSent &&
                            <div>
                                <input type="text" name="email" placeholder="New email" value={values.email} onChange={onChange} />
                                {errors.email && <p>* {errors.email} *</p>}
                                {!loading && values.email.length >= 3 && <button>UPDATE</button>}
                                {loading && <div className='loading-20' />}
                            </div>
                        }

                        {emailSent &&
                            <div>
                                <input type="text" placeholder="Code sent to email" name="code" value={values.code} onChange={onChange} />
                                {!loading && values.code.length >= 6 && <button>UPDATE</button>}
                                {loading && <div className='loading-20' />}
                            </div>
                        }

                        {userErrors?.email && <p className={styles.error}>* {userErrors.email} *</p>}
                    </form>
                }
            </div>
        </Box>
    )
}

export default Email