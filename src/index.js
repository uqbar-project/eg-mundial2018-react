import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Favicon from 'react-favicon'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Favicon url="./favicon.ico" ></Favicon>
            <App />
        </div>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
