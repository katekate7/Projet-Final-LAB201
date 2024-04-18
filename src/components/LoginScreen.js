import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Now 'auth' is exported
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../css/Login.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log('Sign in successful:', response);
            // Handle successful sign in
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign in error
        } finally {
            setIsLoading(false);
        }
    };

    const signUp = async () => {
        setIsLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Sign up successful:', response);
            // Handle successful sign up
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle sign up error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Welcome to WebDoc</h1>
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
                    <button onClick={signIn}>LOG IN</button>
                    <button onClick={signUp}>SIGN UP</button>
                </div>
            )}
        </div>
    );
};

export default LoginScreen;
