import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { authLogout, authCryptoWallet  } from 'redux/actions/authActions';

import useOpen from 'hooks/useOpen';
import useCardanoWallets from 'hooks/useCardanoWallets';

import Disconnected from './disconnected';
import Connected from './connected';

export const Connect = (props) => {

  const {authLogout} = props;

  const {openValue, onOpenValue} = useOpen();

  const cardanoWallets = useCardanoWallets();

  const {cryptoWalletData, accountChanged, networkChanged} = cardanoWallets;

  useEffect(() => {
    if(accountChanged || networkChanged) authLogout();
  }, [accountChanged, networkChanged, authLogout]);

  props = {
    ...props,
    openValue,
    onOpenValue,
    cardanoWallets
  };

  return (
    <div>

      {cryptoWalletData.hexAddress && <Connected {...props} />}

      {!cryptoWalletData.hexAddress && <Disconnected {...props} />}

    </div>
  )
}

const mapStateToProps = state => ({
  authReducers: state.authReducers,
});

const mapDispatchToProps = {
  authLogout,
  authCryptoWallet
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);