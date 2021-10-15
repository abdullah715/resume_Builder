import React from 'react';
import './style.css';
import Index from './pages/index';

import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return <Provider store={store}> <Index /> </Provider> ;
}
