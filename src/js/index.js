import printMe from './print';
const React=require('react');
const ReactDOM=require('react-dom');

ReactDOM.render(
    <div>
        <h1>hello world!hot???</h1>
        <button onClick={printMe}>print</button>
    </div>,
    document.getElementById('app')
);
