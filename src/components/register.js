import React from 'react';
import RegisterForm from './RegisterForm';
import axios from "axios"

const Register = () => {

    const submit =(values) =>{
        axios.post("https://nurkadyrnur.pythonanywhere.com/auth/users",values)
        .then(()=>{
            alert("You are Success Registered")
        }).catch(()=>{
            alert("You have error? please correct errors")
        })
    }

    return (
        <div>
            <h1 className="text-center">Register</h1>
            <form action="">
                <RegisterForm onSubmit={submit}/>
            </form>
        </div>
    );
};

export default Register;