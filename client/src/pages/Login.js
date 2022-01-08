import React, { useState, useRef } from 'react'
import Nav from '../components/Nav';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import $ from "jquery";


const Login = () => {
    let emailRef = useRef();
    let passwordRef = useRef();
    let navigate = useNavigate();
    let [loginError, setLoginError] = useState(false)

    const handleLogin = async (e)=>{
        e.preventDefault()
        const data = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        await Axios.post('/api/auth/login',data).then(res => {
   
                const token = {
                    userId:res.data.userId,
                    token:res.data.token
                }
                localStorage.setItem("token",JSON.stringify(token))

             navigate('/')
            }
        ).catch(error=>{setLoginError(true);hideError()})
    }

    const hideError = ()=>{
            setTimeout(()=>{
                $(".error").fadeOut()
            },1500)
            .then($(".error").css('display','block'))
    }


    return (
        <div>
            <Nav></Nav>
            <h1 className='text-center text-capitalize title-color mt-2'>Login</h1>
            <form method="POST" action="login" onSubmit={handleLogin} id='loginForm'>
                <label htmlFor="emailInput">Email :</label>
                <input type="email" ref={emailRef} name="email" id="emailInput" />
                <label htmlFor="inputPassword">Mot de passe :</label>
                <input ref={passwordRef} type="password" name="password" id="inputPassword" />
                <input type="submit" value="Connexion" className='btn btn-success col-8 col-sm-4 col-xl-2 mt-5' />
            </form>
            {loginError && (<p className='error text-danger'>Echec de connexion</p>)}
        </div>
    );
};

export default Login;