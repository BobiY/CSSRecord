import React from "react";
import ReactDOM from "react-dom";
import "./css/index-react.css";

class App extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div className='font'>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));