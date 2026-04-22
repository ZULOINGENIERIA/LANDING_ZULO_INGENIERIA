import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const inertiaElement = document.getElementById('app');
const inertiaPageScript = document.querySelector('script[data-page="app"][type="application/json"]');

if (inertiaElement && (inertiaElement?.dataset?.page || inertiaPageScript)) {
    createInertiaApp({
        resolve: (name) =>
            resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        setup({ el, App, props }) {
            createRoot(el).render(React.createElement(App, props));
        },
        progress: {
            color: '#C89B3C',
            showSpinner: false,
        },
    });
}
