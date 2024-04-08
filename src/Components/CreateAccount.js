import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccount = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/form-room');
        } catch (e) {
            setError(e.message);
        }
    }

    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create Account
                    </h2>
                    {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
                </div>
                
                    <input 
                        type="email" 
                        autoComplete="email" 
                        required 
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border 
                                   border-gray-300 placeholder-gray-500 text-gray-900 
                                   rounded-md focus:outline-none focus:ring-indigo-500 
                                   focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Your email address" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        autoComplete="new-password" 
                        required 
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border 
                                   border-gray-300 placeholder-gray-500 text-gray-900 
                                   rounded-md focus:outline-none focus:ring-indigo-500 
                                   focus:border-indigo-500 focus:z-10 sm:text-sm mt-3" 
                        placeholder="Your password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        autoComplete="new-password" 
                        required 
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border 
                                   border-gray-300 placeholder-gray-500 text-gray-900 
                                   rounded-md focus:outline-none focus:ring-indigo-500 
                                   focus:border-indigo-500 focus:z-10 sm:text-sm mt-3" 
                        placeholder="Confirm your password" 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)} 
                    />
                    <button 
                        onClick={createAccount} 
                        className="w-full flex justify-center py-2 px-4 border border-transparent 
                                   rounded-md shadow-sm text-sm font-medium text-white 
                                   bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                                   focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Create Account
                    </button>
                
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/loginpage" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;