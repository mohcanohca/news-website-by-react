import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Index from './index';
import ComponentList from './components/List'

class Root extends React.Component {
    render() {
        return (
            <Router>
                {/*react-router的v4不再直接使用Router，而是<BrowserRouter>，<HashRouter>，<MemoryRouter>，<NativeRouter>，<StaticRouter>，并且这些标签下只能有一个子节点*/}
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/list/1234'>列表页</Link></li>
                        </ul>
                    </nav>
                    <Route exact component={Index} path='/'/>
                    <Route component={ComponentList} path='/list/:id'/>
                </div>

            </Router>
        );
    }
}

//设置为入口页面
ReactDOM.render(<Root/>, document.getElementById('app'));