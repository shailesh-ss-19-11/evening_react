import { Component } from "react";

class HomeComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            age:this.props.age,
            info:this.props.info
        }
        console.log(props);
        // this.props.hellofunction(); 
    }
    render(){
        return(
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.info.address}</h1>
                <h1>{this.state.info.country.toLowerCase()}</h1>
                <button onClick={this.props.hellofunction}>hello</button>
            </>
        )
    }
}
export default HomeComponent;

// props is the data sharing concept in which we can share data between Components 
// data sharing can do with parent to child only 
