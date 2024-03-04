import React, { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/login'

// bg-[url('https://images.pexels.com/photos/2611593/pexels-photo-2611593.jpeg')] bg-cover bg-center

const SignUp = () => {

    const [form, setForm] = useState(false);

    return (
        <div className={`min-h-screen bg-[url('https://images.pexels.com/photos/2611593/pexels-photo-2611593.jpeg')] bg-cover bg-center flex justify-center items-center`}>
            <div className="bg-slate-400 bg-opacity-20 shadow-lg rounded-lg p-8 max-w-md w-full backdrop-filter backdrop-blur-sm">
{
    form? <Login/>:
    <Signup/>
}

                <p className="text-black text-center mt-4">Already have an account? <label onClick={()=>setForm(!form)}>Login</label></p>
            </div>
        </div>
    )
}

export default SignUp
