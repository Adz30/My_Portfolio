import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics';

inject(); // Initialize Vercel Analytics

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);