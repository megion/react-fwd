// import React namespace
import * as React from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import "./app.less"
import "bootstrap/dist/css/bootstrap.css"

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div>ts demo</div>
      </Provider>
    )
  }
}

export default App
