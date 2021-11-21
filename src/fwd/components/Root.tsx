/**
 */
import React from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import AdminPage from '../routes/AdminPage'
import AuthPage from '../routes/AuthPage'

export class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Link to="/admin">Admin</Link> | <Link to="/auth">Auth</Link>
        <div>
          Hello world
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
