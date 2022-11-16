import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
            name:"shailesh"
        }
    }

    increment =()=>{
        this.setState(
            {
                count:this.state.count+1
            }
            )
        }
        
    decrement =()=>{
        this.setState(
            {
                count:this.state.count-1
            }
            )
        }

    changename = ()=>{
        this.setState(
            {
                name:"pranali"
            }
            )
    }

    render(){
        return(
            <center>
                <button className="btn btn-lg btn-primary m-5" onClick={this.increment}>+</button>

                <span style={{fontSize:"24px"}}> {this.state.count}  </span>

                <button className="btn btn-lg btn-primary m-5" onClick={this.decrement}>-</button>

                <h1>{this.state.name}</h1>
                <button className="btn btn-lg btn-secondary m-5" onClick={this.changename}>changename</button>
            </center>
        )
    }
}

export default Counter;