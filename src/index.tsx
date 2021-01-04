import * as React from "react"
import * as ReactDOM from "react-dom"
import { Point } from "./demo/point"
//import App from "./app"
import "./demo/demo"

function loadModuleApp(): void {
  const point: Point = new Point(1, 2)
  console.log("sum:", point.sum())

  import("./app").then(function(appModule) {
    const App = appModule.default
    ReactDOM.render(<App />, document.querySelector("#root"))
  })

  //ReactDOM.render(<App />, document.querySelector("#root"))
}

// TODO: call on init (it temporary)
//loadModuleApp()

export { loadModuleApp }
