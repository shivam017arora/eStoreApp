import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomProvider, Context } from './ItemsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProvider>
    <App />
  </CustomProvider>
);