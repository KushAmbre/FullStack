import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const Joker = () => {
        if (name && email) {
            navigate('/food');
        }
    }

    return ( 
        <div>
            <h1 className='KK'> KK Recipe Court</h1>
            <div className='d-flex justify-content-between m-4'></div>
            <form>
                <div className='mb-3'>
                    <label htmlFor="NameInput" className='form-label'>
                        Enter Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='NameInput'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="EmailInput" className='form-label'>
                        Email Address
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='EmailInput'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type='button' onClick={Joker} className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
