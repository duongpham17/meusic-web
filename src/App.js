import 'styles/index.scss';
import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from 'redux/store';

import Loader from 'loader';

import Theme from 'theme';

import Alert from 'constant/alert';
import Download from 'constant/download';
import Navbar from 'constant/navbar';
import Upload from 'constant/upload';
import ScrollToTop from 'constant/scrollToTop';
import Control from 'constant/control';

import Pages from './pages';

import Routing from 'routing';

export const App = () => (
  <Provider store={store}>

    <Loader/>
    
    <Theme>
  
      <HashRouter hashType="hashbang">
        <Alert/>
        <Download/>
        <Routing />
        <Upload />
        <Navbar />
        <Pages />
        <ScrollToTop/>
        <Control />
      </HashRouter>

    </Theme>

  </Provider>
)

export default App;
