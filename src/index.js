import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
import { createPolicy} from './actions'
import { deletePolicy} from './actions'
import { createClaim} from './actions'



const store = createStore(allReducers)
store.dispatch(createPolicy('Alex'))
console.log(store.getState())

store.dispatch(createClaim('Alex', 100))
store.dispatch(deletePolicy('Alex'))
console.log(store.getState())



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
