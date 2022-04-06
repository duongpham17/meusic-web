import styles from './useComponents.module.scss';
import React, {useState} from 'react';

import {MdDelete, MdSend} from 'react-icons/md';

const useComponents = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const onRequest = async (callback) => {
        setLoading(true);
        await callback();
        setLoading(false);
    };
    const onRequestWithParameters = async (callback) => {
        setLoading(true);
        await callback;
        setLoading(false);
    };

    const emptyFunc = () => {}

    const DeleteComp = ({description, request}) => (
        <div className={styles.container}>
            <header>
                <b>{description}</b>
                {!loading && <button onClick={request}><MdDelete/></button>}
                {loading && <div className="loading-15" />}
            </header>
        </div>
    );

    const UpdateComp = ({description, request, dropdown: Dropdown}) => (
        <div className={styles.container}>
            <header onClick={() => setOpen(!open)}>
                <b>{description}</b>
                {!loading && <button onClick={request || emptyFunc}><MdSend/></button>}
                {loading && <div className="loading-15" />}
            </header>
            {open && !loading &&
                <div className={styles.dropdown}>
                    <Dropdown />
                </div>
            }
        </div>
    );

    return {
        onRequest,
        onRequestWithParameters,
        DeleteComp,
        UpdateComp
    }
}

export default useComponents;