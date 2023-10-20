import React, { useState } from 'react'
import { BtnWrapper } from './BtnWrapper'
import { InputWrapper } from './Inputwrapper'
import axios from 'axios'
import { setToken } from '../../store/slice/userSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = ({ setSignupstatus }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispacth = useDispatch();
    const navigate = useNavigate();

    const sumbitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}login`, {
            email,
            password
        });
        dispacth(setToken(response.data.data));
        toast.success('Logged in successfully');
        navigate('/role');
    }

    return (
        <form className='flex flex-col items-center justify-center' onSubmit={sumbitHandler}>
            {InputWrapper("email", "email", email, setEmail)}
            {InputWrapper("secret", "password", password, setPassword)}
            {BtnWrapper("login")}
        </form>
    )
}

export default Login