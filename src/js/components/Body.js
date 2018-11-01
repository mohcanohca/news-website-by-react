import React from 'react';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    componentWillMount() {
        console.log('Body--componentWillMount')
    }

    componentDidMount() {
        console.log('Body--componentDidMount')
    }

    render() {
        let userName = 'Sunny';
        let able = false;

        let html1 = "practice\u0020jsx";
        let html2 = "practice&nbsp;jsx";

        let {clicked} = this.state;
        return (
            <div style={{
                backgroundColor: clicked ? 'red' : '#fff',
            }}>
                <h2>页面主体内容</h2>
                {/*三元表达式*/}
                <p>{userName === '' ? '用户没有登录' : '用户名：' + userName}</p>
                {/*动态绑定属性值*/}
                <input type="text" disabled={able}/>

                {/*需要进行Unicode转码*/}
                <p>{html1}</p>

                {/*无需进行转码，但是操作不安全*/}
                <p dangerouslySetInnerHTML={{__html: html1}}></p>

                <button onClick={this.changColor.bind(this)}>点击改变颜色</button>
            </div>
        )
    }

    changColor=() =>{
        let {clicked} = this.state;
        this.setState({
            clicked: !clicked
        })
    };
}

export default Body;