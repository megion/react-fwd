/**
 * Main entry point for fwd library
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { Root } from './components/Root'
import './fwd.scss'

export class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React advanced course</h1>
          </header>
          <Root />
        </div>
      </Provider>
    )
  }
}
