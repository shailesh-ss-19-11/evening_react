import React,{Component} from 'react'
import { userData } from '../UserData';
import Adduser from './Adduser';
import {Button} from 'react-bootstrap'
class UserData extends Component{
    constructor(){
        super();
        this.state={
            users: userData,
            show:false
        }
    }
    updateUser = (user)=>{
        const users = [...this.state.users];
        const index = users.indexOf(user);
        users[index].title = "updated";
        this.setState({users})
    }

    delateUser=(person)=>{
        console.log(person);
        // mujhe vo data chahiye jiski id user.id na ho 
        const users = this.state.users.filter((u)=>u.id!==person.id)
        this.setState({users});
    }

    adduser = (user)=>{
        console.log(user,"this is taken from another component");
        const users = [...this.state.users];
        users.unshift(user);
        this.setState({users});
    }

    handleShow=()=>{
        this.setState({show:true});
    }

     handleClose = ()=>{
        this.setState({show:false});
    }

    render(){
        return(
            <div className='container'>
            <Button variant="primary" onClick={this.handleShow}>
                    Add User
            </Button>
            <Adduser show={this.state.show} handleClose={this.handleClose} adduser={this.adduser}/>
             <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td><button className="btn btn-primary m-2" onClick={()=>this.updateUser(user)}>Update</button></td>
                            <td><button className="btn btn-danger m-2" onClick={()=>this.delateUser(user)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
             </table>
            </div>
        )
    }
}
export default UserData;