import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'

// configure middlewares
//export const history = createBrowserHistory();
//const middlewares = [routerMiddleware(history), epicMiddleware]

// compose enhancers
//const enhancer = composeEnhancers(applyMiddleware(...middlewares))

// rehydrate state on app start
//const initialState = {}

// create store
//const store = createStore(rootReducer(), initialState, enhancer)
const store = createStore(rootReducer())

// export store singleton instance
export default store
