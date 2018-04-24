import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import MyNavLinK from './components/my-nav-link'
import About from './views/about'
import Home from './views/home'

export default class App extends Component {
    
    render() {
        return (
            <div>
                {/*这个是页面头部*/}
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>


                <div className="row">
                    {/*左边内容显示*/}
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*通过 to属性，指定路由链接*/}
                            <MyNavLinK to="/about">About</MyNavLinK>
                            <MyNavLinK to="/home">Home</MyNavLinK>
                        </div>
                    </div>

                    {/*右边内容显示*/}
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*显示路由组件*/}
                                <Switch>{/*Switch作用，只会显示与当前path配置的某个路由组件界面*/}
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    {/*默认显示的路由*/}
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
