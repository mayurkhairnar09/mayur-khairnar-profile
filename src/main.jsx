import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import './index.css'

// Hide page loader when React app is mounted
const hideLoader = () => {
  const loader = document.getElementById('page-loader')
  if (loader) {
    loader.classList.add('loaded')
    setTimeout(() => loader.remove(), 500)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

// Hide loader after React renders
setTimeout(hideLoader, 100)