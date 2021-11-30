import './vendor'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './fwd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './fwd/routes/AdminPage'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminPage />} />
      {/* <Route path="/auth" element={<AuthPage />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)
