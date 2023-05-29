import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import AuthRouter from './routes/auth'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthRouter />
  </React.StrictMode>
);

reportWebVitals();
