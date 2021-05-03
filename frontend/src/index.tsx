import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Footer from 'components/Footer';
import Header from 'components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);