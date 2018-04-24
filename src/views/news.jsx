import React, {Component} from 'react'

/*作为 home的二级路由*/
export default class News extends Component {

    state = {
        newsArr: ['xlx001', 'xlx002', 'xlx003']
    }

    render() {
        return (
            <ul>
                {
                    this.state.newsArr.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        )
    }
}
