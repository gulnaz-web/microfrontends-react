// если закоментить этот файл, то микрофронт не будет работать, но хост будет работать

import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Функция для монтирования приложения автономно
function mount() {
   const rootElement = document.getElementById('root');
   if (!rootElement) throw new Error('Failed to find the root element');

   const root = createRoot(rootElement);
   // В самостоятельном режиме используем свой BrowserRouter
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </React.StrictMode>,
   );
}

// Если приложение запущено самостоятельно, вызываем mount
if (process.env.NODE_ENV === 'development') {
   // Проверяем, есть ли родительское приложение
   const standalone = window.self === window.top;
   if (standalone) {
      mount();
   }
}

export default App;
