/**
 */
import React from 'react'
import {Route, Routes} from 'react-router-dom'

export class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    )
  }
}
