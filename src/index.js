import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter} from 'react-router-dom'

import App from './app'
//如果使用了HashRouter，则页面中的路由，点击第二次时，就会报警告！
{/*<HashRouter>*/}
{/*<App />*/}
{/*</HashRouter>,*/}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
