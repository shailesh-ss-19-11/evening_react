// Api is the Application programming interface which is in the form of URL 

import axios from "axios"
import { useState,useEffect } from "react";

// we can use fetch function for api call , AJAX , Axios 

// API can do send request and get data in response vice-versa

// GET is use for get data from server using url 
// POST is use for send the data in server 
// PUT and PATCH for update data in server 
// DELETE  use for delete 

function ApiTest(){
    const [data, setData] = useState([]);


   
    useEffect(()=>{
        axios.get("https://retoolapi.dev/rWUDs6/data").then((response)=>{
            if(response.status>=200){
                setData(response.data);
            }
        });
    },[]);
    
    return(
        <>
            <h1>API integration </h1>
            <table className="table border border-primary container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </>
    )
}

export default ApiTest;