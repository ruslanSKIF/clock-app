import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import ClockHtml from './components/ClockHtml';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <ClockHtml />
</React.StrictMode>
);


reportWebVitals();
