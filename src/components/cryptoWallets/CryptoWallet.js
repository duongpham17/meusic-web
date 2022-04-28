import styles from './CryptoWallet.module.scss';
import React from 'react';
import Cover from '../cover';
import WalletsList from './WalletsList';
import {MdKeyboardArrowRight} from 'react-icons/md'

/**
 * @param { function } onClose - useState close wallet selection when background is clicked
 * @param { object } cardanoWalletConnector - cardano wallet objects containing functions and listeners
*/

const CryptoWallet = ({onClose, cardanoWalletConnector}) => {

    const { connect, error } = cardanoWalletConnector;

    const wordCapital = (word) =>  word.substring(0, 1).toUpperCase() + word.substring(1)

    return (
        <Cover onClose={onClose}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <ul>
                    {WalletsList.map(el => 
                        <li key={el.name} onClick={() => connect(el.name)}>
                            <span>{wordCapital(el.name)}</span>
                            <img src={el.icon} alt="wallet" /> 
                        </li>    
                    )}

                    {WalletsList.map(el => 
                        el.name === error &&
                        <a key={el.name} href={el.downloadLink} target="_blank" rel="noreferrer"> 
                            <span>{wordCapital(error)} download link</span>
                            <MdKeyboardArrowRight/>
                        </a>
                    )}
                    
                </ul>
            </div>
        </Cover>
    )
};

export default CryptoWallet