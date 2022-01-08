import React, {useState,useRef} from 'react'
import Nav from '../components/Nav';
import Axios from 'axios'

const Signup = () => {
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    const inputRef = useRef();
    const inputPassword = useRef();


    const handleSignup = async (e) => {
        e.preventDefault()
        setEmail(inputRef.current.value)
            setPassword(inputPassword.current.value)
        const data = {
            email:email,
            password:password,
            createdAt:new Date()
        }
        await Axios.post('api/auth/signup', data).then().catch(console.log("error"))
    }

    return (
        <div>
            <Nav></Nav>
            <div id="signup">
                <h1 className='text-center text-capitalize title-color mt-2'>Signup</h1>
                <form method="POST" action="signup" onSubmit={handleSignup}>
                    <input type="email" ref={inputRef} name="email" id="emailInput" />
                    <input ref={inputPassword} type="password" name="password" id="inputPassword" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Signup;