import styles from './Desktop.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { downloadOptions } from 'redux/actions/downloadActions';

import { AiFillApple } from 'react-icons/ai';

import Dropdown from 'components/dropdown';
import useUrlDownload from 'hooks/useUrlDownload';

import { mac } from "./app";

//win AiFillWindows

const Desktop = (props) => {

    const {downloadOptions} = props;

    const {download} = useUrlDownload();

    const onDownload = async (title, url) => {
        downloadOptions("start", title);
        await download(url, "meusic", "zip");
        downloadOptions("end", title);
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
                    {/* 
                    <li> 
                        <button onClick={() => onDownload("Windows installing", win)}>
                            <AiFillWindows/> 
                            <span>Win</span>
                        </button>
                    </li> 
                    */}
                </ul>
            </Dropdown>
        </div>
    )
};

const mapDispatchToProps = {
    downloadOptions
}

export default connect(null, mapDispatchToProps)(Desktop)