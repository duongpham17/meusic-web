import React from 'react';

import { connect } from 'react-redux';
import { authConnectWallet, authLogout } from 'redux/actions/authActions';
import { userUpdateCryptoAddress } from 'redux/actions/userActions';

import useOpen from 'hooks/useOpen';
import useCardanoWalletConnector from 'hooks/useCardanoWalletConnector';

import Disconnected from './disconnected';
import Connected from './connected';

export const Connect = (props) => {

  const {authConnectWallet, userUpdateCryptoAddress, authLogout} = props;

  const {isLoggedIn} = props.authReducers;

  const {openValue, onOpenValue} = useOpen();

  const callback = isLoggedIn ? userUpdateCryptoAddress : authConnectWallet;

  const cardanoWalletConnector = useCardanoWalletConnector({callback, disconnect: authLogout});

  const {wallet} = cardanoWalletConnector;

  props = {
    ...props,
    openValue,
    onOpenValue,
    cardanoWalletConnector
  };

  return (
    <div>

      {wallet.name && <Connected {...props} />}

      {!wallet.name && <Disconnected {...props} />}

    </div>
  )
}

const mapStateToProps = state => ({
  authReducers: state.authReducers,
});

const mapDispatchToProps = {
  authConnectWallet,
  authLogout,
  userUpdateCryptoAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);