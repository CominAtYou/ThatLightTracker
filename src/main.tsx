import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Fonts.css'
import './index.css'
import { ProgressDataProvider } from './data/ProgressDataManager.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProgressDataProvider>
      <App />
    </ProgressDataProvider>
  </React.StrictMode>,
)
