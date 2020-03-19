import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(){
        super();
    }
    componentWillMount() {
        // debugger;
        console.log('componentDidMoment')
        this.setState({
            a: 2
        })
    }
    componentDidUpdate() {
        console.log('componentDidMoment2222222222222')
    }
    render(){
        return (
            <div>这是服务端渲染的例子</div>  
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
)

// module.exports = App;

// class NewApp extends React.Component{
//     render() {
//         return <App />;
//     }
// }
// export default <NewApp /> 