import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>

        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));