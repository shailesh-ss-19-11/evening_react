import { Component } from "react";
class AddUser extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            email: "",
            age: 0,
            city:""
        }
    }

    getUserName =(event)=>{
        this.setState({username:event.target.value})
    }

    getEmail =(e)=>{
        this.setState({email:e.target.value})
    }
    getpwd =(e)=>{
        this.setState({password:e.target.value})
    }

    getAge =(e)=>{
        this.setState({age:e.target.value})
        console.log(this.state);

    }

    submit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }


    
    render() {
        return (
            <div>
            <h1>class component form</h1>

                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={this.getUserName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">age</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="age" onChange={this.getAge}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" >Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.getpwd}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">city</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event)=>this.setState({city:event.target.value})}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser;