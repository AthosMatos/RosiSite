import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxContext from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={reduxContext}>
      <App />
    </Provider>
);

