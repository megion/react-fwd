//import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, Middleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import { composeEnhancers } from './utils'

// configure middlewares
//export const history = createBrowserHistory()
//const middlewares = [routerMiddleware(history), epicMiddleware]
const middlewares: Middleware[] = [thunk, logger]

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

// rehydrate state on app start
const initialState = {}

// create store
const store = createStore(rootReducer(), initialState, enhancer)
//const store = createStore(rootReducer())

// export store singleton instance
export default store
