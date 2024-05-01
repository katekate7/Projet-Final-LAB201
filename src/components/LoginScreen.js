import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Importing authentication instance from Firebase configuration
import { useNavigate } from 'react-router-dom'; // Importing hook for programmatic navigation
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importing function for signing in with email and password
import '../css/Login.css'; // Importing CSS styles for the login screen

const LoginScreen = () => {
    // State variables for email, password, loading state, and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Function to sign in with email and password
    const signIn = async () => {
        setIsLoading(true); // Set loading state to true while signing in
        try {
            const response = await signInWithEmailAndPassword(auth, email, password); // Sign in with Firebase authentication
            console.log('Sign in successful:', response);
            navigate('/'); // Redirect to home page after successful sign in
            // Handle successful sign in
        } catch (error) {
            console.error('Error signing in:', error);
            setError(error.message); // Set error message if sign in fails
            // Handle sign in error
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    // Function to navigate back to home page
    const back = () => {
        navigate('/');
    };

    // JSX for login form and buttons
    return (
        <div className="container">
            <h1>Welcome to Admin Page</h1>
            {/* Input fields for email and password */}
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
            {/* Conditional rendering based on loading state */}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="buttonContainer">
                    {/* Button to navigate back */}
                    <button onClick={back}>BACK</button>
                    {/* Button to initiate sign in */}
                    <button onClick={signIn}>LOG IN</button>
                    {/* Error message display */}
                    {error && <p style={{color: "white"}}>Invalid credentials</p>}
                </div>
            )}
        </div>
    );
};

export default LoginScreen;
