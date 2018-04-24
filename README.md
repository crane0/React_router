#### 简单使用React_router
> 路由层级
- app下，
    - about路由，
    - home路由
        - news路由
        - message路由
            -message_detail路由

- 路由之间的通信
> message路由中，路由这样写：
```
<Route path='/home/message/:id' component={MessageDetail}/>
```
> message_detail路由中，这样接收
```
const id = +this.props.match.params.id
```
