import React, { useState } from 'react'
import { Button, Input, Label } from '@windmill/react-ui'
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createSearchParams, useNavigate } from 'react-router-dom';


function Login({ users }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (e) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Login Successfully")
                if (user.email == 'teacher@gmail.com') {
                    navigate({
                        pathname: '/admin', search: createSearchParams({ id: user.email }).toString()
                    })
                } else {
                    navigate({ pathname: '/main', search: createSearchParams({ id: user.email }).toString() })
                }


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className='bg-slate-100   py-10   h-screen w-screen px-8 sm:px-20 ' style={{ fontFamily: 'Poppins' }}>


            <div className="sm:w-1/2 sm:h-2/3 w-full  rounded-lg shadow-2xl hover:t  flex flex-col gap-3 shadow-black sm:px-16 px-6 mx-4 py-5 " style={{ fontFamily: 'Poppins', background: '#00337C' }} >
                <h1 className='font-bold text-2xl font-serif mb-2 text-white text-center' style={{ fontFamily: 'Poppins' }}> Log in</h1>
                <Label className='flex flex-col'  >
                    <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Email</span>
                    <Input type='text' className="mt-1 h-8 rounded-md " onChange={(e) => setEmail(e.target.value)} />
                </Label>
                <Label className='flex flex-col'  >
                    <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Password</span>
                    <Input type='password' className="mt-1 h-8 rounded-md " onChange={(e) => setPassword(e.target.value)} />
                </Label>
                <Button className='bg-purple-400  p-1 mt-1' onClick={login} style={{ fontFamily: 'Poppins', background: '#0081C9' }}> Login</Button>
                <div className="flex justify-between">
                    <a href="/register" className='text-xs font-medium text-purple-50' style={{ fontFamily: 'Poppins' }}>I don't have an account</a>
                    <a href="#" className='text-xs font-medium text-purple-50' style={{ fontFamily: 'Poppins' }}>Forgot Password?</a>
                </div>

            </div>

        </div >
    )
}

export default Login
