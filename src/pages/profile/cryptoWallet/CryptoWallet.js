import styles from './CryptoWallet.module.scss'
import React from 'react';

import CryptoWallets from 'components/cryptoWallets';
import Box from '../components/Box';
import useCardanoWalletConnector from 'hooks/useCardanoWalletConnector';
import useOpen from 'hooks/useOpen';

const CryptoWallet = (props) => {

    const {userUpdateCryptoAddress} = props;

    const {user, errors} = props.userReducers;

    const {open, onOpen} = useOpen();

    const cardanoWalletConnector = useCardanoWalletConnector({callback: userUpdateCryptoAddress});

    const titleValue = user.cryptoAddress ? `${user.cryptoAddress.substring(0, 10)}...${user.cryptoAddress.substring(100)}` : "";

    return (
        <Box title="Crypto wallet" titleValue={titleValue} editable={false}>
            <div className={styles.container}>
                {errors && <p className={styles.error}>* {errors.cryptoAddress} * </p>}
                <button onClick={onOpen}>{titleValue ? "Link different wallet" : "Connect wallet"}</button>
                { open && <CryptoWallets onClose={onOpen} cardanoWalletConnector={cardanoWalletConnector} /> }
            </div>
        </Box>
    )
};

export default CryptoWallet