import styles from './Desktop.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { utilsDownloadOptions } from 'redux/actions/utilsActions';

import { AiFillApple } from 'react-icons/ai';

import Dropdown from 'components/dropdown';
import useUrlDownload from 'hooks/useUrlDownload';

import { mac } from "./app";

const Desktop = (props) => {

    const {utilsDownloadOptions} = props;

    const {download} = useUrlDownload();

    const onDownload = async (title, url) => {
        utilsDownloadOptions("start", title);
        await download(url, "meusic", "zip");
        utilsDownloadOptions("end", title);
    };

    return (
        <div className={styles.container}>
            <Dropdown icon={<button className={styles.button}>Desktop</button>}>
                <ul>
                    <li> 
                        <button onClick={() => onDownload("MacOs installing", mac)}>
                            <AiFillApple/> 
                            <span>Mac</span>
                        </button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    )
};

const mapDispatchToProps = {
    utilsDownloadOptions
}

export default connect(null, mapDispatchToProps)(Desktop)