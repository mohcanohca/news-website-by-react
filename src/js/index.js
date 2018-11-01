import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

class Index extends React.Component {
    componentWillMount() {
        console.log('Index--componentWillMount')
    }

    componentDidMount() {
        console.log('Index--componentDidMount')
    }

    render() {
        return (
            <div>
                <Header/>
                <Body id='bodybody'/>
                <Footer/>
            </div>

        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));