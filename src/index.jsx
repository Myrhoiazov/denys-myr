import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/App';
import 'shared/config/i18n/i18next';
import './shared/styles/index.scss';
import 'app/styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
