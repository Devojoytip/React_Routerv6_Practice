import React from 'react';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);