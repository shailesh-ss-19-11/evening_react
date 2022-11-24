import React,{Component} from "react";

class Dummy extends Component{
    componentWillUnmount(){
        alert("component removed");
    }
    render(){
        return(
            <h1>
                Dummy component for componentwillunmount
            </h1>
        )
    }
}

export default Dummy;