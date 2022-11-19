import { Component, useState } from "react";
function AddUserFunction(){
// useState 

    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [age, setAge] = useState(0); 
    const [city, setCity] = useState(""); 

    const getUserName =(event)=>{
        setUserName(event.target.value);
    }

    const getEmail =(e)=>{
        setEmail(e.target.value)
    }
    const getpwd =(e)=>{
        setPassword(e.target.value)
    }

    const getAge =(e)=>{
        setAge(e.target.value);

    }

    const submit=(event)=>{
        const userinfo = {};
        userinfo.username = username;
        userinfo.email = email;
        userinfo.password = password;
        userinfo.age = age;

        console.log(userinfo);
        event.preventDefault();
    }

    return (
        <div>
            <h1>function component form</h1>
            <form onSubmit={submit} className={ age==0 ? "bg-primary" : "bg-dark"} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={getUserName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">age</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="age" onChange={getAge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={getEmail}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={getpwd}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">city</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setCity(e.target.value)}/>
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

export default AddUserFunction;