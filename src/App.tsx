import './vendor'
import React from 'react'
import {Provider} from 'react-redux'
import store from './fwd/store'

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React advanced course</h1>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App
