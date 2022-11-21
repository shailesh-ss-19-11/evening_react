import React,{Component} from 'react'
import { userData } from '../UserData';
class UserData extends Component{
    constructor(){
        super();
        this.state={
            users: userData
        }
    }

    updateUser=(id)=>{
        alert(id);
        // obj
    }
    delateUser=(id)=>{
        alert(id);
    }
    render(){
        return(
            <>
             <table className='container table'>
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
                            <td><button className="btn btn-primary m-2" onClick={()=>this.updateUser(user.id)}>Update</button></td>
                            <td><button className="btn btn-danger m-2" onClick={()=>this.delateUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
             </table>
            </>
        )
    }
}
export default UserData;