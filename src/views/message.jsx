import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import MessageDetail from './message_detail'

/*作为 home的二级路由*/
export default class Message extends Component {

    state = {
        messages: []    //这里必须定义为空数组，因为下面使用了map（还没有获取数据时，会跳过）
    }
    componentDidMount () {
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message01'},
                {id: 2, title: 'message02'},
                {id: 3, title: 'message03'},
                {id: 4, title: 'message04'},
            ]
            this.setState({
                messages
            })
        },1000)
    }

    /*
    * 路由中封装了 history，
    * push和replace方法中，参数都是路由链接，并且都是栈的形式
    * 区别，通过 push跳转到下个路由，浏览器回退时，就回到上个路由
    * replace，每跳转一次，都是将前一个历史记录替换，所以如果都是通过这种方式跳转，就无法回退。
    * */
    showDetail = (id) => {
        this.props.history.push(`/home/message/${id}`)
    }

    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/home/message/${m.id}`}>{m.title}</Link>
                                    {/*首先，事件后面跟的是一个回调函数的函数体！！
                                        这里，外面包了一层函数，是为了让里面的函数，可以被控制
                                        点击时执行，并且可以传递参数。
                                    */}
                                    <button onClick={() => {this.showDetail(m.id)}}>查看详情（push）</button>
                                    <button onClick={() => {this.showDetail2(m.id)}}>查看详情（push）</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/:id' component={MessageDetail}/>
            </div>
        )
    }
}
