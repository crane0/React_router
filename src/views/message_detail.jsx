import React, {Component} from 'react'

const allMessageDetails = [
    {id: 1, title: 'message01', content: '这是message01'},
    {id: 2, title: 'message02', content: '这是message02'},
    {id: 3, title: 'message03', content: '这是message03'},
    {id: 4, title: 'message04', content: '这是message04'},
]

/*作为 message的二级路由，也就是 home的三级路由*/
export default class MessageDetail extends Component {

    render() {

        //读取请求路径中的 id参数值
        const id = +this.props.match.params.id
        //find()方法，获取数组中满足条件(返回值为true)的第一个元素
        const messageDetail = allMessageDetails.find((detail, index) => id===detail.id)
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {messageDetail.title}</li>
                <li>CONTENT: {messageDetail.content}</li>
            </ul>
        )
    }
}
