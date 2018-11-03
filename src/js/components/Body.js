import React from 'react';
import BodyChild from './BodyChild';

class Body extends React.Component {
    constructor() {
        super();//调用基类的所有的初始化方法
        this.state = {
            name: 'ydz',
            hobby: '...',
        }
    }

    showHobby(hobby) {
        console.log(hobby);
    }

    render() {

        let it = this;
        setTimeout(function () {
            it.setState({
                name: 'ss',
                hobby: 'walking'
            })
        }, 4000);
        return (
            <div>
                <h2>页面主体内容</h2>
                <p>
                    {this.state.name + ' like ' + this.state.hobby}
                </p>
                {/*将本节点接受的所有properties向下传递的快捷方式*/}
                <BodyChild {...this.props} name='bean' showHobby={this.showHobby}/>
            </div>
        )
    }
}

export default Body;