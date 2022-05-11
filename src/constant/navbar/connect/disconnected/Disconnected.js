import React from 'react';

import CryptoWallets from 'components/cryptoWallets';
import Box from '../../components/Box';

export const Disconnected = (props) => {

    const {onOpenValue, openValue, cardanoWallets, authCryptoWallet} = props;

    return (
        <div>
            <Box desktop button={<button onClick={() => onOpenValue("disconnected")}>Connect</button>} /> 
    
            { openValue === "disconnected" && <CryptoWallets onClose={onOpenValue} walletConnecter={cardanoWallets} callback={authCryptoWallet} /> }
        </div>
    )
}

export default Disconnected