import React from 'react';
import App from './components/App/App.jsx'
import './index.css';
import './assets/reset.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </StrictMode>
);
