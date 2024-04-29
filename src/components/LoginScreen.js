import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Now 'auth' is exported
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../css/Login.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signIn = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log('Sign in successful:', response);
            navigate('/');
            // Handle successful sign in
        } catch (error) {
            console.error('Error signing in:', error);
            setError(error.message)
            // Handle sign in error
        } finally {
            setIsLoading(false);
        }
    };

    const back = () => {
        navigate('/');
    }

    return (
        <div className="container">
            <h1>Welcome to Admin Page</h1>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="buttonContainer">

                    <button onClick={back}>BACK</button>
                    <button onClick={signIn}>LOG IN</button>
                    {error && <p style={{color: "white"}}>Invalid credentials</p>}
                    {/* <button onClick={signUp}>SIGN UP</button> */}
                </div>
            )}
        </div>
    );
};

export default LoginScreen;
