import React from 'react';
import PropTypes from 'prop-types';
import Body from "./Body";

export default class BodyChild extends React.Component {

    render() {
        return (
            <div>
                <p>{'My name is ' + this.props.name}</p>
                <p>{'get from root node:' + this.props.id}</p>
                <button onClick={this.props.showHobby.bind(null, 'haha')}>爱好展示</button>
            </div>

        );
    }
}

//设置properties的默认值，使其在没有传参时仍能够正常显示
BodyChild.defaultProps = {
    name: 'child'
};
//验证接受的properties的属性
BodyChild.propTypes = {
    name: PropTypes.string.isRequired,
};