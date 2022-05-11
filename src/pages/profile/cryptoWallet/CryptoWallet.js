import styles from './CryptoWallet.module.scss'
import React from 'react';

import {MdClose} from 'react-icons/md';
import {BsFillWalletFill} from 'react-icons/bs'

import CryptoWallets from 'components/cryptoWallets';
import Box from '../components/Box';
import useCardanoWallets from 'hooks/useCardanoWallets';
import useOpen from 'hooks/useOpen';

const CryptoWallet = (props) => {

    const {userRemoveCryptoAddress, userUpdateCryptoAddress} = props;

    const {user, errors} = props.userReducers;

    const {open, onOpen, onOpenValue, openValue} = useOpen();

    const cardanoWallet = useCardanoWallets();

    const halfString = (string) => `${string.substring(0, 7)}...${string.substring(107)}`;

    return (
        <Box title="Crypto wallet" titleValue={`Crypto address linked ${user.cryptoAddress.length}`} onOpen={onOpen} open={open}>
            {open &&
                <div className={styles.container}>
                    <div className={styles.walletAddresses}>
                        {user.cryptoAddress.map(el => 
                            <div className={styles.element} key={el}>
                                <p>{halfString(el)}</p>
                                {user.cryptoAddress.length > 1 && <button onClick={() => userRemoveCryptoAddress(el)}><MdClose/></button>}
                            </div>
                        )}
                    </div>

                    {errors && <p className={styles.error}>* {errors.cryptoAddress} * </p>}

                    <div onClick={() => onOpenValue("open")} className={styles.linkAddress}>
                        <span>Link address</span>
                        <BsFillWalletFill/>
                    </div>

                    { openValue === "open" && 
                        <CryptoWallets onClose={onOpen} walletConnecter={cardanoWallet} callback={userUpdateCryptoAddress}/> 
                    }
                </div>
            }
        </Box>
    )
};

export default CryptoWallet