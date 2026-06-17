import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./styles/global.css";
import App from './App.jsx'
import { AuthProvider } from "./context/AuthProvider";
import { UserDataProvider } from "./context/UserDataProvider";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserDataProvider>
  </AuthProvider>
)