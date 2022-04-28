import React from 'react';

import { connect } from 'react-redux';
import { authConnectWallet, authLogout } from 'redux/actions/authActions';

import useOpen from 'hooks/useOpen';
import useCardanoWalletConnector from 'hooks/useCardanoWalletConnector';

import Disconnected from './disconnected';
import Connected from './connected';

export const Connect = (props) => {

  const {authConnectWallet} = props;

  const {isLoggedIn} = props.authReducers;

  const {openValue, onOpenValue} = useOpen();

  const cardanoWalletConnector = useCardanoWalletConnector({callbackWalletChange: authConnectWallet});

  props = {
    ...props,
    openValue,
    onOpenValue,
    cardanoWalletConnector
  };

  return (
    <div>

      {isLoggedIn && <Connected {...props} />}

      {!isLoggedIn && <Disconnected {...props} />}

    </div>
  )
}

const mapStateToProps = state => ({
  authReducers: state.authReducers,
});

const mapDispatchToProps = {
  authConnectWallet,
  authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);