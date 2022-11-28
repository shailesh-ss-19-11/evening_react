import axios from 'axios';
import React,{useState,useEffect} from 'react';


const AddData = () => {
    const [email, setemail] = useState("");
    const [fullname, setfullname] = useState("");
    const [age, setage] = useState(0);
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://retoolapi.dev/pkyXoV/data").then((response)=>{
            setdata(response.data);
        })
    }, []);

    const save =(event)=>{
        event.preventDefault();
    
        const obj={};
        obj.email = email
        obj.full_name=fullname
        obj.age = age
        console.log(obj);

        axios.post("https://retoolapi.dev/pkyXoV/data",obj).then((response)=>{
            console.log(response);
            setdata(data,...response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const del=(id)=>{
        axios.delete(`https://retoolapi.dev/pkyXoV/data/${id}`).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const update = (id)=>{
        const obj={
            full_name:"abc xyz"
        }

        axios.put(`https://retoolapi.dev/pkyXoV/data/${id}`,obj).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='container'>
            <form onSubmit={save}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setfullname(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className="mb-3 form-check">
                    <label htmlFor="exampleInputPassword1" className="form-label">age</label>
                    <input type="number" className="form-control" id="exampleCheck1" onChange={(e)=>{setage(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">email</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((d)=>(<tr key={d.id}>
      <td >{d.id}</td>
      <td>{d.full_name}</td>
      <td>{d.email}</td>
      <td>{d.age}</td>
      <td><button className='btn btn-primary'onClick={()=>del(d.id)}>delete</button></td>
      <td><button className='btn btn-primary'onClick={()=>update(d.id)}>edit</button></td>
    </tr>
    ))}
  </tbody>
</table>
        </div>
    );
}

export default AddData;
