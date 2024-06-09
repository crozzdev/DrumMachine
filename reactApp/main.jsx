import { createRoot } from 'react-dom/client';
import App from './src/App';
import { StrictMode } from 'react';
import './index.css'


const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
