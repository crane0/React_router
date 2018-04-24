import React from 'react'
import {NavLink} from 'react-router-dom'

/*
* props作为添加的其他属性，{...props}这样写，就可以保证无论多少个参数，都可以解析
* NavLink也是一个标签，className="list-group-item"这个是bootstrap的样式
* activeClassName，可以指定要添加的样式名，
*   因为最终都是被解析到 index.html，所以只要 index.html引入的css中有该样式名，指定的样式就可以生效
*   但是注意，因为已经引入了 bootstrap，所以要注意设置的样式的优先级！（否则会被覆盖）
* */
export default function (props){
    return <NavLink className="list-group-item" activeClassName='myClass' {...props}></NavLink>
}