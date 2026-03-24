import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Welcome from './Pages/welcome';
import { initializeTheme } from '@/hooks/use-appearance';

// Initialize the theme immediately
initializeTheme();

const el = document.getElementById('app');

if (el) {
    const root = createRoot(el);
    root.render(
        <StrictMode>
            <Welcome portfolioData={undefined} />
        </StrictMode>
    );
}
