import React from "react";
import ReactDOM from "react-dom";
import img from "../../../SVG/water/ShiTou.svg";
class Image extends React.Component{
    render() {
        return (
            <div>
                我是 SVG 图片
                <img src={img} alt=""/>
            </div>
        )
    }
}

ReactDOM.render(<Image />, document.getElementById('app'))