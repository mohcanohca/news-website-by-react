import React from 'react';

class Body extends React.Component {
    render() {
        let userName = 'Sunny';
        let able = false;

        let html1 = "practice\u0020jsx";
        let html2 = "practice&nbsp;jsx";
        return (
            <div>
                <h2>页面主体内容</h2>
                {/*三元表达式*/}
                <p>{userName === '' ? '用户没有登录' : '用户名：' + userName}</p>
                {/*动态绑定属性值*/}
                <input type="text" disabled={able}/>

                {/*需要进行Unicode转码*/}
                <p>{html1}</p>

                {/*无需进行转码，但是操作不安全*/}
                <p dangerouslySetInnerHTML={{__html: html1}}></p>
            </div>
        )
    }
}

export default Body;