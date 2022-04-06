import styles from './UpdateSongsKeys.module.scss';
import React, {useState} from 'react';
import useComponents from '../useComponents';

const UpdateSongsKeys = (props) => {

    const {adminUpdateSongsKeys} = props;

    const {UpdateComp, onRequestWithParameters} = useComponents();

    const Dropdown = () => {

        const [data, setData] = useState({
            key: "",
            value: ""
        });

        const onChange = (e) => setData({...data, [e.target.name] : e.target.value});

        const isEmpty = () => data.key.length >= 2 && data.value.length >= 2;

        const onSubmit = async () => {
            if(!isEmpty()) return;
            await onRequestWithParameters(adminUpdateSongsKeys(data));
        };
            
        return (
            <div className={styles.container}>
                <div>
                    <label>Key </label>
                    <input type="text" placeholder='...' name="key" value={data.key} onChange={onChange} />
                </div>
                <div>
                    <label>Value </label>
                    <input type="text" placeholder='...' name="value" value={data.value} onChange={onChange} />
                </div>

                {isEmpty() && <button onClick={onSubmit}>Update</button>}
            </div>
        )
    }

    return (
        <UpdateComp description="Update Songs Keys" dropdown={Dropdown}/>
    )
}

export default UpdateSongsKeys