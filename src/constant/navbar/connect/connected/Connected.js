import styles from './Connected.module.scss';
import React from 'react';

import Box from '../../components/Box';
import Cover from 'components/cover';

import {BsFillWalletFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown, MdLogout} from 'react-icons/md'

import useOpen from 'hooks/useOpen';

export const Connected = (props) => {

    const {onOpenValue, openValue, cardanoWalletConnector, authLogout} = props;

    const {wallet} = cardanoWalletConnector;

    const {open, onOpen} = useOpen();

    return (
        <div className={styles.container}>
            <Box desktop button={<button onClick={() => onOpenValue("connected")}><BsFillWalletFill size="1.4rem"/></button>} />

            { openValue === "connected" && 
                <Cover onClose={onOpenValue}>
                    <div className={styles.wallet} onClick={e => e.stopPropagation()}>
                        <h3>
                            <span>Connected to</span>
                            <span>{wallet.name}</span>
                        </h3>
                        <br/>
                        <button onClick={onOpen}>
                            <span>How to disconnect wallet?</span>
                            <span>{open ? <MdOutlineKeyboardArrowDown/> : <MdOutlineKeyboardArrowRight/> }</span>
                        </button>
                        {open && 
                            <div className={styles.disconnectInfo}>
                                <p>1) Go to your connected wallet.</p>
                                <p>2) Locate settings or whitelisted sites.</p>
                                <p>3) Remove the website from the list.</p>
                                <p>4) Finally, Logout or Disconnect.</p>
                            </div>
                        }
                    </div>

                    <div className={styles.disconnect} onClick={e => e.stopPropagation()}>
                        <button onClick={authLogout}>
                            <span>Disconnect</span>
                            <span><MdLogout/></span>
                        </button>
                    </div>
                    
                </Cover>
            }
        </div>
    )
}

export default Connected