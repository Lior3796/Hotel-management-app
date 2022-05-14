import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import 'flowbite';
import { ErrorBoundary } from 'react-error-boundary';


const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<ErrorBoundary fallback={<div>Load...</div>}>
    <App callback={() => console.log("renderered")} />
</ErrorBoundary>
);

// @desc using Hash router for fix deployment issuse

