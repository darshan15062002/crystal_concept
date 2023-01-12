import React, { useState } from 'react'
import { Button, Input, Label } from '@windmill/react-ui'
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [standard, setStandard] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const register = async () => {

        // const res = await axios.post('http://localhost:4000/api/v1/student/new', {
        const res = await axios.post('https://crystal-concept-backend.onrender.com/api/v1/student/new', {


            "name": name,
            "email": email,
            "subject": [],
            "standard": standard,
            "marks": []
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
                alert("Created Successfully")


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }
    return (
        <div className='bg-purple-100   h-screen flex items-center justify-center'>

            <div className="flex flex-col items-center justify-center   h-4/5 w-4/5 ">

                <div className="sm:w-1/2 sm:h-full w-full  rounded-lg shadow-2xl hover:t border-2 flex flex-col gap-3 shadow-black sm:px-16 px-6 mx-4 mt-5 py-5 bg-purple-900">
                    <h1 className='font-bold text-xl font-serif mb-2  text-purple-300 text-center' >Register</h1>
                    <Label className='flex flex-col'  >
                        <span className='text-xs text-purple-50  font-serif'>Name</span>
                        <Input type='text' className="mt-1 h-8 rounded-md" required onChange={(e) => setName(e.target.value)} />
                    </Label>
                    <Label className='flex flex-col'  >
                        <span className='text-xs text-purple-50 font-serif'>E-mail</span>
                        <Input type='email' className="mt-1 h-8 rounded-md  " required onChange={(e) => setEmail(e.target.value)} />
                    </Label>
                    <Label className='flex flex-col'  >
                        <span className='text-xs  text-purple-50 font-serif'>Standard</span>
                        <Input type='number' className="mt-1 h-8 rounded-md  " required onChange={(e) => setStandard(e.target.value)} />
                    </Label>
                    <Label className='flex flex-col'  >
                        <span className='text-xs  text-purple-50 font-serif'>Password</span>
                        <Input type='password' className="mt-1 h-8 rounded-md " required onChange={(e) => setPassword(e.target.value)} />
                    </Label>
                    <Button className='bg-purple-400 p-1 mt-1' onClick={register}> Register</Button>
                    <a href="/" className='text-xs font-medium text-purple-50 '>I'm already registered</a>
                </div>
            </div>
        </div>
    )
}

export default Register