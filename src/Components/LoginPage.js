import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/form-room');
        } catch (e) {
            setError(e.message);
        }
    }

    useEffect(() => {
        const uiConfig = {
            signInSuccessUrl: '/form-room',
            signInOptions: [
                GoogleAuthProvider.PROVIDER_ID,
                // Add more providers if needed
            ],
        };

        // Check if AuthUI is already initialized
        if (!firebaseui.auth.AuthUI.getInstance()) {
            const ui = new firebaseui.auth.AuthUI(getAuth());
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }, []);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Log In
                        </h2>

                        {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}

                        <input
                            placeholder="Your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border
                                       border-gray-300 placeholder-gray-500 text-gray-900
                                       rounded-md focus:outline-none focus:ring-indigo-500
                                       focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                        <input type="password"
                            placeholder="Your password"
                            value={password}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border
                                       border-gray-300 placeholder-gray-500 text-gray-900
                                       rounded-md focus:outline-none focus:ring-indigo-500
                                       focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                            onChange={e => setPassword(e.target.value)} />
                        <button className="w-full flex justify-center py-2 px-4 border border-transparent
                                       rounded-md shadow-sm text-sm font-medium text-white
                                       bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                                       focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                            onClick={logIn}>Log In</button>
                        <div id="firebaseui-auth-container"></div>
                        <Link to="/create-account" className="font-medium text-indigo-600 hover:text-indigo-500">Don't have an account? Create one here</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;