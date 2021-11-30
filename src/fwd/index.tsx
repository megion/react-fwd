/**
 * Main entry point for fwd library
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import './fwd.scss'
import { Link } from 'react-router-dom'

export class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React advanced course</h1>
          </header>
          <nav
            style={{
              borderBottom: 'solid 1px',
              paddingBottom: '1rem',
            }}
          >
            <Link to="/invoices">Invoices</Link> |{' '}
            <Link to="/expenses">Expenses</Link>
          </nav>
        </div>
      </Provider>
    )
  }
}
