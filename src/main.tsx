import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log(import.meta.env.VITE_EVERY_ORG_API_KEY)
console.log(import.meta.env.VITE_EVERY_ORG__SECRET_KEY)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
