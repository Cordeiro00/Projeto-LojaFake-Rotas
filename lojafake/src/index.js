import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaProdutos from './Paginas/PaginaProdutos';
import PaginaSobre from './Paginas/PaginaSobre';
import App from './App';

const roteador = createBrowserRouter([
  { path: '/', element: <App/> },
  { path: '/Produtos', element: <PaginaProdutos/> },
  { path: '/Sobre/:id', element: <PaginaSobre/> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {roteador}/>
  </React.StrictMode>
);

reportWebVitals();
