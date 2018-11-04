import React from 'react';

export default class ComponentList extends React.Component {
    render() {
        return (
            <div>
                <h1>我是列表页,id:{this.props.match.params.id}</h1>
                <ul>
                    <li>0</li>
                    <li>0</li>
                    <li>0</li>
                    <li>0</li>
                </ul>
            </div>
        )
    }
}