import { Component } from "react";
import Dummy from "./Dummy";

class Lifecycle extends Component{
    constructor(props) {
        super(props);
        // alert("constructor call");
        this.state = {
            count : 0,
            show:true
        }
    }

    componentDidMount(){
        // for (let index = 0; index < 10000; index++) {
        //     console.log(index);
        // }
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        if(prevState.count == 3){
            this.setState({count:10});
        }
    }

    render(){
        // alert("render call");
        return(
            <>
                {this.state.show ? <Dummy/> :<h1> component removed</h1>}
                <button onClick={()=>this.setState({show:!this.state.show})}>remove component</button>

                {/* <h1 className={this.state.count == 3? "bg-danger" : "bg-secondary"}>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                <h1>hello this is life cycle method implementation</h1> */}
            </>
        )
    }
    
}
export default Lifecycle;
































// lifecycle methods 
// only use in class component 

// mounting 
    // constructor
    // render 
    // componentdidmount
// updating 
    // shouldComponentUpdate
    // componentdidupdate
    // render 
// unmounting 
    // componentwillunmount

