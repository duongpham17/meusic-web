import styles from './CryptoWallet.module.scss';
import React from 'react';
import Cover from '../cover';
import WalletsList from './WalletsList';
import {MdKeyboardArrowRight} from 'react-icons/md'

/**
 * @param { function } onClose - useState close wallet selection when background is clicked
 * @param { object } walletConnecter - crypto wallet connector containing functions and listeners
 * @param { function } callback - callback for onConnect params
*/

const CryptoWallet = ({onClose, walletConnecter, callback}) => {

    const { onConnect, error, loading } = walletConnecter;

    const wordCapital = (word) =>  word.substring(0, 1).toUpperCase() + word.substring(1)

    return (
        <Cover onClose={onClose}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <ul>
                    {WalletsList.map(el => 
                        <li key={el.name} onClick={() => onConnect(el.name, callback)}>
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

                    {loading && <div className="loading-30 center" />}
                    
                </ul>
            </div>
        </Cover>
    )
};

export default CryptoWallet