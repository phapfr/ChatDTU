import React, { Fragment, useState } from 'react';
import axios from "axios";

function Login(){
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const handleNameChange = (value) => {setName(value);}
    const handlePhoneNOChange = (value) => {setPhoneNo(value);}
    const handleLogin = () =>{
        const data = {
            Name : name,
            phoneNo : phoneNo,
        };
        const url = 'https://localhost:44358/api/Test/Login';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) =>{
            alert(error);
        })
    return(
        <Fragment>
            <div>Login</div>
            <label>Name</label>
        <input type="text" id='txtName' placeholder='Enter Name' onChange={(e) => handleNameChange(e.target.value)}/><br></br>
        <label>Phone No</label>
        <input type="text" id='txtPhoneNo' placeholder='Enter Phone No' onChange={(e) => handlePhoneNOChange(e.target.value)}/><br></br>
        <button onClick={() => handleLogin()}>Login</button>
        </Fragment>
        
    )
}
export default Login;